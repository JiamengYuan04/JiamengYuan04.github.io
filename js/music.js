async function searchArtist() {
    const artistName = document.getElementById('artistSearch').value;
    const url = `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(artistName)}&fmt=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayArtistResults(data.artists);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayArtistResults(artists) {
    const resultsDiv = document.getElementById('artistResults');
    resultsDiv.innerHTML = ''; 

    artists.forEach(artist => {
        const div = document.createElement('div');
        div.classList.add('list-group-item');
        div.innerHTML = `<a href="#" onclick="searchAlbums('${artist.id}')">${artist.name}</a>`;
        resultsDiv.appendChild(div);
    });
}

async function searchAlbums(artistId) {
    const url = `https://musicbrainz.org/ws/2/release-group/?query=arid:${artistId}&fmt=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayAlbumResults(data['release-groups']);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayAlbumResults(albums) {
    albums.sort((a, b) => {
        // Sort albums by release date in descending order
        return b['first-release-date'].localeCompare(a['first-release-date']);
    });

    const table = document.getElementById('albumResults');
    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; 

    albums.forEach(album => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${album['first-release-date'] || 'Unknown'}</td><td>${album.title}</td>`;
        tbody.appendChild(tr);
    });

    table.hidden = false; // Show the table
}
