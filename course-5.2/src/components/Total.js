function Total({ books }) {
  let sum = 0

  Object.keys(books).forEach((key) => {
    sum += books[key].total
  })

  return <p>{sum}</p>
}
export default Total
