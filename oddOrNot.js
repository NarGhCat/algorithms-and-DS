function recFunc(n) {
    if (n % 2 === 0) {
      return("false");
    } else if (n > 10) {
      let lastDigit = n % 10;
        n = (n - lastDigit) / 10; 
        return recFunc(n);
    } else {
        return n;
    }
  }
  console.log(recFunc(75193));