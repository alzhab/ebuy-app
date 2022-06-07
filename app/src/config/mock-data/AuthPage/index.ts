import MockAdapter from 'axios-mock-adapter'

const AuthPageMock = (mock: MockAdapter) => {
  mock.onPost('/auth/customer/login').reply(config => {
    const { email, password } = JSON.parse(config.data)

    console.log({ email, password })

    if (email === 'test@gmail.com' && password === 'password') {
      return [200, { token: 'token', userId: '1' }]
    } else if (email === 'test@gmail.com' && password !== 'password') {
      return [404, { message: 'Password invalid' }]
    } else {
      return [404, { message: "User with this email doesn't exist" }]
    }
  })

  mock.onPost('/auth/customer/register').reply(config => {
    return [200, { token: 'token', userId: '1' }]
  })
}

export default AuthPageMock
