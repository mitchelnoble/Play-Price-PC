//Global Variables
let gotGameData;

//Function for loader
let timeOut;

function myFunction() {
  timeOut = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


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
    title.textContent = game.external
    title.style.className = "gameTitle";
    dataContainer.append(title)
    let price = document.createElement('h4')
    price.textContent = game.cheapest
    price.style.className = "gamePrice";
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

//Function that adjusts text size of data

function increaseTextSize() {
  if (document.getElementsByTagName('h2') == true) {
    upTextSize = document.getElementsByTagName('h2')
    value.style.color = "red";
  }
}
increaseTextSize();

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

