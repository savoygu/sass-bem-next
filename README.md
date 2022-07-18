<p>
  <a href="https://www.npmjs.com/package/sass-bem-next" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/sass-bem-next.svg">
  </a>
  <a href="https://www.npmjs.com/package/sass-bem-next" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/dt/sass-bem-next">
  </a>
</p>

# sass-bem-next

## Changes

- Use dart-sass instead of node-sass
- Use sass builtin modules instead of global functions
- Fixed @mixin parse warning
- Fixed @function splice recursive error

## Install

```bash
npm i sass-bem-next --save-dev
```

Vue CLI

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "sass-bem-next/_bem.scss";`
      }
    }
  }
}
```

Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "sass-bem-next/_bem.scss";`
      }
    }
  }
})
```

## Usage

[sass-bem v2.6.5](./README.v2.6.5.md)

## License

The sass-bem-next package is also open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
