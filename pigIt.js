function pigIt(str) {
  arrayOfWords = str.split(" ");
  const regex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;

  const pigLatinGenerator = arrayOfWords.map((word) => {

    const firstLetter = word.charAt(0)
    return word.match(regex) ? word : word.slice(1) + firstLetter + "ay"
  })

  return pigLatinGenerator.join(" ")
}

//refactored below

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

module.exports = pigIt