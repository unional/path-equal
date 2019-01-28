declare module 'platform-detect' {
  // OS
  export const windows: boolean
  export const android: boolean
  export const chromeos: boolean
  export const macos: boolean
  export const ios: boolean
  export const tizen: boolean
  export const linux: boolean
  export const linuxBased: boolean

  // general
  export const node: boolean
  export const web: boolean
  export const worker: boolean
  export const serviceWorker: boolean

  // other
  export const hasWindow: boolean
  export const isConsole: boolean
  export const csp: boolean
  export const dev: boolean
}
