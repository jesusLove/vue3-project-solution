import { resolve } from 'path-browserify'

/**
 * 返回所有子路由
 * @param {*} routes
 * @returns
 */
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

/**
 * 剔除子路由
 * getRoutes() 返回完整路由表，
 * * 存在重复的路由数据
 * * 不满足 meta && meta.title && mata.icon 的数据不应该存在
 * @param {*} routes  router.getRoutes() 获取所有 路由记录 的完整列表
 * @returns
 */
export function filterRouters(routes) {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route) => {
    return !childrenRoutes.find((childRoute) => {
      return childRoute.path === route.path
    })
  })
}
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]')
    return true
  return false
}
/**
 * 生成路由菜单数组， 根据 routes 返回对应的 menu 规则数组
 *
 * @param {*} routes
 * @param {*} basePath
 * @returns
 */
export function generateMenus(routes, basePath = '') {
  const result = []
  // 遍历路由表
  routes.forEach((item) => {
    const { meta, children } = item
    // 不存在 children && 不存在 meta 直接返回
    if (isNull(meta) && isNull(children)) return
    // 存在 children 不存在 meta 进入迭代
    if (isNull(meta) && !isNull(children)) {
      result.push(...generateMenus(children))
      return
    }
    // 合并 path 作为跳转路径
    const routePath = resolve(basePath, item.path)
    // 路由分离后，存在同名路径需要单独处理
    let route = result.find((item) => item.path === routePath)

    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      // icon 和 title 必须同时存在
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }
    // 存在 children 进入迭代到 children
    if (children) {
      route.children.push(...generateMenus(children, route.path))
    }
  })
  return result
}
