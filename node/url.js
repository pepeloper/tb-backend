/* eslint-disable no-console */
import URL from 'url';

const adr = 'http://localhost:8080/default.html?year=2017&month=february';
const q = URL.parse(adr, true);

console.log(q.host); // 'localhost:8080'
console.log(q.pathname); // '/default.html'
console.log(q.search); // '?year=2017&month=february'

const qdata = q.query; // { year: 2017, month: 'february' }
console.log(qdata.month); // 'february'