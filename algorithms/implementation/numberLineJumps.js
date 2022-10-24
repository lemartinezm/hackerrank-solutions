function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2) {
    while (x1 < x2) {
      x1 += v1
      x2 += v2
      if (x1 === x2) return 'YES'
    }
  }
  if (v2 > v1) {
    while (x2 < x1) {
      x1 += v1
      x2 += v2
      if (x1 === x2) return 'YES'
    }
  }
  return 'NO'
}
