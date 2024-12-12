function deleteNth(arr, n){
  const count = {};
  const result = [];
  // for (const number of arr) {
  //   count[number] = (count[number] || 0) + 1;
  //   if (count[number] <= n) {
  //     result.push(number);
  //   }
  // }


  arr.map((element) => {
    count[element] = (count[element] || 0) + 1
    if (count[element] <= n) {
      result.push(element);
    }
  })

  return result
}


module.exports = deleteNth;