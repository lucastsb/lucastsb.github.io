const signUpButton = document.getElementById('signUp');
const signInButton1 = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton1.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});