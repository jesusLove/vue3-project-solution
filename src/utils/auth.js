import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '../constant'

import { getItem, setItem } from './storage'

/**
 * @returns 获取时间戳
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}
/**
 * 设置时间 token 保存时间
 */
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

export function isCheckTimeout() {
  const currentTime = Date.now()
  const timestamp = getTimeStamp()

  return currentTime - timestamp > TOKEN_TIMEOUT_VALUE
}
