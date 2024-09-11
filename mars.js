console.log("Welcome to Mars!");

document.getElementById('fetch-button').addEventListener('click', async function() {
    try {

        let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-06-03&api_key=nAtBNmpNWL3rt3h89pmX28lNVdAgq6i6bzHC2q15');
        let data = await response.json();
        console.log(data);
        // Get the image container
        let imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = ''; 
            

        if (data.photos.length > 0) {
            
            data.photos.forEach(photo => {
            let imgElement = document.createElement('img');
            imgElement.src = photo.img_src;
            imgElement.alt = 'Mars Rover Photos';
            imageContainer.appendChild(imgElement);
            console.log(imgElement.src);
            console.log(imgElement.alt);
            }
        );
        } else {
            imageContainer.innerHTML = '<p>No photos available.</p>';
        }
    } catch (error) {
        console.error('Error Fetching Photos', error);
        document.getElementById('image-container').innerHTML = '<p>Oops failed to fetch.</p>';
    }
}
);
