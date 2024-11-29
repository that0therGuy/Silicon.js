

let isbloom = localStorage.getItem('bloom') === "true" ;

let h6 = document.querySelector(".bloomc");
function updateH6State() {
    if (isbloom) {
        h6.style.background = 'linear-gradient(90deg, rgb(207, 255, 205) 0%, rgba(61, 255, 31, 0.8) 100%)';
        h6.innerHTML = 'True';
        h6.style.webkitBackgroundClip = 'text';
        h6.style.webkitTextFillColor = 'transparent';
    } else {
        h6.innerHTML = 'False';
        h6.style.background = 'linear-gradient(90deg, rgb(255, 205, 205) 0%, rgba(117, 0, 0, 0.8) 100%)';
        h6.style.webkitBackgroundClip = 'text';
        h6.style.webkitTextFillColor = 'transparent';
    }

}


document.querySelector('.bloom').addEventListener('click', () => {
    isbloom = !isbloom;
    localStorage.setItem('bloom', isbloom);


    updateH6State();
});


updateH6State();
