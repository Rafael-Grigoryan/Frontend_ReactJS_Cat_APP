// function count(str = "as ba ba ba kl  as fr de kl bt kli") {
//     const m = new Map();
//     const arr = str.split(" ");
//     arr.forEach((word)=>{
//         if (m.get(word)) {
//             m.set(word, m.get(word) + 1)
//         } else{
//             m.set(word, 1)
//         }
//     })
//     return m
// }

// console.log(count());

// function count(str = "as ba ba ba kl as fr de kl bt kli") {
//     const obj = {};
//     const arr = str.split(" ");
//   arr.forEach((word) => {
//         if (obj[word]) {
//             obj[word] += 1;
//         } else {
//             obj[word] = 1;
//         }
//     });

//     return obj;
// }

// console.log(count());

// const array2 = [1, 2, [3, [4, 5, 6, [7, 8], 9], 6, 7], 7, 8, [90], 0];

// function flat(arr, limit = 4) {
//   let newArr = [];

//   for (let elem of arr) {
//     if (Array.isArray(elem) && limit > 0) {
//       newArr.push(...flat(elem, limit - 1));
//     } else {
//       newArr.push(elem);
//     }
//   }

//   return newArr;
// }
// console.log(array2);
// console.log(flat(array2));

// function flat(arr) {
//   let result = [];

//  for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     if (Array.isArray(el)) {
//         result = result.concat(flat(el))
//     } else {
//         result.push(el)
//     }
//  }

//   return result;
// }

// console.log([1, 2, [3, [4, 5, 6, [7, 8], 9], 6, 7], 7, 8, [90], 0]);
// console.log(flat([1, 2, [3, [4, 5, 6, [7, 8], 9], 6, 7], 7, 8, [90], 0]));
