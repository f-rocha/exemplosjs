const swap = (items, leftIndex, rightIndex) => {
  var temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

const shuffle = vetor => {
  for (let i = vetor.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = vetor[i]
    vetor[i] = vetor[j]
    vetor[j] = temp
  }
  let novoVetor = JSON.stringify(vetor)
  return novoVetor
}

const bubble_sort = (vetor) => {
  let swapped

  do {
    swapped = false
    for (let i = 0; i < vetor.length - 1; i++) {
      if (vetor[i] > vetor[i + 1]) {
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
        swapped = true
      }
    }
  } while (swapped)

  return vetor
};

const selection_sort = (vetor) => {
  for (let i = 0; i < vetor.length; i++) {
    let lowest = i
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[lowest]) {
        lowest = j
      }
    }
    if (lowest !== i) {
      [vetor[i], vetor[lowest]] = [vetor[lowest], vetor[i]]
    }
  }
  return vetor
}

const particionamento = (items, left, right) => {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right
  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

const quick_sort = (items, left, right) => {
  var index
  if (items.length > 1) {
    index = particionamento(items, left, right)
    if (left < index - 1) {
      quick_sort(items, left, index - 1)
    }
    if (index < right) {
      quick_sort(items, index, right)
    }
  }
  return items
}
