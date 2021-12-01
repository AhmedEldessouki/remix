/* eslint-disable @typescript-eslint/unbound-method */
import {createCookieSessionStorage} from 'remix'

const {
  commitSession: commitThemeSession,
  destroySession: destroyThemeSession,
  getSession: getThemeSession,
} = createCookieSessionStorage({
  cookie: {
    sameSite: 'lax',
    maxAge: 604_800, // one week
    secrets: ['AHMED_ELDESSOUKI_PORTFOLIO'],
    secure: true,
  },
})

export {commitThemeSession, destroyThemeSession, getThemeSession}
