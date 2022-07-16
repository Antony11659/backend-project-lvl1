export const produceCalc = (num1, num2, operat) => {
    switch(operat) {
        case '+': 
          return num1 + num2
          break
        case '-': 
          return num1 - num2
          break
        case '*': 
          return num1 * num2
          break
        case '/': 
          return num1 / num2
          break
      
        default:
            return false;
      }
};