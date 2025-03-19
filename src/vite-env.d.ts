/// <reference types="vite/client" />
/// <reference types="swiper/react" />

interface ImportMetaEnv {
  readonly MODE: string
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'swiper/react'
declare module 'swiper/modules'