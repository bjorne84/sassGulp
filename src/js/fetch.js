// Händelsehanterare
document.getElementById('btn').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getUsers);
document.getElementById('btn3').addEventListener('click', getPosts);
document.getElementById('btn4').addEventListener('click', getPeople);



// Funtion för Textfil
function getText() {
    fetch('textfil.txt')
    .then(function(res) {
        // text() är en inbyggd funktion
        return res.text();
    })
    .then(function(data) {
        document.getElementById('outText').innerHTML = data;
    })
}

// samma med arrow-function
function getText2() {
    fetch('textfil.txt')
    .then((res) => res.text)
    .then((data) => {
        document.getElementById('outText2').innerHTML = data;
    })
}


//JSON

function getUsers() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        // Skapa variabel
        let output = "<h2 class='h2'>Users</h2>";

        //Loop
        data.forEach(function(user) {
            output +=`
            <ul>
                <li class="li">ID: ${user.id}</li>
                <li class="li">Name: ${user.name}</li>
                <li class="li">Email: ${user.email}</li>
            </ul>
            `;         
        })
        document.getElementById('output').innerHTML = output;
    })
}

// Hämta data från externt API
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => resp.json())
    .then((data) => {
        // Skapa variabel
        console.log(data);
        let output2 = "<h2 class='h2'>Posts</h2>";

        //Loop
        data.forEach(function(post) {
            output2 +=`
            <article>hej
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </article>
            `;         
        })
        document.getElementById('output2').innerHTML = output2;
    })
}


// Hämta data från externt API
function getPeople() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then((resp) => resp.json())
    .then((data) => {
        // skapar variabel för att skriva ut data
        let output = "<h2>Anställda</h2>";
        //Loopar igenom
        data.forEach(function(post) {
            output +=`
            <article>
            <h3>Namn: ${post.employee_name}</h3>
            <p>Lön: ${post.employee_salary}</p>
            </article>
            `;         
        })
        document.getElementById('output3').innerHTML = output;
    })
}


// web dev simplified

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Björn',
        age: '36'
    })
})
.then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('Error'))


// Promises


let test = new Promise((resolve, reject) => {
    let add = 2 + 2
    if (add === 4) {
        resolve('succes')
    } else {
        reject('Failade')
    }
})

test.then((message) => {
    console.log('Nu körs then ' + message)
}).catch((message) => {
    console.log('Nu blev det fel och catchen fångade upp ' + message)
})


