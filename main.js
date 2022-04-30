let name = document.getElementById('name');
let mail = document.getElementById('email');
let pass1 = document.getElementById('pwd1');
let pass2 = document.getElementById('pwd2');
let submit = document.getElementById('submit');
let msg = document.getElementById('message');
let showUser = document.getElementById('show-users');
let resetusers = document.getElementById('reset-users');
//let myform = document.getElementById('my-form');
// let valpass = ^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$.test(pass1.value);

resetusers.addEventListener('click', fdelete);

// console.log(submit);
// console.log(msg);
// console.log(showUser);

// submit.addEventListener('click', fsubmit);

/******ADEVENTLISTENER EN FORM**********/

submit.addEventListener('click', fvalidate);

//console.log(users);

/***************FUNCION VALIDACION**********/

function fvalidate(e) {
  //e.preventDefault();
  if (
    name.value === '' ||
    mail.value === '' ||
    pass1.value === '' ||
    pass2.value === ''
  ) {
    msg.innerHTML = `<div class="alert alert-warning" role="alert">
    Please fill in all fields!
  </div>`;
  } else if (/(\w+?@\w+?\x2E.+)/.test(mail.value) !== true) {
    msg.innerHTML = `<div class="alert alert-warning" role="alert">
    Please enter a correct email!
  </div>`;
    //Please enter a correct email'
  } else if (pass1.value !== pass2.value) {
    //msg.innerHTML = 'Las dos contraseñas no son iguales';
    //`Las dos contraseñas no son iguales`
    msg.innerHTML = `<div class="alert alert-warning" role="alert">
    Please, put the same passwords!
  </div>`;
  } else if (
    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(pass1.value) !== true
  ) {
    //msg.innerHTML = 'Mínimo 8 caracteres, al menos una letra y un número';
    msg.innerHTML = `<div class="alert alert-warning" role="alert">
    Password must contain 8 characteres, one uppercase letter and one number!
  </div>`;
  } else {
    //msg.innerHTML = "Yeah, it's perfect Mate!";
    msg.innerHTML = `<div class="alert alert-warning" role="alert">
    Yeah, it's perfect Mate!!
  </div>`;
    fsubmit(e);
  }
  setTimeout(() => {
    msg.innerHTML = '';
  }, 3000);
}

//let users = [];

/*************FUNCTION ADD USERS*************/
function fsubmit(e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem('users')) || [];

  let users2 = {
    name: name.value,
    email: mail.value,
    pasword1: pass1.value,
    password2: pass2.value,
  };
  users.push(users2);
  localStorage.setItem('users', JSON.stringify(users));
  showUser.innerHTML = '';
  showScreen();
}

/************FUNCTION SHOW USERS*********************/
function showScreen() {
  let data = JSON.parse(localStorage.getItem('users'));
  for (let i = 0; i < data.length; i++) {
    //showUser.innerHTML += `<p>${data[i].name}</p><p>${data[i].email}</p>`;
    showUser.innerHTML += `<div class="card" style="width:400px">
    <img class="card-img-top" src="imgs/Jurassic_World_dom_insta.jpeg" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">User: ${data[i].name}</h4>
      <p class="card-text">Email: ${data[i].email} </p>
      <a href="#" class="btn btn-primary">Go to main</a>
    </div>
  </div>`;
  }
}
showScreen();
/**********FUNCTION DELETE*************/
function fdelete() {
  //j.preventDefault();
  localStorage.clear();
  //Te borras los datos que te muestra en el div
  showUser.remove();
  //Te borra los datos de la consola
  console.clear();
}
