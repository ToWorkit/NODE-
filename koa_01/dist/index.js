'use strict';

var _ex = require('./ex.js');

var _ex2 = _interopRequireDefault(_ex);

var _ex3 = require('./ex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 可以
console.log(_ex.name);

// 不可以
// import name from './ex.js'

/*import { promisify } from 'util'
import { resolve as r } from 'path'
import { readFile, writeFileSync as wfs } from 'fs'
import * as qs from 'querystring'

promisify(readFile)(r(__dirname, '../package.json'))
  .then(data => {
    data = JSON.parse(data)
    console.log(__dirname)
    console.log(data.name)

    wfs(r(__dirname, './name'), String(data.name), 'utf8')
  })
  .catch(err => {
    console.log(err)
  })*/

// export

console.log((0, _ex.getName)());
console.log(_ex2.default);
console.log(_ex3.n1);
//# sourceMappingURL=index.js.map