async function fetchMeme() {
    const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
    const apiKey = '';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'programming-memes-images.p.rapidapi.com'
        }
    };

    try {
        // Start loading
        const loadingElement = document.getElementById('loading');
        const memeImageElement = document.getElementById('meme');

        const response = await fetch(url, options);
        const result = await response.text();
        const memeData = JSON.parse(result);
        const memeImageUrl = memeData[0]?.image;

        if (memeImageUrl) {
            memeImageElement.src = memeImageUrl;

            // Hide the loading message and show the meme
            memeImageElement.style.display = 'block';
            loadingElement.style.display = 'none';
        } else {
            loadingElement.innerText = "No meme found";
        }
    } catch (error) {
        document.getElementById('loading').innerText = "Error loading meme";
        console.error(error);
    }
}

fetchMeme();
