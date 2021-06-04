let advantages = document.querySelectorAll('.advantage .covered-image');
let secondAdvantage = advantages[1];

function wasElementReached(el) {
    let rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function toggleAnimationForAdvantages() {
    if (wasElementReached(secondAdvantage)) {
        uncoverImages();
    } else {
        coverImages();
    }
}

function uncoverImages() {
    for (let advantage of advantages) {
        advantage.classList.remove('covered-image');
    }
}

function coverImages() {
    for (let advantage of advantages) {
        advantage.classList.add('covered-image');
    }
}

window.onload = toggleAnimationForAdvantages;
window.onresize = toggleAnimationForAdvantages;
window.onscroll = toggleAnimationForAdvantages;

document.querySelector("body").classList.remove("hidden");
