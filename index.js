// see a list of all animal names
// click animal name to see its details
  // i.e image | no of votes | 
 // display details of one animal at a time
 // add number of votes for each animal + votes

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
        <h3>${animal.name}</h4>
        <p class="votesCount">Votes: ${animal.votes}</p>
        <div class="buttons">
          <button class="btn add" onClick="addVote()">Add vote</button>
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

 initialize()

 function addVote() {
  alert('hajimemashte')
 }