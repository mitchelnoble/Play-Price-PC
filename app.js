//select div to house the fetched data
let dataContainer = document.querySelector('#game-data-container');
console.log('data container',dataContainer)
const getResults = async (title) => {
  const url = `https://www.cheapshark.com/api/1.0/games?title=${title}&limit=60&exact=0`;
  try {
    let response = await axios.get(url)
    // console.log(response.data)
    // showResGames(response.data)
    appendData(response.data)
  } catch (error) {
    console.log(`${error}`)
  }
}

//take specific data from API response: thumb = game picture, external = game title, cheapest = lowest current price
// function showResGames(data) {
//   console.log(data);
//   let gameInfo =
//     `<img src = ${data.thumb}></img>
//     <h1>${data.external}</h1>
//     <h3>${data.cheapest}</h3>`;
//   dataContainer.textContent("beforeend", gameInfo);
// }
function appendData(data) {
  // console.log(data.thumb)
  data.forEach((game) => {
    let title = document.createElement('h1')
    title = game.external
    dataContainer.append(title)
    let price = document.createElement('h2')
    price = game.cheapest
    dataContainer.append(price)
    let img = document.createElement('img')
    img.src = game.thumb
    dataContainer.append(img)
  })
}

//connect form to js file
const addForm = document.querySelector('#searchBar');
function formData(event) {
  event.preventDefault();
  const inputValue = addForm.querySelector('#game').value;
  console.log(inputValue)
  getResults(inputValue)
  removeResults();
}
addForm.addEventListener('submit', formData)
// addForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const inputValue = addForm.querySelector('#game').value;
//   console.log(inputValue)
//   // fetchData(inputValue.value)
//   // removeResults();
// });

// remove previous search results
removeResults = () => {
  while (dataContainer.lastChild) {
    dataContainer.removeChild(dataContainer.lastChild);
  }
}