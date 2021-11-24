import {
  Meta,
  Links,
  Scripts,
  useLoaderData,
  LiveReload,
  useCatch,
  json,
} from 'remix'
import type {LinksFunction, LoaderFunction, HeadersFunction} from 'remix'
import {Outlet} from 'react-router-dom'
import {IdProvider} from '@radix-ui/react-id'
import {
  NonFlashOfWrongThemeEls,
  Theme,
  ThemeProvider,
  useTheme,
} from './utils/theme-provider'
import {getThemeSession} from './utils/theme.server'
import tailwindStyles from './styles/tailwind.css'
import proseStyles from './styles/prose.css'
import appStyles from './styles/app.css'
import {AccessibleIcon} from '@radix-ui/react-accessible-icon'
import {DataSession} from '../types'
import Nav from './components/nav/nav'
import {motion} from 'framer-motion'

export const links: LinksFunction = () => {
  // ! Limit the Fonts to where it's being used. Unless It's commonly Used
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/lato-v20-latin-300.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },

    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/lato-v20-latin-700.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/lato-v20-latin-700italic.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/lato-v20-latin-900.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/lato-v20-latin-900italic.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/lato-v20-latin-regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    // {
    //   rel: 'apple-touch-icon',
    //   sizes: '180x180',
    //   href: '/favicons/apple-touch-icon.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '32x32',
    //   href: '/favicons/favicon-32x32.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '16x16',
    //   href: '/favicons/favicon-16x16.png',
    // },
    // {rel: 'manifest', href: '/site.webmanifest'},
    {rel: 'icon', href: '/remix.png', type: 'image/png'},
    {rel: 'stylesheet', href: tailwindStyles},
    {rel: 'stylesheet', href: proseStyles},
    {rel: 'stylesheet', href: appStyles},
  ]
}

export const loader: LoaderFunction = async ({request}) => {
  // because this is called for every route, we'll do an early return for anything
  // that has a other route setup. The response will be handled there.
  // if (pathedRoutes[new URL(request.url).pathname]) {
  //   return new Response()
  // }

  const themeSession = await getThemeSession(request)

  const data: DataSession = {
    session: {
      theme: themeSession.getTheme(),
    },
  }

  return json(data)
}

export const headers: HeadersFunction = ({loaderHeaders}) => {
  return {
    'Server-Timing': loaderHeaders.get('Server-Timing') ?? '',
  }
}

function Document({
  children,
  title,
  theme,
}: {
  children: React.ReactNode
  title?: string
  theme?: Theme | null
}) {
  let data = useLoaderData<DataSession>()

  return (
    <html lang="en" className={theme ? theme : ''}>
      <head>
        <meta charSet="utf-8" />
        <title>{title ? title : 'Ahmed ElDessouki'}</title>
        <Meta />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.session?.theme)} />
        <Links />
      </head>
      <body className="text-my-100 bg-my-600">
        {children}
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function AppWithoutProvider() {
  let data = useLoaderData<DataSession>()
  return (
    <Document theme={data.session.theme}>
      <Nav />
      <Outlet />
      <footer>
        <hr />
        <div className="prose-lg flex gap-1 items-center justify-center p-4 italic italic font-light">
          <span>This Website Was Build Using</span>
          <motion.a
            whileHover={{scale: 1.2}}
            whileFocus={{outline: 'dodgerblue'}}
            href="https://remix.run"
            target="_blank"
            className="rounded focus-within:ring-2 focus:ring-2 ring-sky-600 ring-offset-2"
          >
            <AccessibleIcon label="remix">
              <img src="/remix.png" alt="remix" />
            </AccessibleIcon>
          </motion.a>
        </div>
      </footer>
    </Document>
  )
}

export default function App() {
  let data = useLoaderData<DataSession>()

  return (
    <ThemeProvider specifiedTheme={data.session?.theme}>
      <IdProvider>
        <AppWithoutProvider />
      </IdProvider>
    </ThemeProvider>
  )
}

export function CatchBoundary() {
  let caught = useCatch()

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      )

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`,
      )
  }
}

export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)

  return (
    <Document title="Uh-oh!">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  )
}
