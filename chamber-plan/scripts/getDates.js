
let date = new Date().getFullYear();

document.querySelector("#copyright").innerHTML = `&copy;  ${date}  Gilbert | Kate Christensen  | WDD 230 Project`;

let modify = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last modified: ${modify}`;
