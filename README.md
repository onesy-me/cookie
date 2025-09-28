
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img width='auto' height='84' src='https://raw.githubusercontent.com/onesy-me/onesy/refs/heads/main/utils/images/logo.png' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Cookie</h1>

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD 4.6kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser</sub>
</h3>

<p align='center'>
    <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Made with :yellow_heart:</sub>
</p>

<br />

### Add

```sh
yarn add @onesy/cookie
```

### Use

```javascript
  import OnesyCookie from '@onesy/cookie';

  const onesyCookie = new OnesyCookie();

  // Add
  onesyCookie.add('a', 4);

  // Has
  onesyCookie.has('a');

  // true

  // Get
  onesyCookie.get('a');

  // 4

  // Remove
  onesyCookie.remove('a');

  onesyCookie.get('a');

  // undefined
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```
