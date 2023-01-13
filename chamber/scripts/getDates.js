
let date = new Date().getFullYear();

document.querySelector("#copyright").innerHTML = `&copy;  ${date}  Gilbert Chamber`;

let modify = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last modified: ${modify}`;
