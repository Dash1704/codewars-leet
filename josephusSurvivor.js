function josephusSurvivor(circlePop, rateOfDeaths) {
  const circleOfPeople = []

  for(let i = 1; i <= circlePop; i++){
    circleOfPeople.push(i)
  }

  let index = 0

  while(circleOfPeople.length > 1){
    index = (index + rateOfDeaths - 1) % circleOfPeople.length; 
  //This is the modulus operator, which ensures the index wraps 
  //around if it exceeds the array's length.

  //When you reach the end of the array, % arr.length starts 
  //counting from the beginning.

    circleOfPeople.splice(index, 1);
  }

  return circleOfPeople[0]
}

module.exports = josephusSurvivor;
