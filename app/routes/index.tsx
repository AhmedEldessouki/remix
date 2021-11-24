import React from 'react'
import type {MetaFunction, LoaderFunction} from 'remix'
import {useLoaderData} from 'remix'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {Popover, PopoverContent, PopoverTrigger} from '~/components/popover'
import DropDown from '~/components/nav/dropdown'

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
      className="prose max-w-full text-black dark:text-my-100"
      style={{textAlign: 'center', padding: 20}}
    >
      <DropDown />
      <Popover>
        <PopoverTrigger className="">fonts</PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2 m-2 p-5 bg-sky-900">
          <div>
            <pre className="">font-thin!</pre>
            <span className="font-thin">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">italic font-thin!</pre>
            <span className="italic font-thin">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">font-light!</pre>
            <span className="font-light">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">italic font-light!</pre>
            <span className="italic font-light">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">font-bold!</pre>
            <span className="font-bold">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">italic font-bold!</pre>
            <span className="italic font-bold">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">font-black!</pre>
            <span className="font-black">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">italic font-black!</pre>
            <span className="italic font-black">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">italic font-normal!</pre>
            <span className="italic font-normal">You Just Popped It!</span>
          </div>
          <div>
            <pre className="">font-normal!</pre>
            <span className="font-normal">You Just Popped It!</span>
          </div>
        </PopoverContent>
      </Popover>
      <h2 className="prose">Welcome to Remix!</h2>
      <div className="flex gap-2 items-center justify-center h-14 text-center dark:text-my-100 bg-gradient-to-r">
        <span className="w-20 h-10 text-center bg-mm-100">100</span>
        <span className="w-20 h-10 text-center bg-mm-200">200</span>
        <span className="w-20 h-10 text-center bg-mm-300">300</span>
        <span className="w-20 h-10 text-center bg-mm-400">400</span>
        <span className="w-20 h-10 text-center bg-mm-500">500</span>
        <span className="w-20 h-10 text-center bg-mm-600">600</span>
        <span className="w-20 h-10 text-center bg-mm-700">700</span>
        <span className="w-20 h-10 text-center bg-mm-800">800</span>
        <span className="w-20 h-10 text-center bg-mm-900">900</span>
      </div>

      <div className="flex gap-2 items-center justify-center h-14 text-center dark:text-my-100 bg-gradient-to-r">
        <span className="w-20 h-10 text-center bg-sky-50">50</span>
        <span className="w-20 h-10 text-center bg-sky-100">100</span>
        <span className="w-20 h-10 text-center bg-sky-200">200</span>
        <span className="w-20 h-10 text-center bg-sky-300">300</span>
        <span className="w-20 h-10 text-center bg-sky-400">400</span>
        <span className="w-20 h-10 text-center bg-sky-500">500</span>
        <span className="w-20 h-10 text-center bg-sky-600">600</span>
        <span className="w-20 h-10 text-center bg-sky-700">700</span>
        <span className="w-20 h-10 text-center bg-sky-800">800</span>
        <span className="w-20 h-10 text-center bg-sky-900">900</span>
      </div>
      <div className="dark:text-my-900 flex gap-2 items-center justify-center h-14 text-center">
        <span className="w-20 h-10 text-center bg-green-50">50</span>
        <span className="bg-green-100 w-20 h-10 text-center">100</span>
        <span className="bg-green-200 w-20 h-10 text-center">200</span>
        <span className="bg-green-300 w-20 h-10 text-center">300</span>
        <span className="w-20 h-10 text-center bg-green-400">400</span>
        <span className="w-20 h-10 text-center bg-green-500">500</span>
        <span className="bg-green-600 w-20 h-10 text-center">600</span>
        <span className="bg-green-700 w-20 h-10 text-center">700</span>
        <span className="bg-green-800 w-20 h-10 text-center">800</span>
        <span className="bg-green-900 w-20 h-10 text-center">900</span>
      </div>
      <div className="flex gap-2 items-center justify-center h-14 text-center dark:text-my-100 bg-gradient-to-r">
        <span className="w-20 h-10 text-center bg-red-50">50</span>
        <span className="bg-red-100 w-20 h-10 text-center">100</span>
        <span className="bg-red-200 w-20 h-10 text-center">200</span>
        <span className="bg-red-300 w-20 h-10 text-center">300</span>
        <span className="w-20 h-10 text-center bg-red-400">400</span>
        <span className="w-20 h-10 text-center bg-red-500">500</span>
        <span className="bg-red-600 w-20 h-10 text-center">600</span>
        <span className="bg-red-700 w-20 h-10 text-center">700</span>
        <span className="bg-red-800 w-20 h-10 text-center">800</span>
        <span className="bg-red-900 w-20 h-10 text-center">900</span>
      </div>
      <div className="flex gap-2 items-center justify-center h-14 text-center dark:text-my-100 bg-gradient-to-r">
        <span className="w-20 h-10 text-center bg-blueGray-50">50</span>
        <span className="w-20 h-10 text-center bg-blueGray-100">100</span>
        <span className="w-20 h-10 text-center bg-blueGray-200">200</span>
        <span className="w-20 h-10 text-center bg-blueGray-300">300</span>
        <span className="w-20 h-10 text-center bg-blueGray-400">400</span>
        <span className="w-20 h-10 text-center bg-blueGray-500">500</span>
        <span className="w-20 h-10 text-center bg-blueGray-600">600</span>
        <span className="w-20 h-10 text-center bg-blueGray-700">700</span>
        <span className="w-20 h-10 text-center bg-blueGray-800">800</span>
        <span className="w-20 h-10 text-center bg-blueGray-900">900</span>
      </div>
      <Link className="" to="/gists">
        Gists
      </Link>
      <motion.blockquote
        drag="x"
        dragConstraints={{left: -10, right: 10}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className=""
      >
        Et molestiae hic earum repellat aliquid est doloribus delectus. Enim
        illum odio porro ut omnis dolor debitis natus. Voluptas possimus
        deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia.
        Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut
        molestiae fugit.
      </motion.blockquote>
      <hr />
      <p>
        <a className="prose-light text-my-300" href="https://docs.remix.run">
          Check out the docs
        </a>
        to get started.
      </p>
      <strong>Message from the loader: {data.message}</strong>
      <p>
        <Link className="prose" to="not-found">
          Link to 404 not found page.
        </Link>
        Clicking this link will land you in your root CatchBoundary component.
      </p>
      <h1 className="prose dark:text-my-100 italic font-black dark:bg-my-600">
        The quick brown fox jumps over the lazy dog.
      </h1>
      <h2 className="prose text-blue dark:text-my-100 italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h2>
      <h3 className="prose -2xl italic font-black backdrop-sepia">
        The quick brown fox jumps over the lazy dog.
      </h3>
      <h4 className="prose italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h4>
      <h5 className="prose italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h5>
      <h6 className="prose italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h6>
    </div>
  )
}
