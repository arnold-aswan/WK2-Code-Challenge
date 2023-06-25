
 window.addEventListener("DOMContentLoaded", () => {
  initialize()
  hideAnimal()
  addVote()
})

// creates animal cards and assign them values from the db.json file then renders them on the html page
function renderAnimal(animal) {
  const ul = document.querySelector('.animals')

  let li = document.createElement("li")
  li.className = 'animalList'

  li.innerHTML = `
    <article class="animalCard">
      <div class="animalImage">
        <img src="${animal.image}" class="animalImg" />
      </div>
      <div class="animalCardBody">
        <h3 class="name">${animal.name}</h3>
        <p class="votesCount">Votes: <span class='vote'> ${animal.votes}</span></p>
        <div class="buttons">
          <button class="btn add">Add vote</button>
          <button class="btn reset" onclick="resetVotes()">Reset votes</button>
        </div>
      </div>
    </article>
  `
  ul.appendChild(li)
}

// fetches data from  the db.json file using a GET request
function renderAnimals() {
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(characters => characters.forEach(animal => renderAnimal(animal))) 
}

// function that toggles the hide css style on the animal images and votes
function hideAnimal() {
  const ul = document.querySelector('ul.animals')
  ul.addEventListener("click", (e)=> {
    if (e.target.className === 'name') {
      const hideImage = e.target.parentElement.previousElementSibling.firstElementChild
      const hideVotes = e.target.nextElementSibling
      hideImage.classList.toggle('hide')
      hideVotes.classList.toggle('hide')
    }
  })
}

// adds the vootes of the animals and increase the votes count per click
function addVote () {
  const ul = document.querySelector('ul.animals')
  ul.addEventListener("click", (e)=> {
    if(e.target.className === 'btn add') {
      const votesCount = e.target.parentElement.previousElementSibling.firstElementChild
      const newVote = parseInt(votesCount.textContent)
      votesCount.textContent = newVote + 1
    }
  })
}

// resets the votes to 0 
function resetVotes(){
  const resetVotesBtn = document.querySelectorAll('.btn.reset')
  resetVotesBtn.forEach(resetBtn => {
    resetBtn.addEventListener("click", (e)=> {
      const votes = e.target.parentElement.previousElementSibling.firstElementChild
      votes.textContent = 0
    })
  })
}

// calls the renderAnimals function
function initialize() {
  renderAnimals()
}



