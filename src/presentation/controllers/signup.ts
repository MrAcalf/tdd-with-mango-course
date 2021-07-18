import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        status_code: 400,
        body: new Error('Missing param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        status_code: 400,
        body: new Error('Missing param: email')
      }
    }
    return {
      status_code: 200,
      body: new Notification('Sucess')
    }
  }
}
