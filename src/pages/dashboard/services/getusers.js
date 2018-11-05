import { request, config } from 'utils'

const { APIV1 } = config

export function query (params) {
  return request({
    url: `${APIV1}/app/getUser`,
    method: 'get',
  })
}