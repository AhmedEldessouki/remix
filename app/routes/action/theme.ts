import {commitThemeSession, getThemeSession} from '~/sessions.js'
import {json} from 'remix'
import type {ActionFunction} from 'remix'

export const action: ActionFunction = async ({request}) => {
  const themeSession = await getThemeSession(request.headers.get('Cookie'))

  const requestText = await request.text()
  const form = new URLSearchParams(requestText)
  const theme = form.get('theme')

  if (themeSession.get('theme') === theme) {
    return json({
      success: false,
      message: `SetThemeAction: Theme Didn't Change. Session: [${themeSession.get(
        'theme',
      )}] & Theme: ${theme}`,
    })
  }

  if (theme !== 'dark' && theme !== 'light')
    return json({
      success: false,
      message: `Theme: ${theme} is not valid.`,
    })
  themeSession.set('theme', theme)

  return json(
    {
      success: true,
    },
    {
      headers: {'Set-Cookie': await commitThemeSession(themeSession)},
    },
  )
}
