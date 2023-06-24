// see a list of all animal names
// click animal name to see its details
  // i.e image | no of votes | 
 // display details of one animal at a time
 // add number of votes for each animal + votes

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
        <p class="votesCount">Votes: ${animal.votes}</p>
        <div class="buttons">
          <button class="btn add">Add vote</button>
          <button class="btn reset">Reset votes</button>
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

// function myFunction() {
  const parentEl = document.querySelector('ul.animals')

  parentEl.addEventListener("click", (e)=> {
    if (e.target.tagName === 'H3') {
      const H3Element = e.target
      const liEl = e.target.parentElement.previousElementSibling.firstElementChild
      liEl.classList.toggle('hide')
    }
  })
//  }

function addVote() {

}

function resetVotes() {

}

 initialize()

