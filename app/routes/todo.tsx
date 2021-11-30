import React from 'react'
import {Form, useActionData, ActionFunction} from 'remix'
import {Link} from 'react-router-dom'

export const action: ActionFunction = async ({request}) => {
  const data = await request.formData()
  return {
    data: [...data.values()].filter(
      item => item === 'on' || typeof item === 'undefined',
    ),
  }
}

export default function ToDo() {
  const submit = useActionData()
  React.useEffect(() => {
    console.log(submit)
  }, [submit])
  return (
    <Form method="post">
      <label>
        foo
        <input type="hidden" name="foo" />
      </label>
      <hr />
      <label>
        foo-1
        <input type="checkbox" name="foo-1" />
      </label>
      <hr />
      <label>
        foo-2
        <input type="checkbox" name="foo-2" />
      </label>
      <label>
        foo-2
        <input type="text" name="xoo-2" />
      </label>
      <hr />
      <button type="submit">Sub</button>
    </Form>
  )
}
