import React from 'react'
import type {MetaFunction} from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Ahmed ElDessouki',
    description: 'Welcome to my portfolio!',
  }
}

export default function Index() {
  return (
    <section
      className="max-w-full min-h-mx"
      style={{textAlign: 'center', padding: 20}}
    >
      <div className="flex flex-wrap-reverse gap-7 justify-between">
        <p>
          I am Ahmed ElDessouki. Front-end developer using React.js , with
          interest in Design, and Self-Improvement driven person. Like to spend
          time solving challenges on CodeWars and sometimes on HackerRank.
        </p>
      </div>
    </section>
  )
}
