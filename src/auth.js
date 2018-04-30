import ls from 'local-storage'

export const auth = {
  isAuthenticated: ls.get('login'),
  isSignIn: false,
  authenticate (cb) {
    sleep(100).then(() => {
      this.isAuthenticated = true
      this.isSignIn = false
      if (cb && typeof cb === 'function') {
        cb(this.isAuthenticated)
      }
    })
  },
  signOut (cb) {
    sleep(100).then(() => {
      this.isAuthenticated = false
      this.isSignIn = false
      if (cb && typeof cb === 'function') {
        cb(this.isAuthenticated)
      }
    })
  }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
