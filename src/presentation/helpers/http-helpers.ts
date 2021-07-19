import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  status_code: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  status_code: 500,
  body: new ServerError()
})
