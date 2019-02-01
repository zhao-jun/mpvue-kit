import request from './flyio/request'

export const getTest = (param) => request('GET', '/comm/items', param)
