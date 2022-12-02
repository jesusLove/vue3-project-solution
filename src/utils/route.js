import { resolve } from 'path-browserify'

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
 * router.getRoutes 存在子路由和一级路由，只保留路由层级的项，路由子项剔除。
 * @param {*} routes  router.getRoutes()
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
//
export function generateMenus(routes, basePath = '') {
  const result = []
  routes.forEach((item) => {
    const { meta, children } = item
    // 路由规则
    if (isNull(meta) && isNull(children)) return

    if (isNull(meta) && !isNull(children)) {
      result.push(...generateMenus(children))
      return
    }
    const routePath = resolve(basePath, item.path)
    // 存在同名夫路由的情况
    let route = result.find((item) => item.path === routePath)

    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (route.meta.icon && route.meta.title) {
        // icon 和 title 必须同时存在
        result.push(route)
      }
    }
    if (children) {
      route.children.push(...generateMenus(children, route.path))
    }
  })
  return result
}
