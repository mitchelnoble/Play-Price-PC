let dataContainer = document.querySelector('#game-data-collector');
const getResults = async () => {
  const url = `https://www.cheapshark.com/api/1.0/games?title=${title}&limit=60&exact=0`;
  try {
    let response = await axios.get(url)
    showResGames(response.data)
    console.log(response)
  } catch (error) {
    console.log(`${error}`)
  }
}

function showResGames(data) {
  console.log(data);
  let gameInfo =
    `<img src = ${data.thumb}></img>
    <h1>${data.external}</h1>
    <h3>${data.cheapest}</h3>`;
  dataContainer.textContent("beforeend", gameInfo);
}

const addForm = document.querySelector('#searchBar');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = addForm.querySelector('#game').text;
  console.log(inputValue)
  // fetchData(inputValue.value)
  // removeResults();
});

// removeResults = () => {
//   while (dataContainer.lastChild) {
//     dataContainer.removeChild(dataContainer.lastChild);
//   }
// }