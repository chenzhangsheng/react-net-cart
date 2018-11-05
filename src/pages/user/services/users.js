import { request, config } from 'utils'

const { api, APIV1 } = config
const { users } = api

// export function query (params) {
//   return request({
//     url: users,
//     method: 'get',
//     data: params,
//   })
// }

export function remove (params) {
  return request({
    url: users + '/delete',
    method: 'post',
    data: params,
  })
}

export function query (params) {
  return request({
    url: `${APIV1}/app/getUser`,
    method: 'get',
  })
}