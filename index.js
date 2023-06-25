
 window.addEventListener("DOMContentLoaded", () => {
  hideAnimal()
})

 function renderAnimal(animal) {
  const ul = document.querySelector('.animals')

  let li = document.createElement("li")
  li.className = 'animalList'
  li.setAttribute('name', 'listItem')

  li.innerHTML = `
    <article class="animalCard">
      <div class="animalImage">
        <img src="${animal.image}" class="animalImg" />
      </div>
      <div class="animalCardBody">
        <h3 class="name" >${animal.name}</h3>
        <p class="votesCount">Votes:<span class='vote'> ${animal.votes}</span></p>
        <div class="buttons">
          <button class="btn add" onclick="addVote()">Add vote</button>
          <button class="btn reset" onclick="resetVotes()">Reset votes</button>
        </div>
      </div>
    </article>
  `
  ul.appendChild(li)
}

function renderAnimals() {
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(characters => characters.forEach(animal => renderAnimal(animal)))
    
}

 function initialize() {
  renderAnimals()
  
}

function hideAnimal() {
  const ul = document.querySelector('ul.animals')

  ul.addEventListener("click", (e)=> {
    if (e.target.className === 'name') {
      const hideElement = e.target.parentElement.previousElementSibling.firstElementChild
      hideElement.classList.toggle('hide')
    }
  })
}

function addVote(){ 
const addVoteBtns = document.querySelectorAll('.btn.add')
addVoteBtns.forEach((addVoteBtn) => {
    addVoteBtn.addEventListener("click", (e)=> {
      const votesCount = e.target.parentElement.previousElementSibling.firstElementChild
      console.log(votesCount);
      const currentVote = parseInt(votesCount.textContent)
      console.log(currentVote);
      votesCount.textContent = currentVote + 1
    })
  })
}

function resetVotes(){
  const resetVotesBtn = document.querySelectorAll('.btn.reset')
  resetVotesBtn.forEach(resetBtn => {
    resetBtn.addEventListener("click", (e)=> {
      const votes = e.target.parentElement.previousElementSibling.firstElementChild
      votes.textContent = 0
    })
  })
}

initialize()

