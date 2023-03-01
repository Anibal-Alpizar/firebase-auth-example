console.log('signup form loaded')

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const passowrd = signupForm['signup-password'].value

    console.log(email, passowrd);
})