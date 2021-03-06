import React from 'react'
import type {MetaFunction, LoaderFunction} from 'remix'
import {Link} from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export const loader: LoaderFunction = async () => {
  return {message: 'this is awesome 😎'}
}

export default function Index() {
  return (
    <section
      className="max-w-full min-h-mx text-black dark:text-my-100"
      style={{textAlign: 'center', padding: 20}}
    >
      <Link to="/todo">TODO</Link>
      <div className="prose flex flex-wrap-reverse gap-7 justify-between">
        <p>
          I am Ahmed ElDessouki. Front-end developer using React.js , with
          interest in Design, and Self-Improvement driven person. Like to spend
          time solving challenges on CodeWars and sometimes on HackerRank.
        </p>
      </div>
    </section>
  )
}
