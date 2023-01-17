let input = document.querySelector('#favchap');

let button = document.querySelector('button');

let list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
    
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

chaptersArray.forEach(chapter => { displayList(chapter); 
    
});

function displayList(item) {
    item = input.value;
    input.value != '';

    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    const listText = document.createElement('span');

    listItem.appendChild(listText);
    listText.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}