function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let midpoint = Math.round(wholeArray.length/2);

  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {

  let outputArray = [];

  if(array1.length < 1 && array2.length < 1 ) {
    return outputArray;
  }

  if(array1.length < 1 || array2.length < 1 ) {
    if(array1.length >= 1) {
      outputArray.concat(array1);
      array1 = [];
    }
    if(array2.length >= 1) {
      outputArray.concat(array2);
      array2 = [];
    }
  }

  if(array1[0] < array2[0]) {
    outputArray.push(array1[0])
    array1 = array1.slice(1);
  } else {
    outputArray.push(array2[0])
    array2 = array2.slice(1);
  }

  return merge(array1, array2);

}
