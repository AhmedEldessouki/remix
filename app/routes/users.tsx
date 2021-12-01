import {Link, useLoaderData, Outlet, useActionData} from 'remix'
import React from 'react'
import type {LoaderFunction} from 'remix'
import {prisma} from '~/entry.server'
import type {User} from '.prisma/client'

export const loader: LoaderFunction = () => {
  return prisma.user.findMany()
}
function Users() {
  const users = useLoaderData<User[]>()
  return (
    <div>
      <nav>
        <Link to="new">Create user</Link>
      </nav>
      <Outlet />
      {users.map(user => JSON.stringify(user, null, 2))}
    </div>
  )
}

export default Users
