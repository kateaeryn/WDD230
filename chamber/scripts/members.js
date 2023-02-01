
const url = 'https://kateaeryn.github.io/WDD230/chamber/data/members.json';

const cards = document.querySelector('.cards');

async function GetProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayProphets(data.members);
}
GetProphetData();

/*const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birth = document.createElement('p');
        let place = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '400');
        portrait.setAttribute('height', '500');

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}*/