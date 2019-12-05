import { create } from 'apisauce'

const httpOptions = {
  baseURL: 'https://gateway.marvel.com/v1/public'
}

export default create(httpOptions)
