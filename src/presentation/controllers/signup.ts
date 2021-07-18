import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        status_code: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        status_code: 400,
        body: new MissingParamError('email')
      }
    }
    return {
      status_code: 200,
      body: new Notification('Sucess')
    }
  }
}
