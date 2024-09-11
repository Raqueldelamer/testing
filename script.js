console.log("Welcome to NASA Astonomy Picture of the Day!");

let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=qdKmIGSnIsK5iNoMCvpbQwkaWZuXIclEzQNe1E35`; //api_key entered

let fetchButton = document.getElementById('fetch-button');
let apodImage = document.getElementById('apod-image');
let apodTitle = document.getElementById('apod-title');
let apodDescription = document.getElementById('apod-description');
console.log(apiUrl);

async function fetchImage() {
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);

        apodImage.src = data.url;
        apodImage.alt = data.title;
        apodTitle.textContent = data.title;
        apodDescription.textContent = data.explanation;
        console.log(apodTitle.textContent);

    } catch (error) {
        console.error('Error fetching image data:', error);
        apodImage.src = '';
        apodTitle.textContent = 'Error';
    }
}

fetchButton.addEventListener('click', fetchImage);