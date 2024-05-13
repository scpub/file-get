# file-get    
    get the files from path

## Install

`npm i files-get`

## Usage    

```js
import scGet from "./index.js";  

    const sc=new scGet()
    await sc.init({path:'./test/'});   

console.log(sc.tag('test').got('jane'))
```

## License

Licensed under [MIT](https://github.com/scpub/file-get/blob/main/LICENSE)

