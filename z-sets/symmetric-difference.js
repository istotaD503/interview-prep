// given two strings find the number of deletions to make those two anagrams

// let arr1 = [1,2,2,3]
// let arr2 = [1,2,4]
// let arr1 = 'fcrxzwscanmligyxyvym';
// let arr2 = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
// answer [3,4]

// const symmDiff = (arr1, arr2) => {
//     let sortedOne = arr1.split('').sort()
//     let sortedTwo = arr2.split('').sort()
//     let i = 0, j = 0;
//     let diff = []
//     while(i < sortedOne.length && j < sortedTwo.length) {
//         if (sortedOne[i] < sortedTwo[j]) {
//             diff.push(sortedOne[i])
//             i++
//         } else if(sortedOne[i] > sortedTwo[j]) {
//             diff.push(sortedTwo[j])
//             j++
//         } else {
//             i++
//             j++
//         }
//     }
//     diff = [...diff, ...sortedOne.slice(i), ...sortedTwo.slice(j)]
//     return diff.length
// }

// console.log(symmDiff(arr1, arr2))

let a = 'fcrxzwscanmligyxyvym';
let b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';

const symmDiff = (a, b) => {
  let map = {};
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    map.hasOwnProperty(a[i]) ? map[a[i]]++ : (map[a[i]] = 1);
  }
  for (let i = 0; i < b.length; i++) {
    map.hasOwnProperty(b[i]) ? map[b[i]]-- : diff++;
  }
  console.log(map)
  for (let key in map) {
    diff += Math.abs(map[key]);
  }
  return diff;
};

console.log(symmDiff(a, b));
