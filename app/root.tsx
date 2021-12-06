import * as React from 'react'
import {
  Link,
  Links,
  useLoaderData,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  json,
} from 'remix'
import type {LinksFunction, LoaderFunction} from 'remix'
import {IdProvider} from '@radix-ui/react-id'
import {motion} from 'framer-motion'
import Nav from './components/nav/nav'
import type {HomeLoaderData} from '../types'
import tailwindStyles from './styles/tailwind.css'
import proseStyles from './styles/prose.css'
import appStyles from './styles/app.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/lato-v20-latin-regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {rel: 'stylesheet', href: tailwindStyles},
    {rel: 'stylesheet', href: proseStyles},
    {rel: 'stylesheet', href: appStyles},
  ]
}

export const loader: LoaderFunction = async ({request}) => {
  const data: HomeLoaderData = {
    storage: {
      theme: undefined,
    },
  }
  return json(data)
}

export function ErrorBoundary({error}: {error: Error}) {
  return (
    <Document title="Error!">
      <p>{error.message}</p>
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p className="mx-2 text-lg italic">
          You can go back to{' '}
          <span className="text-sky-400 underline font-bold">Home Page</span> by
          clicking on the link below.
        </p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <>
        <h1 className="mx-5 my-3 text-2xl">
          {caught.status}: {caught.statusText}
        </h1>
        <div className="flex flex-col items-center justify-center mx-6">
          {message}
          <Link
            to="/"
            className="px-4 py-2.5 hover:bg-blueGray-500 bg-shadow-300 rounded"
          >
            Home
          </Link>
        </div>
      </>
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactChild
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : <title>Ahmed ElDessouki</title>}
        <Meta />
        <Links />
      </head>
      <body className="text-my-100 bg-my-600">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="prose">
        <Nav />
      </header>
      <div>{children}</div>
      <footer>
        <hr className="m-8 text-blueGray-600 border-2 rounded-3xl" />
        <div className="prose-lg flex gap-1 items-center justify-center m-8 italic font-light">
          <span>This Website Was Build Using</span>
          <motion.a
            whileHover={{scale: 1.2}}
            whileFocus={{outline: 'dodgerblue'}}
            href="https://remix.run"
            target="_blank"
            className="rounded focus-within:ring-2 focus:ring-2 ring-sky-600 ring-offset-2"
          >
            <RemixLogo />
          </motion.a>
        </div>
      </footer>
    </>
  )
}
function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}
export default function AppWithProviders() {
  return (
    <IdProvider>
      <App />
    </IdProvider>
  )
}
function RemixLogo() {
  return (
    <svg
      viewBox="0 0 659 165"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby="remix-run-logo-title"
      role="img"
      width="106"
      height="30"
      fill="currentColor"
    >
      <title id="remix-run-logo-title">Remix Logo</title>
      <path d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z" />
      <path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" />
      <path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" />
      <path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" />
      <path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" />
    </svg>
  )
}
