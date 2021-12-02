/* eslint-disable @typescript-eslint/unbound-method */
import {createCookieSessionStorage} from 'remix'
import {Theme} from '../types'

const themeCookieStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    sameSite: 'lax',
    httpOnly: true,
    path: '/',
    expires: new Date('2088-1-1'),
    secrets: ['AHMED_ELDESSOUKI_PORTFOLIO'],
    secure: true,
  },
})

async function getThemeSession(request: Request) {
  const session = await themeCookieStorage.getSession(
    request.headers.get('Cookie'),
  )
  return {
    getTheme: () => {
      const theme = session.get('theme')
      return typeof theme === 'string' ? theme : undefined
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeCookieStorage.commitSession(session),
  }
}

export {getThemeSession}
