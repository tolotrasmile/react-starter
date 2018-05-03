import ls from 'local-storage'

const KEY = 'react-starter/login-key'

export const auth = {
  isAuthenticated: ls.get(KEY),
  async authenticate (values) {
    await sleep(100)
    ls.set(KEY, this.isAuthenticated = isValid(values))
    return this.isAuthenticated
  },
  async signOut () {
    await sleep(100)
    ls.set(KEY, this.isAuthenticated = false)
    return this.isAuthenticated
  }
}

const isValid = (values) => {
  return values !== undefined && (values.login === 'login' && values.password === 'password')
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
