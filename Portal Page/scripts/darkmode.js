const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    modeButton.textContent = "Dark Mode \u2715"
});
