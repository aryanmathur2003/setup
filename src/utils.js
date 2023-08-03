const llama = (dataSet) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(dataSet.length / itemsPerPage)
  
    const newData = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return dataSet.slice(start, start + itemsPerPage)
    })
  
    return newData
  }
  
  export default llama
  