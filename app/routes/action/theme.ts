import {getThemeSession} from '~/sessions.js'
import {json} from 'remix'
import type {ActionFunction} from 'remix'

export const action: ActionFunction = async ({request}) => {
  const themeSession = await getThemeSession(request)

  const requestText = await request.text()
  const form = new URLSearchParams(requestText)
  const theme = form.get('theme')

  if (themeSession.getTheme() === theme) {
    return json({
      success: false,
      message: `SetThemeAction: Theme Didn't Change. Session: [${themeSession.getTheme()}] & Theme: ${theme}`,
    })
  }

  if (theme !== 'dark' && theme !== 'light')
    return json({
      success: false,
      message: `Theme: ${theme} is not valid.`,
    })

  themeSession.setTheme(theme)

  return json(
    {
      success: true,
    },
    {
      headers: {'Set-Cookie': await themeSession.commit()},
    },
  )
}
