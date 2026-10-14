function hasTwoCubeSums(n) {
  let count = 0
  const limit = Math.cbrt(n)

  for (let a = 0; a < limit; a++ )
  {
      let b3 = n - a**3
      let b = Math.round(Math.cbrt(b3))
      if (b**3 + a**3 === n)
      {
          count++
        if (count > 2)
          {
            return true
          }
      }
  }
  return false
}
