function compareArrays(arr1, arr2) {

  let result;

  return arr1.length == arr2.length && arr1.every((v,i)=>v === arr2[i])

};




function advancedFilter(arr) {

  let resultArr;




  resultArr = arr

  .filter((arr) => arr % 3 === 0 && arr > 0) .map((arr) => arr * 10);

  console.log(resultArr);

  return resultArr; 

}
