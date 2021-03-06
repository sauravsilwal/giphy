// gifs div 
const gifs = document.getElementById('gifs');

// api key
const key = "2MACBWIkzZteDHAMTJRqDrs3ZDEkNcmR";

// user inputs 
const queries = document.getElementsByClassName('query');
for (let i = 0; i < queries.length; i++) {
	queries[i].addEventListener('keydown', function(event) {
		if (event.which == 13) {
			const query = event.currentTarget.value;
			addGif(query);
		}
	});
}

const randomBtn = document.getElementById('random');
const removeBtn = document.getElementById('remove');

randomBtn.addEventListener('click', function(event) {
	addGif("random");
});

//gets gif
function addGif(tag) {
	const url = `https://api.giphy.com/v1/gifs/random?tag=${tag}&rating=g&api_key=${key}`;
	
	fetch(url)
		.then(function(response){
			return response.json();
		})
		.then(function(json){
			const img = new Image();
			img.src = json.data.images.downsized.url;
			gifs.appendChild(img);
		
			// add new GIF with click
			img.addEventListener('click', function(event) {
                this.remove();
                fetch(url);
				addGif(tag);
			});
        
            //clear GIFs
            removeBtn.addEventListener('click', function(event) {
                img.remove();
            });
        	
		})
    
    
		.catch(function(error){
			console.log('error', error);
		});
}






