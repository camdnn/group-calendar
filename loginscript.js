const container = document.querySelector('.container');
const resgisterBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
//selects elements from the html doc and assigns them to js vars
//allows them to be manipulated with js


//makes the button responsive to a click event, when it is clicked
//the arrow funct is inside will run
resgisterBtn.addEventListener('click', () => {
    container.classList.add('active'); //when clicked, the container will become active (by adding the active element to the class)
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active'); //when clicked, the container will  deactivate (by remocing the active element to the class)
})
