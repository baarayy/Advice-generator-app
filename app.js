const btn = document.getElementById("btn");
const adviceID = document.getElementById("adviceId");
const advice = document.getElementById("advice");
window.onload = showQuote;
btn.addEventListener("click", function(){
    showQuote();
});
function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceID.innerHTML = `Advice # ${data.id}`;
        advice.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}