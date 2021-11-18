import type {MetaFunction, LoaderFunction} from 'remix'
import {useLoaderData} from 'remix'
import {Link} from 'react-router-dom'

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
    <div style={{textAlign: 'center', padding: 20}}>
      <h2>Welcome to Remix!</h2>
      <Link className="prose" to="/gists">
        {' '}
        Gists{' '}
      </Link>

      <p className="line-clamp-2">
        Et molestiae hic earum repellat aliquid est doloribus delectus. Enim
        illum odio porro ut omnis dolor debitis natus. Voluptas possimus
        deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia.
        Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut
        molestiae fugit.
      </p>
      <p>
        <a className="prose" href="https://docs.remix.run">
          Check out the docs
        </a>{' '}
        to get started.
      </p>
      <p>Message from the loader: {data.message}</p>
      <p>
        <Link className="prose" to="not-found">
          Link to 404 not found page.
        </Link>{' '}
        Clicking this link will land you in your root CatchBoundary component.
      </p>
      <h1 className="prose prose-2xl italic font-black">
        The quick brown fox jumps over the lazy dog.
      </h1>
    </div>
  )
}
