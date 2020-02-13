let _ = require('lodash');
let customers = [
    {name:'A',salary:106},
    {name:'B',salary:101},
    {name:'C',salary:102},
    {name:'D',salary:1000}
]
customers.push({name:'E',salary:10})
// customers.sort((a,b)=>(b.salary>a.salary)?1:-1)
// customers.map((item)=> console.log(item.name+'-'+item.salary))
//console.log(_.sortBy(customers,'salary').reverse())
console.log(_.slice(_.sortBy(customers,'salary').reverse()))
let jsonST = JSON.stringify(customers)
console.log(jsonST)
let stringJS = JSON.parse(jsonST)
console.log(stringJS)




