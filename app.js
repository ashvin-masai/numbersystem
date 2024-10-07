const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  primeArray = [];
 
  prime = ""
  for(i=0; i<numbers.length; i++){
      isPrime = true
      for (let j = 2; j <= numbers[i]/2; j++) {
        if(numbers[i]%j == 0){
            isPrime = false 
        }
      }
      if(isPrime){
          primeArray.push(numbers[i])
      }
  
  }
  console.log("Prime Numbers")
  console.log(primeArray);

  max = -Infinity
  for (let x = 0; x < primeArray.length; x++) {
    if(max<primeArray[x]){
        max = primeArray[x]
    } 
  }

  min = Infinity
  for (let z = 0; z < primeArray.length; z++) {
    if(min>primeArray[z]){
        min = primeArray[z]
    } 
  }
  console.log("Maximum", max)
  console.log("Minimum", min)

  sumofarr = 0

  for (let k = 0; k < primeArray.length; k++) {
    sumofarr += primeArray[k]
    
  }
  console.log("Sum of all numbers",sumofarr)