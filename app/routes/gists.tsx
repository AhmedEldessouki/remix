import React from "react";
import { Link, LoaderFunction, Outlet } from "remix";
import { useLoaderData } from "remix";

export let loader: LoaderFunction = () => {
  return fetch("https://api.github.com/gists");
};

export function meta({ data }: { data: any[] }) {
  return {
    title: "Public Gists",
    description: `View the latest ${data.length} gists from the public`,
  };
}

export default function Gists() {
  let data = useLoaderData();
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((n) => n + 1)}>{count}</button>
      <h2>Public Gists</h2>
      <Link to="/">Home</Link>
      <ul>
        {Array.isArray(data) &&
          data.map((gist: any) => (
            <li key={gist.id}>
              <Link to={gist.owner.login}>{Object.keys(gist.files)[0]}</Link>
            </li>
          ))}
      </ul>
      <Link to="new">new</Link>
      <Outlet />
    </div>
  );
}
