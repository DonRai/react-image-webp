# React image webp
## Basic Info
React component for check browser support format webp and insert if supported webp image.

## Install
```
npm install react-image-webp --save-dev
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
 <td>fallback image</td>
 </tr>
 <tr>
 <td>webp</td>
 <td>{string}</td>
 <td>webp image</td>
 </tr>
 <tr>
 <td>alt</td>
 <td>{string}</td>
 <td></td>
 </tr>
 <tr>
 <td>title</td>
 <td>{string}</td>
 <td></td>
 </tr>
 </table>
