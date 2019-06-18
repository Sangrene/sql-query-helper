import { escape } from "sqlstring";
import { closeKeysOrValuesRequest } from "./stringUtils"
import { IFormatter, IFields } from "./interfaces";

const chainKeyEqualsValue = (formatter: IFormatter, fields: IFields) => {
  return Object.keys(fields).reduce((sql, key) => `${sql}, ${key} = ${formatter(fields[key])}`, "").slice(2);
}

const chainKeys = (formatter: IFormatter, keys: Array<string>) => {
  return keys.reduce((sql, key) => `${sql}, ${key}`, "").slice(2);
}

const insert = (formatter: IFormatter = escape) => {
  return ({table, fields} : {table: string, fields: IFields}) => {
    const {keys, values} = Object.keys(fields).reduce((sql, key) => ({
      keys: `${sql.keys} ${key},`,
      values: `${sql.values} ${formatter(fields[key])},`
    }), {keys: "(", values: "("});
    return `insert into ${table} ${closeKeysOrValuesRequest(keys)} values ${closeKeysOrValuesRequest(values)}`;
  }
}


const update = (formatter: IFormatter = escape) => {
  return ({table, fields, where: whereFields} : {table: string, fields: IFields, where: IFields}) => {
    const updatedFields = chainKeyEqualsValue(formatter, fields);
    const where = chainKeyEqualsValue(formatter, whereFields);
    return `update ${table} set ${updatedFields} where ${where}`;
  }
}

const select = (formatter: IFormatter = escape) => {
  return ({table, fields, where: whereFields} : {table: string, fields?: Array<string>, where: IFields}) => {
    const selectedFields = fields ? chainKeys(formatter, fields) : "*";
    const where = chainKeyEqualsValue(formatter, whereFields);
    return `select ${selectedFields} from ${table} where ${where}`;
  }
}

const _delete = (formatter: IFormatter = escape) => {
  return({table, where: whereFields} : {table: string, where: IFields}) => {
    return `delete from ${table} where ${chainKeyEqualsValue(formatter, whereFields)}`;
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