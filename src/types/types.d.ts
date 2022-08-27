declare module '*.png'

declare module '*.svg'

declare module '*.css' {
  const value: {
    [key: string]: string
  }
  export = value
}

declare module '*.css'
declare module '*.less'
