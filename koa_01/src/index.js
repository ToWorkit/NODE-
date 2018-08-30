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

import { name, getName } from './ex.js'

// 可以
import age from './ex.js'

// 不可以
// import name from './ex.js'

import {
  n1 as name_1
} from './ex'

console.log(name)
console.log(getName())
console.log(age)
console.log(name_1)

import { promisify } from 'util'
import { resolve as r } from 'path'
import { readFile, writeFileSync as wfs } from 'fs'

async function init() {
  let data = await promisify(readFile)(r(__dirname, '../package.json'))

  data = JSON.parse(data)
  console.log(data.name, "async")
}

init()
