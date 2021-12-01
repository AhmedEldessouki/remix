import React from 'react'
import {Form, redirect, json, useActionData} from 'remix'
import type {ActionFunction} from 'remix'
import {prisma} from '~/entry.server'
import {v4} from 'uuid'
import type {User} from '.prisma/client'

export const action: ActionFunction = async ({request}) => {
  const user = await request.formData()
  console.log(user, request)
  const res = await prisma.user.create({
    data: {
      name: user.get('name')?.toString(),
      color: user.get('color')?.toString(),
      id: v4(),
    },
  })
  console.log(user, res)

  return {name: user.get('name')}
}

export default function CreateUser() {
  const userFormData = useActionData<User>()
  return (
    <div>
      <Form method="put" className="flex flex-col gap-4 p-10 w-full">
        <label htmlFor="name" className="flex gap-4">
          name
          <input
            type="text"
            name="name"
            id="name"
            className="border-4 border-my-100 rounded"
          />
        </label>
        <label htmlFor="email" className="flex gap-4">
          email
          <input
            type="email"
            name="email"
            id="email"
            className="border-4 border-my-100 rounded"
          />
        </label>
        <label htmlFor="color" className="flex gap-4">
          color
          <input type="color" name="color" id="color" />
        </label>
        <button type="submit">Submit</button>
      </Form>
      {userFormData && JSON.stringify(userFormData, null, 2)}
    </div>
  )
}
