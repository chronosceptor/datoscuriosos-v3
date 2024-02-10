/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
declare module "astro-imagetools/components"
interface ImportMetaEnv {
  readonly STRAPI_URL: string;
}