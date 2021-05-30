let advantages = document.querySelectorAll('.advantage .close-image');

window.onscroll = function () {
    for (let advantage of advantages) {
        if (window.pageYOffset > 200) {
            advantage.classList.remove('close-image');
        } else {
            advantage.classList.add('close-image');
        }
    }
};


function adjustHeaderWidth() {
    let body = document.querySelector("body");

    let parentWidth = body.offsetWidth;

    let headerWidth = parentWidth - 2 * getBorderWidth(body);
    document.querySelector("header").style.width = `${headerWidth}px`;
}

function getBorderWidth(element) {
    let borderWidthFromCss = window.getComputedStyle(element).borderWidth;
    return Number.parseInt(borderWidthFromCss);
}

function setMarginForMain() {
    let header = document.querySelector("header");
    document.querySelector("main").style.marginTop = window.getComputedStyle(header).height;
}

adjustHeaderWidth();
setMarginForMain();
window.onresize = function () {
    adjustHeaderWidth();
    setMarginForMain();
}


document.querySelector("body").classList.remove("hidden");
