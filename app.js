//Function for loader

let timeOut;

function myFunction() {
  timeOut = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loadIt").style.display = "block";
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
    let title = document.createElement('h2');
    title.textContent = game.external;
    title.style.className = "gameTitle";
    title.style.textDecoration = "underline";
    dataContainer.append(title);
    let price = document.createElement('h4');
    price.textContent = game.cheapest;
    price.style.className = "gamePrice";
    price.style.fontSize = "2em";
    dataContainer.append(price);
    let img = document.createElement('img');
    img.src = game.thumb;
    img.style.className = "gameImage";
    img.style.cursor = "pointer";
    img.onclick = function () {
      steamId = game.steamAppID;
      window.open(`http://store.steampowered.com/app/${steamId}/`, "_blank");
      if (game.steamAppID === null) {
        alert("Sorry, this version not found on Steam");
      }
    }
    dataContainer.append(img);
  });
  console.log(data);
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