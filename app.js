

const getResults = async (game) => {
  const url = `https://www.cheapshark.com/api/1.0/games?title=${game}&limit=60&exact=0`

  try {
    const response = await axios.get(url)
    console.log(response.data)

  } catch (error) {
    console.log(`${error}`)
  }
}