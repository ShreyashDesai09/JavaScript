const AIDisplay = document.getElementById("AI")
const UserDisplay = document.getElementById("User")
const ResultDisplay = document.getElementById("Result")

const Random = document.querySelectorAll("button")

let User

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", () => 
{
    User = e.target.id
    UserDisplay.innerHTML = User 
    generateAI()
}))
 
function generateAI()
{
    const Random = Math.floorRandom() * 3 + 1
    console.log(Random)
}