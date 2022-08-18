// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  max = - Infinity;
  min = Infinity;
  sum = 0
  avg = 0
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));


  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
sum =0
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;


  // Ваш кода
  // for ...


  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const currentArrSum = func(arrOfArr[i]);
    if (max < currentArrSum) max = currentArrSum;
  }
  

  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, dif;
  max = -Infinity;
  min = Infinity;
  dif = 0
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  }
  dif = Math.abs(max - min);
  return dif;
}
