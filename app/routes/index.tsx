import React from 'react'
import type {MetaFunction, LoaderFunction} from 'remix'
import {useLoaderData} from 'remix'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

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
  const data = useLoaderData()

  return (
    <div
      className="prose max-w-full min-h-mx text-black dark:text-my-100"
      style={{textAlign: 'center', padding: 20}}
    >
      Landing Page
    </div>
  )
}
