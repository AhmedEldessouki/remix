import React from 'react'
import {Link, Outlet, useLoaderData} from 'remix'
import type {LoaderFunction} from 'remix'
import type {Await} from '../../types'

export const loader: LoaderFunction = () => {
  return fetch('https://api.github.com/gists')
}

type Gists = Await<ReturnType<typeof loader>>

export function meta({data}: {data: Gists}) {
  return {
    title: 'Public Gists',
    description: `View the latest ${data.length} gists from the public`,
  }
}

export default function Gists() {
  const data = useLoaderData()
  const [count, setCount] = React.useState(0)

  return (
    <div className="">
      <button onClick={() => setCount(n => n + 1)}>{count}</button>
      <h2>Public Gists</h2>
      <Link to="/">Home</Link>
      <ol className="text-blue-900 dark:text-gray-400 dark:bg-gray-800 p-10 list-decimal">
        {Array.isArray(data) &&
          data.map(gist => (
            <li key={gist.id}>
              <Link to={gist.owner.login}>{Object.keys(gist.files)[0]}</Link>
            </li>
          ))}
      </ol>
      <Link to="new">new</Link>
      <Outlet />
    </div>
  )
}
