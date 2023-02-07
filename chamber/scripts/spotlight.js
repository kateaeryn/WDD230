
const memberUrl = 'https://kateaeryn.github.io/WDD230/chamber/data/members.json';

const cards = document.querySelector('.tier2');


async function GetMemberData() {
    const response = await fetch(memberUrl);
    const data = await response.json();
    displaySpotlight(data.members);
}
GetMemberData();

const displaySpotlight = (members) => {
    members.forEach((member) => {
       
        if (member.membership == "Gold" || "Silver") {    
        let card = document.createElement('section');
        let header = document.createElement('h3');
        let icon = document.createElement('img');
        let email = document.createElement('a');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let tagline = document.createElement('p');

        tagline.innerHTML = `${member.tag}`;
        email.innerHTML = `${member.email}`;
        phone.textContent = `${member.phone}`;
        website.innerHTML = `${member.url}`;
        website.setAttribute('href', `${member.url}`);
        
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `${member.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '200');
        icon.setAttribute('height', '100');

        header.appendChild(icon);
        card.appendChild(header);
        card.appendChild(tagline);
        card.appendChild(email);
        card.appendChild(phone);
            card.appendChild(website);

        cards.appendChild(card);}
    });
}