const primeSieve = (n) => {
    const result = [];
    for (var i = 2; i < n; i++){
      if(n % i === 0){
        result.push(i)
      }
    }
    const sieve = result.length > 0 ? false : true;
    return sieve;
  };

export default primeSieve;