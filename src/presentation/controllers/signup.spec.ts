import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Shoud Return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status_code).toBe(400)
  })
})
