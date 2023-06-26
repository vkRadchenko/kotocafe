function isOutDated(date: number | null) {
  if (date !== null) {
    if (Date.now() - date > 10 * 60 * 1000) {
      return true
    }
    return false
  }
}

export default isOutDated
