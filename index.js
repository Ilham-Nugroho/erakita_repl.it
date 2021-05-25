const addTrue = (param1, param2) => {
  for(i=0; i<param1.length; i++){
    let nilai1 = param1[i]
    
    let nilai2
    for(j=i+1; j<param1.length; j++){
      nilai2 = param1[j]  
      if(nilai1+nilai2 == param2) {
      return [nilai1, nilai2]
    } 
    }
    
    }
    return "Solusi tidak ditemukan"
}
console.log(addTrue([0, -1, 2, -3, 1], -2))



const addFalse = (param1, param2) => {
  for(i=0; i<param1.length; i++){
    let nilai1 = param1[i]
    
    let nilai2
    for(j=i+1; j<param1.length; j++){
      nilai2 = param1[j]  
      if(nilai1+nilai2 == param2) {
      return [nilai1, nilai2]
    } 
    }
    
    }
    return "Solusi tidak ditemukan"
}
console.log(addFalse([1, -2, 1, 0, 5], -6))