function transformToObjects(listOfNumbers) {
    let result = [];
    for (let i = 0; i < listOfNumbers.length; i++) {
      let obj = { val: listOfNumbers[i] };
      result.push(obj);
    }
    return result;
  }
  
  console.log(JSON.stringify(transformToObjects([1, 2, 3]))); 