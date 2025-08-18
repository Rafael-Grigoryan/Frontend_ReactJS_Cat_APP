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


function count(str = "as ba ba ba kl as fr de kl bt kli") {
    const obj = {};
    const arr = str.split(" ");
  arr.forEach((word) => {
        if (obj[word]) {
            obj[word] += 1;
        } else {
            obj[word] = 1;
        }
    });

    return obj;
}

console.log(count());

