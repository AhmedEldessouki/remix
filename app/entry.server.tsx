import React from 'react'
import ReactDOMServer from 'react-dom/server'
import type {EntryContext} from 'remix'
import {RemixServer} from 'remix'
import * as dotenv from 'dotenv'

console.log(dotenv.config())

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = ReactDOMServer.renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
