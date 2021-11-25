import type {Theme} from '~/utils/theme-provider'

type Await<Type> = Type extends Promise<infer Value> ? Await<Value> : Type

type DataSession = {
  session: {
    theme: Theme
  }
}

export {Await, DataSession}
