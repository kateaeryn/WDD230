
document.getElementById('submit_button').addEventListener('click', publishToTable);

function publishToTable() {
    const fullname = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rate = document.getElementById('rating').innerHTML;
    const username = document.getElementById('password').value;
    

       if (fullname && email && rate && username != ' '){
            
            const tableName = document.getElementById('table_name');
            const tableEmail = document.getElementById('table_email');
            const tableRate = document.getElementById('table_rate');
            const tableUsername = document.getElementById('table_username');
            tableName.innerText = fullname;
            tableEmail.innerHTML = email;
            tableRate.innerHTML = rate;
            tableUsername.innerHTML = username;
            document.querySelector('.table').style.display = "block";   
    }
    
    
    }

var form = document.getElementById('contact');
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);