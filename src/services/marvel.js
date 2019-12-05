import md5 from 'md5'

import http from './http'

import { marvelPublicKey, marvelPrivateKey } from '../../app.json'

export const findPersonagens = userParams => {
  const timestamp = new Date().getTime()
  const params = {
    apikey: marvelPublicKey,
    ts: timestamp,
    hash: md5(timestamp + marvelPrivateKey + marvelPublicKey),
    ...userParams
  }

  return http.get('/characters', params)
}

export default {
  findPersonagens
}
