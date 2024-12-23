// You are given an input string.

// For each symbol in the string if it's the first character occurrence, 
// replace it with a '1', else replace it with the amount of times you've 
// already seen it.

function numericals(string){
  const array = string.split("")
  const count = {}

  const newArray = array.map((char) => {
    count[char] = (count[char] || 0) + 1
    return count[char]
  })

  return newArray.map(String).join('')
}

module.exports = numericals;