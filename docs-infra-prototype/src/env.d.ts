/// <reference types="astro/client" />
/// <reference types="@astrojs/starlight/virtual" />

declare module '@astrojs/starlight/components/Header.astro' {
  import { AstroComponentFactory } from 'astro/runtime/server/index.js';
  export interface Props {
    [key: string]: any;
  }
  const Header: AstroComponentFactory;
  export default Header;
}