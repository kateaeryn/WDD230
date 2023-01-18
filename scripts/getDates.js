
let date = new Date().getFullYear();

document.querySelector("#copyright").innerHTML = `&copy;  ${date}  Kate Christensen  Arizona, USA`;

let modify = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last modified: ${modify}`;

