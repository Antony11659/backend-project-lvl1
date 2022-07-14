const getGCD = (num1, num2) => {
    let a = num1 > num2 ? num1 : num2;
    let b = num1 < num2 ? num1 : num2;
    let r = a % b;
      if(b === 0) {
        return a;
      }
    return getGCD(b, r);
  };

export default getGCD;