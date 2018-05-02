import ls from 'local-storage'

export const auth = {
  isAuthenticated: ls.get('login'),
  authenticate (cb) {
    sleep(100).then(() => {
      ls.set('login', true)
      this.isAuthenticated = true
      if (cb && typeof cb === 'function') {
        cb(this.isAuthenticated)
      }
    })
  },
  signOut (cb) {
    sleep(100).then(() => {
      ls.set('login', false)
      this.isAuthenticated = false
      if (cb && typeof cb === 'function') {
        cb(this.isAuthenticated)
      }
    })
  }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
