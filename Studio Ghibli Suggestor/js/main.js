//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  const url = 'https://ghibliapi.herokuapp.com/films'

  const select = document.querySelector('.movies')

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let max = data.length
      let min = 0
      let rand = Math.floor(Math.random() * (max - min + 1) + min)

      console.log('data', data)
      console.log(data[rand].title)
      document.querySelector('#movieImg').src = data[rand].image
      document.querySelector('h2').innerText = data[rand].title
      document.querySelector('h3').innerText = data[rand].description
      //document.querySelector('.movieDrop').innerText = data[rand].title
      //


      // for (var age = 12; age <= 100; age++) {
      //   selectElement.add(new Option(age));
      // }/
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

//document.querySelector('.movieDrop').addEventListener('change', getFetch)
//document.querySelector('.movieDrop').addEventListener('click', getFetch)
//document.querySelector('#title').innerHTML =
//Thing1:  -> display list on dropdown 
//THing2: click movie get details 
//Thing3:Default value : does nothing

//let selectElement = document.getElementById('.movieDrop');