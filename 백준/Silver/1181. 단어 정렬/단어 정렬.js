const fs=require('fs')
const input=fs.readFileSync('/dev/stdin','utf-8').toString().trim().split('\n')

input.shift()

s_arr=[...new Set(input)]

s_arr = s_arr.sort((a,b)=>a.length - b.length || a.localeCompare(b)).join('\n')

console.log(s_arr)