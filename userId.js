function getUserIds(str){
  const idsArray = str.split(',');
  const passwords = []
  
  const trimmedArray = idsArray.map((id) => {
    const trimmedWord = id.trim().toLowerCase();
    return trimmedWord.split("").filter((letter) => letter !== "#").join('')
  });

  trimmedArray.forEach((word) => {
    const splitWord = word.split('')
    if(splitWord[0] === "u" && splitWord[1] == "i" && splitWord[2] == "d"){
      passwords.push(splitWord.slice(3).join('').trim())
    }
    else{
      passwords.push(splitWord.join('').trim())
    }
  })

  return passwords
}
  
  module.exports = getUserIds;


//for each element in array:

//remove the white spaces

//remove all hashtags

//romeve leading uid

//make lowercase