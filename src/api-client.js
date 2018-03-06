const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=venezuela&api_key=a6a02ec6e7e023bf29c296ea5b7523ff&format=json'

function getArtists(){

	return fetch(URL)       // retorna una promise
		.then(response => response.json())    // el promise lo convierte a json
		.then(data => data.topartists.artist)                  // Al json se le nombra 'data'
		.then(artists => artists.map(artist => {
			return {
				id: artist.mbid,
				name: artist.name,
				image: artist.image[3]['#text'],
				likes: 200,
				comments: 140,
			}
		}))	
	
}

export { getArtists }

