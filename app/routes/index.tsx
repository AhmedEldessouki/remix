import type {MetaFunction, LoaderFunction} from 'remix'
import {useLoaderData} from 'remix'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {Popover, PopoverContent, PopoverTrigger} from '~/components/popover'
import DropDown from '~/components/dropdown'

export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export let loader: LoaderFunction = async () => {
  return {message: 'this is awesome 😎'}
}

export default function Index() {
  let data = useLoaderData()

  return (
    <div
      className="prose max-w-full text-black dark:text-gray-100 dark:bg-gray-900"
      style={{textAlign: 'center', padding: 20}}
    >
      <DropDown />
      <Popover>
        <PopoverTrigger>?</PopoverTrigger>
        <PopoverContent>You Just Popped It!</PopoverContent>
      </Popover>

      <h2>Welcome to Remix!</h2>
      <Link className="" to="/gists">
        Gists
      </Link>

      <motion.blockquote
        drag="x"
        dragConstraints={{left: -10, right: 10}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className="dark:text-gray-200"
      >
        Et molestiae hic earum repellat aliquid est doloribus delectus. Enim
        illum odio porro ut omnis dolor debitis natus. Voluptas possimus
        deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia.
        Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut
        molestiae fugit.
      </motion.blockquote>
      <hr />
      <p>
        <a className="prose" href="https://docs.remix.run">
          Check out the docs
        </a>
        to get started.
      </p>
      <p>Message from the loader: {data.message}</p>
      <p>
        <Link className="prose" to="not-found">
          Link to 404 not found page.
        </Link>
        Clicking this link will land you in your root CatchBoundary component.
      </p>
      <h1 className="italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h1>
      <h2 className="italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h2>
      <h3 className="-2xl italic font-black backdrop-sepia">
        The quick brown fox jumps over the lazy dog.
      </h3>
      <h4 className="italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h4>
      <h5 className="italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h5>
      <h6 className="italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h6>
    </div>
  )
}
