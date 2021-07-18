import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  status_code: 400,
  body: error
})
