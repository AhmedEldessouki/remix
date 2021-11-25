import {createCookieSessionStorage} from 'remix'
import {Theme, isTheme} from './theme-provider'

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'nemo_theme',
    sameSite: 'lax',
    path: '/',
    // no theme for you on my 100th birthday! 😂
    expires: new Date('2088-10-18'),
    httpOnly: true,
    secrets: ['AHMED_ELDESSOUKI_PORTFOLIO_COOKIE_THEME_SESSION'],
    secure: true,
  },
})

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'))
  return {
    getTheme: () => {
      const themeValue = session.get('theme')
      return isTheme(themeValue) ? themeValue : Theme.DARK
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  }
}

export {getThemeSession}

// ? Since I personally don't know much about Cookies,
// ? So I am using KCD.com Code as a guide
