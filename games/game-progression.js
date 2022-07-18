export const makeArray = (numForDiff, numForFirstEl) => {
    const arr = [numForFirstEl];
    while (arr.length < 8) {
      arr.push(arr[arr.length-1] + numForDiff);
    }
    return arr;
  };
  
export const makeSequence = (arr, el) => {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
      if ( arr[i] === el ){
        result.push('..');
      }else {
        result.push(arr[i]);
      }
    }
    return result.join(' ');
  };