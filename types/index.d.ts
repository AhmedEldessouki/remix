type Theme = 'dark' | 'light'

type HomeLoaderData = {
  storage: {
    theme: Theme | undefined
  }
}

export {HomeLoaderData, Theme}
