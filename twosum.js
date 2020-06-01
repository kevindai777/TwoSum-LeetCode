//Problem: To find the indices of two elements in an array that add exactly to a given target value.

let array = [2,7,9,15]
let target = 9



//O(n^2) solution (nested for-loops)
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      console.log([i,j])
    }
  }
}



//O(n) solution 2-pass (2 for-loops)
let map = {}

//put all elements into map by value + index
for (let i = 0; i < array.length; i++) {
  map[array[i]] = i
}

for (let i = 0; i < array.length; i++) {
  let complement = target - array[i]
  if (map[complement] && map[complement] !== i) {
    console.log([i, map[complement]])
  }
}



//O(n) solution 1-pass (1 for-loop)
let map1 = {}

for (let i = 0; i < array.length; i++) {
  let complement1 = target - array[i]
  if (map1[complement1] !== undefined) {
    console.log([i, map1[complement1]])
  } else {
    map1[array[i]] = i
  }
}
