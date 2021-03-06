import { escape } from "sqlstring";
import { closeKeysOrValueParenthesis, chainKeyEqualsValue, chainKeys } from "./stringUtils"
import { IFormatter, IFields } from "./interfaces";


const insert = (formatter: IFormatter) => {
  return ({table, fields} : {table: string, fields: IFields}) => {
    const {keys, values} = Object.keys(fields).reduce((sql, key) => ({
      keys: `${sql.keys} ${key},`,
      values: `${sql.values} ${formatter(fields[key])},`
    }), {keys: "", values: ""});
    return `insert into ${table} ${closeKeysOrValueParenthesis(keys)} values ${closeKeysOrValueParenthesis(values)}`;
  }
}


const update = (formatter: IFormatter) => {
  return ({table, fields, where: whereFields} : {table: string, fields: IFields, where: IFields}) => {
    const updatedFields = chainKeyEqualsValue({formatter, fields});
    const where = chainKeyEqualsValue({formatter, fields: whereFields});
    return `update ${table} set ${updatedFields} where ${where}`;
  }
}

const select = (formatter: IFormatter) => {
  return ({table, fields, where: whereFields, limit} : {table: string, fields?: Array<string>, where: IFields, limit?: number}) => {
    const selectedFields = fields ? chainKeys(fields) : "*";
    const where = chainKeyEqualsValue({formatter, fields: whereFields});
    const limitClause = limit ? ` LIMIT ${limit}` : "";
    return `select ${selectedFields} from ${table} where ${where}${limitClause}`;
  }
}

const _delete = (formatter: IFormatter) => {
  return({table, where: whereFields} : {table: string, where: IFields}) => {
    return `delete from ${table} where ${chainKeyEqualsValue({formatter, fields: whereFields})}`;
  }
}

const queryHelper = (formatter: IFormatter = escape) => {
  return {
    update: update(formatter),
    insert: insert(formatter),
    select: select(formatter),
    delete: _delete(formatter)
  }
}

export default queryHelper