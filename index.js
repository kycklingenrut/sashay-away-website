function allQueens() {
  fetch('http://www.nokeynoshade.party/api/queens/all')
    .then(response => response.json())
    .then(result => {
      let randomNo = Math.floor(Math.random() * 115)
      document.querySelector('#quote').textContent = "'" + result[randomNo].quote + "'" + " - " + result[randomNo].name
      if (result[randomNo].quote == '""') {
        document.querySelector('#quote').textContent = "Sorry, this queen ain't got a famous quote - " + result[randomNo].name
      }
    })
}
let newQuoteButton = document.querySelector('#randomQuote')
newQuoteButton.addEventListener('click', allQueens);

function biancaDelRio() {
  fetch('http://www.nokeynoshade.party/api/queens?name=Bianca%20Del%20Rio')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      document.querySelector('#bianca').innerHTML = "Quote: " + "'" + result[0].quote + "'"
      // document.querySelector('#bianca').innerHTML = "Name: " + "'" + result[0].name + "'"
      document.querySelector('#bianca').setAttribute('class', 'card-transform')

    })
}

function jinkxMonsoon() {
  fetch('http://www.nokeynoshade.party/api/queens?name=Jinkx%20Monsoon')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      document.querySelector('#jinkx').innerHTML = "Quote: " + "'" + result[0].quote + "'"
      document.querySelector('#jinkx').setAttribute('class', 'card-transform')
    })
}

function latriceRoyale() {
  fetch('http://www.nokeynoshade.party/api/queens?name=Latrice%20Royale')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      document.querySelector('#latrice').innerHTML = "Quote: " + "'" + result[0].quote + "'"
      document.querySelector('#latrice').setAttribute('class', 'card-transform')
    })
}

function alaskaThunderfuck() {
  fetch('http://www.nokeynoshade.party/api/queens?name=Alaska%20Thunderfuck%205000')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      document.querySelector('#alaska').innerHTML = "Quote: " + "'" + result[0].quote + "'"
      document.querySelector('#alaska').setAttribute('class', 'card-transform')
    })
}

let bianca = document.querySelector('#bianca')
bianca.addEventListener("click", biancaDelRio)

let jinkx = document.querySelector('#jinkx')
jinkx.addEventListener("click", jinkxMonsoon)

let latrice = document.querySelector('#latrice')
latrice.addEventListener("click", latriceRoyale)

let alaska = document.querySelector('#alaska')
alaska.addEventListener("click", alaskaThunderfuck)