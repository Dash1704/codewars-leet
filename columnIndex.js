function columnIndex(index, character){
  const column = "| | | | | | | | | |".split(" ")

  for(let i = 0; i < column.length; i++){
    if(i == index){
      column[i] += character
    }
  }

  return column.join(" ").replace(`${character} `, `${character}`)
}

module.exports = columnIndex;

//create an array ['|', '|']

//at correct index, insert character after that pipe

//replace empty space with space