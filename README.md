# module-bin

Resolve required module's bin file.


## Install

```bash
$ npm install --save module-bin
```


## Usage

```javascript
var moduleBin = require('module-bin');

moduleBin('npm')                  => 'path/to/node_modules/.bin/npm'
moduleBin('cnpm', 'cnpm-search')  => 'path/to/node_modules/.bin/cnpm-search'
moduleBin('no_available_mod')     => Throws

```


## License

Copyright (c) 2015 Zhonglei Qiu. Licensed under the MIT license.



