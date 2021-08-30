const t = [1, 2, 3] 

t.push(5) 

console.log(t.length)
console.log(t[1])

t.forEach(value => { 
    console.log(value)
})

/* Using concat to keep imutability */ 
const t2 = t.concat(5)
console.log(t2)

const map1 = t.map(value => value * 2)
console.log(map1)

const map2 = t.map(value => '<li>' + value + '</li>')
console.log(map2)

const t3 = [1, 2, 3, 4, 5] 
const [first, second, third, ...rest] = t3

console.log(first, second) 
console.log(rest)
