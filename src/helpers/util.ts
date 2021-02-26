import { type } from "os"

const toString = Object.prototype.toString

export function isDate (val:any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val:any): val is Object {
  return val !== null && typeof val === 'object'
}

// 两种对象的区别 new Object() 生成纯对象
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
