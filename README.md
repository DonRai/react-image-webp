# React image webp
[![npm][npm]][npm-url]

## Basic Info
React component for check browser support format webp and insert if supported webp image.

## Install
For npm
```
npm install react-image-webp --save-dev
```
For yarn
```
yarn add react-image-webp
```

## How it work

Import component in file
```
import Image from 'react-image-webp';
```

And start to use:
```
<Image
     src={require('./path/to/image')}
     webp={require('./path/to/webp')}
 />
 ```
## Available options
 <table>
 <tr>
 <td>Option</td>
 <td>Type</td>
 <td>Description</td>
 </tr>
 <tr>
 <td>src</td>
 <td>{string}</td>
 <td>Path to fallback image if webp doesn't browser support</td>
 </tr>
 <tr>
 <td>webp</td>
 <td>{string}</td>
 <td>Path to webp image</td>
 </tr>
 <tr>
 <td>alt</td>
 <td>{string}</td>
 <td>Alternate text</td>
 </tr>
 <tr>
 <td>title</td>
 <td>{string}</td>
 <td>Title text</td>
 </tr>
 </table>

[npm]: https://img.shields.io/npm/v/multi-loader.svg
[npm-url]: https://www.npmjs.com/package/react-image-webp