function fibonacci(targetIndex){
  const sequence = [1, 1]

  for(let i = 2; i < targetIndex + 1; i++){
    const next = sequence[i - 2] + sequence[i - 1]
    sequence.push(next)
  }

  return sequence[targetIndex]
}

module.exports = fibonacci;