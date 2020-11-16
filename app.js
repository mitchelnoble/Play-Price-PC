//Global Variables
let gotGameData;



//select div to house the fetched data
let dataContainer = document.querySelector('#game-data-container');
console.log('data container', dataContainer)
const getResults = async (title) => {
  const url = `https://www.cheapshark.com/api/1.0/games?title=${title}&limit=60&exact=0`;
  try {
    let response = await axios.get(url)
    appendData(response.data)
  } catch (error) {
    console.log(`${error}`)
  }
}


//take specific data from API response: thumb = game picture, external = game title, cheapest = lowest current price

function appendData(data) {
  gotGameData = data;
  data.forEach((game) => {
    let title = document.createElement('h2')
    title = game.external
    dataContainer.append(title)
    let spaceBetween = document.createElement('p')
    spaceBetween = ("--->")
    dataContainer.append(spaceBetween)
    let price = document.createElement('h4')
    price = game.cheapest
    dataContainer.append(price)
    let img = document.createElement('img')
    img.src = game.thumb
    img.onclick = function () {
      steamId = game.steamAppID
      window.open(`http://store.steampowered.com/app/${steamId}/`, "_blank");
    }
    dataContainer.append(img)
  })
  console.log(data)
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


// remove previous search results
removeResults = () => {
  while (dataContainer.lastChild) {
    dataContainer.removeChild(dataContainer.lastChild);
  }
}

//function that displays when no results are found by the API

