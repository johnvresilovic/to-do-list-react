const URL = 'http://localhost:3001/'

const getAllItems = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
}