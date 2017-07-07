# React image webp
[![npm][npm]][npm-url]

## Basic Info
React component for check browser support format WebP and insert if supported WebP image. More about WebP https://developers.google.com/speed/webp/

## Online example
Check in developer console image format (webp or jpg).
https://donrai.github.io/react-image-webp/examples/index.html

## Installation
For npm
```
npm install react-image-webp --save-dev
```
For yarn
```
yarn add react-image-webp
```

## How it working

Import component in file
```
import Image from 'react-image-webp';
```

And start use:
```
<Image
     src={require('./path/to/image')}
     webp={require('./path/to/webp')}
 />
 ```
## Available options
 <table>
 <tr>
 <td><strong>property</strong></td>
 <td><strong>type</strong></td>
 <td><strong>description</strong></td>
 </tr>
 <tr>
 <td>src</td>
 <td>string</td>
 <td>Path to fallback image if WebP doesn't browser support</td>
 </tr>
 <tr>
 <td>webp</td>
 <td>string</td>
 <td>Path to WebP image</td>
 </tr>
 <tr>
 <td>alt</td>
 <td>string</td>
 <td>Alternate text</td>
 </tr>
 <tr>
 <td>title</td>
 <td>string</td>
 <td>Title text</td>
 </tr>
 <tr>
 <td>style</td>
 <td>object</td>
 <td>Style for image</td>
 </tr>
 <tr>
 <td>className</td>
 <td>string</td>
 <td>Class name for image</td>
 </tr>
 </table>

[npm]: https://img.shields.io/npm/v/react-image-webp.svg
[npm-url]: https://www.npmjs.com/package/react-image-webp