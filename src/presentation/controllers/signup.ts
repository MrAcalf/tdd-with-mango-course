export class SignUpController {
  handle (httpRequest: any): any {
    return {
      status_code: 400,
      body: new Error('Missing param: name')
    }
  }
}
