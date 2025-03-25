const entry = document.getElementById('entry');
const submit = document.getElementById('submit');
const banner = document.getElementById('banner');
let age;

submit.onclick = function () {
    age = Number(entry.value);


    if (age >= 85) {
        banner.textContent = `Too Old to Drink! 🤷🏾`;
    }
    else if (age <= 0) {
        banner.textContent = `You're not even born! 😭`
    }
    else if (age < 21) {
        banner.textContent = `You are too young to drink! 🛑`
    }
    else {
        banner.textContent = `Let's Party 🎉🍾`
    }
}
