import { IFormatter, IFields } from "./interfaces";
import { escape } from "sqlstring";

export const closeKeysOrValueParenthesis = (str: string) => {
  return `(${str.slice(0, str.length -1)} )`;
}

export const chainKeyEqualsValue = ({formatter = escape, fields}: {formatter?: IFormatter, fields: IFields}) => {
  return Object.keys(fields).reduce((sql, key) => `${sql}, ${key} = ${formatter(fields[key])}`, "").slice(2);
}

export const chainKeys = (keys: Array<string>) => {
  return keys.reduce((sql, key) => `${sql}, ${key}`, "").slice(2);
}
