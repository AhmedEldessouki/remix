import React from "react";
import type { ActionFunction } from "remix";
import { redirect, Form, useTransition } from "remix";
import "~/styles/newGist.css";

export let action: ActionFunction = async ({ request }) => {
  // Very important or else it won't work :)
  let token = "insert your github token here";
  // in a real world scenario you'd want this token to be
  // an enviornment variable on your server, but as long
  // as you only use it in this action, it won't get
  // included in the browser bundle.

  // get the form body out of the request using standard web
  // APIs on the server
  let body = new URLSearchParams(await request.text());

  // pull off what we need from the form, note they are
  // named the same thing as the `<input/>` in the form.
  let fileName = body.get("fileName");
  let content = body.get("content");

  // redirect out of here to go see our new gist!
  return redirect("/gists");
};

function Loading() {
  return (
    <svg
      className="spin"
      style={{ height: "1rem" }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

export default function NewGist() {
  let transition = useTransition();
  return (
    <>
      <h2>New Gist!</h2>
      {transition.state === "submitting" ? (
        <div>
          <p>
            <Loading /> Creating gist:{" "}
            {transition.submission.formData.get("fileName")}
          </p>
        </div>
      ) : (
        /* Note the capital Form, not form */
        <Form method="post">
          <p>
            <label>
              Gist file name:
              <br />
              <input required type="text" name="fileName" />
            </label>
          </p>
          <p>
            <label>
              Content:
              <br />
              <textarea required rows={10} name="content" />
            </label>
          </p>
          <p>
            <button type="submit">Create Gist</button>
          </p>
        </Form>
      )}
    </>
  );
}
