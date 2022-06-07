import MockAdapter from 'axios-mock-adapter'

const ProfilePageMock = (mock: MockAdapter) => {
  mock
    .onGet('/customers/profile')
    .reply(200, {
      email: 'test@gmail.com',
      first_name: 'Test',
      last_name: 'Test',
      password: 'password',
      birth_date: new Date(),
      interested_in: '',
      avatar_path:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    })
    .onPut('/customers/profile')
    .reply(config => {
      const data = JSON.parse(config.data)

      console.log(data)

      return [200, data]
    })
}

export default ProfilePageMock
