# Project Overview

## Project Name

Play Price PC

## Project Description

Play Price PC is a web application that allows users to search for digital PC games and find the lowest price of those games from online retailers such as Steam and Amazon.

## API and Data Sample

API: https://apidocs.cheapshark.com/ 

```
[
    {
        "gameID": "189443",
        "steamAppID": null,
        "cheapest": "14.09",
        "cheapestDealID": "TbR66egEaXEIu550sZabeqV6QLmauG1hdjYtryrJC3A%3D",
        "external": "Mega Man 11",
        "internalName": "MEGAMAN11",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/742300/capsule_sm_120.jpg?t=1591584092"
    },
    {
        "gameID": "190203",
        "steamAppID": "742300",
        "cheapest": "29.99",
        "cheapestDealID": "3AiqS1612XYdcIzspDPlth7bXNn6G5KMMH%2B3T4HDAjQ%3D",
        "external": "Mega Man 11 / 11 !!",
        "internalName": "MEGAMAN1111",
        "thumb": "https://hb.imgix.net/d17ca7f3059015005f43579fb5d7a47d6510c419.jpeg?auto=compress,format&fit=crop&h=84&w=135&s=13c3c7119c658efeea9175ce07f8d517"
    },
```
## Wireframes

Initial page:

<a href="https://imgur.com/7ZqCkGO"><img src="https://i.imgur.com/7ZqCkGO.png" title="source: imgur.com" /></a>

Game search example: 

<a href="https://imgur.com/1ydlq4I"><img src="https://i.imgur.com/1ydlq4I.png" title="source: imgur.com" /></a>

#### MVP 

- Allow user to search for a game title and return its price from the CheapShark API. 
- Have clickable hyperlinks that send users to the games' corresponding online retailers such as Steam.  

#### PostMVP  

- add animations in scrolling, hovering over thumbnails, and loading for a more sleek appearance
- find extra relevent data such as reviews to add to the search results
- create logos, icons and other graphics to supplement the content and aesthetics of the webpage 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 10| Project Approval | Complete
|Nov 12| Core Application Structure (HTML, CSS, etc.) | Complete
|Nov 13| Pseudocode / actual code | Complete
|Nov 16| MVP | Complete
|Nov 17| Presentations | Complete

## Priority Matrix
https://wireframe.cc/ewj9u3

<a href="https://imgur.com/PXmDlET"><img src="https://i.imgur.com/PXmDlET.png" title="source: imgur.com" /></a>

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating .html,.css,.js files and connecting them | H | 2hrs|5mins |5mins|
| Add baseline CSS fonts and style | H | 2hrs|1hr|1hr|
| Add a text input form with search button | H | 2hrs|1hr |1hr|
| Create a functional Eventlistener for the search button | H | 2hrs|2hrs|2hrs|
| Connecting API with the DOM | H | 3hrs|10hrs|10hrs |
| Including relevant data in the search list besides price such as reviews or other retailers | L | 2hrs|1hr|1hr|
| Proper CSS alignment of the Data & Content | H | 3hrs|10hrs |10hrs|
| Add media queries and breakpoints | H | 3hrs|1hr|1hr|
| Adding CSS keyframes & animations to search results | L | 3hrs|1hr|1hr|
| Adding CSS keyframes & animations to search button | L | 3hrs|3hrs|3hrs|
| Adding CSS keyframes & animations while the user scrolls down the page | L | 3hrs|0|0|
| Add a sticky navigation bar to put the user back to the top of the page | L | 2hrs|1hr|1hr|
| Debugging .html | H | 2hrs|0|0|
| Debugging .css | H | 3hrs|10hrs|10hrs|
| Debugging .js | H | 3hrs|10hrs|10hrs|
| Creation of graphics and/or media such as logo and audio FX | L | 3hrs|30mins | |
| Total | H |41hrs |51.35hrs|51.35hrs|

## Code Snippet

This particular function was also my work around to adjust the styling of the API data:

```
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
```

## Change Log

11/09/2020: Added: READme.md,
11/10/2020: Created .html, .css, .js, found font styling & title icon.
11/11/2020: Created event listeners, debugging API requests
11/12/2020: Debugging of javascript. Adjusted CSS of data
11/13/2020: Debugged button and event listener on form, reached first MVP with help by successfully connecting DOM to API and generating request
11/15/2020: Adjusted styling and reached both MVP's
11/16/2020: changed progress bar to loading animation, adjusted css styling
11/17/2020: added comments, deleted console.logs, deployed web application
