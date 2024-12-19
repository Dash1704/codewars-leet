function whatCentury(year){
//need to work out the number of the centuryc
//1-100 = 1st century
//101-200 = 2nd century
//201-300 = 3rd century
const finalResult = []
const numberYear = Math.ceil(Number(year) / 100).toString()
finalResult.push(numberYear)

const yearArray = numberYear.split('')
// console.log(yearArray)
console.log(yearArray.slice(-1))
const arrayLastIndex = yearArray.slice(-1)

if(arrayLastIndex == "1"){
  finalResult.push("st")
} else if(arrayLastIndex == "2"){
  finalResult.push("nd")
} else if(arrayLastIndex == "3"){
  finalResult.push("rd")
} else {
  finalResult.push('th')
}

return finalResult.join('')

// const suffix = 




//append onto it the respective suffix of said century


}

module.exports = whatCentury;