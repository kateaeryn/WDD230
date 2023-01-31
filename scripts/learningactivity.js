
const giturl = "https://kateaeryn.github.io/WDD230/learningactivity.json"




async function GetActivities() {
    const response = await fetch(giturl);
    const links = await response.json();
    console.table(links);
    displayLinks(links);
}
GetActivities();

const displayLinks = (links) => {
    links.forEach((week) => {
        let section = document.createElement('ul');
        let weekNo = document.createElement('li');
        let assignment = document.createElement('a');
               
        
        weekNo.innerHTML = `${week[0]}`;
        assignment.innerHTML = `${week[i]}`;

        

        section.appendChild(weekNo);
        section.appendChild(assignment);
        
      
    });
}

