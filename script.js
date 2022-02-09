// 1. Making an external script file --> Done 

// 2. Making all h2 colors lightblue
const headings = document.getElementsByTagName('h2');
for (const heading of headings) {
    heading.style.color = 'lightblue';
}


//3. Setting all background colors of bagpack section tomato
const bagPack = document.getElementById('bagpack');
bagPack.style.backgroundColor = 'tomato';


//4 .Setting border radius 30px to all the cards
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.setProperty('border-radius', '30px', 'important');
}

//5. Adding a console log event in a button
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function() {
    console.log('search button is working');
})


// 6. Clicking on buy now button makes it disappear
const buyNow = document.querySelectorAll('#buy-now');
for (const btn of buyNow) {
    btn.addEventListener('click', function() {
        btn.style.display = 'none';
    })
}

// 7. Submit button activation
const submitBtn = document.getElementById('button-addon2');
const inputTxt = document.getElementById('email');
inputTxt.addEventListener('keyup', function(element) {
    if (element.target.value == 'email') {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
})

// 8. Image change on mouseenter
const pics = document.querySelectorAll('.card-img-top');
for (const pic of pics) {
    const oldSrc = pic.src;
    pic.addEventListener('mouseenter', function() {
        pic.src = 'images/bags/monkeycartoon.jpg';
    })
    pic.addEventListener('mouseleave', function() {
        pic.src = oldSrc;
    })
}

// 9. Changing the background color of stay-in-touch section
const stayTouch = document.querySelector('#stay-in-touch');
stayTouch.addEventListener('dblclick', function() {
    stayTouch.style.backgroundColor = 'lightgreen';

})
stayTouch.addEventListener('mouseout', function() {
    stayTouch.style.backgroundColor = '#feeae9';
})