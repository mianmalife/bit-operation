function isOdd(value) {
  // 判断是一个有限数
  if (typeof value === 'number' && Number.isFinite(value)) {
    if (value & 1 === 1) {
      return true
    } else {
      return false
    }
  } else {
    console.warn('value不是一个正确的数字')
  }
}
console.log(isOdd(103))