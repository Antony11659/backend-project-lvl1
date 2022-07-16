export const makeSequence = (numForDiff, numForFirstEl) => {
    const arr = [numForFirstEl];
    while (arr.length < 7) {
      arr.push(arr[arr.length-1] + numForDiff);
    }
    return arr;
  };
  
export const getSequence = (arr, el) => {
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