function moveZeros(arr) {
  const zeros = arr.filter((value) => value === 0 )
  const nonZeros = arr.filter((value) => value !== 0 )

  return [...nonZeros, ...zeros]
}

module.exports = moveZeros;