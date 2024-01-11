var index = 1;
var heroId;
var prevHero;

var uName;
var uEmail;
var uQuestion;
var uComment;
var warning;

var subTotal = 0;
var counter = 0;

function changeHero(){//change hero img
    document.getElementById('hiddenImg').style.opacity = 0;
    heroId = 'hero' + index;
    document.getElementById(heroId).style.opacity = 0;
    if (index === 4){
        index = 1;
    }
    else {
        index++;
    }
    heroId = 'hero' + index;
    document.getElementById(heroId).style.opacity = 1;

}

if (window.location.pathname.includes('/index.html')){ //if index.html is being viewed
    setInterval(changeHero, 3000); //perform changeHero every 3 secs
}

function formSubmit(){ //form validation
    warning = "";
    document.getElementById('warning').innerHTML = ""
    uName = document.getElementById('uName');
    uEmail = document.getElementById('uEmail');
    uQuestion = document.getElementById('uQuestion');
    uComment = document.getElementById('uComment');
    if(document.getElementById('uName').value === ''){ //If no name is entered
        warning += '[Please enter your name] ';
        document.getElementById('warning').innerHTML = warning;
        uName.style.borderColor = 'red';
    }
    else{
        uName.style.borderColor = 'green';
    }

    if(document.getElementById('uEmail').value === '' || document.getElementById('uEmail').value.includes('@') === false || document.getElementById('uEmail').value.includes('.com') === false){ //if email is entered incorrectly
        warning += '[Please enter a valid email] ';
        document.getElementById('warning').innerHTML = warning;
        uEmail.style.borderColor = 'red';
    }
    else{
        uEmail.style.borderColor = 'green';
    }

    if(document.getElementById('uQuestion').value === '' && document.getElementById('uComment').value === ''){
        warning += '[Please enter a question or comment] ';
        document.getElementById('warning').innerHTML = warning;
        uQuestion.style.borderColor = 'orange';
        uComment.style.borderColor = 'orange';
    }
    else{
        uQuestion.style.borderColor = 'green';
        uComment.style.borderColor = 'green';
    }

    if(warning === ""){
        console.log('submit');
        document.getElementById('warning').innerHTML = "";
        document.getElementById('submission').textContent=(`Successfully Submitted: Name: ${uName.value}, Email: ${uEmail.value}, Question: ${uQuestion.value}, Comment: ${uComment.value}`);
        showSubmit();
        setTimeout(hideSubmit, 3000);
    }
}

function showSubmit(){ //Show User Submission
    document.getElementById('submission').style.zIndex ='1';
    document.getElementById('submission').style.width ='80%';
}

function hideSubmit(){ //Hides User Submission
    document.getElementById('submission').style.zIndex ='-1';
    document.getElementById('submission').style.width ='0%';
}

function addToCart(item, price){ //Adds items to cart
    console.log(item+' has been added to cart');
    // alert('Added to shopping cart.');
    let docCart = document.getElementById('cart');
    let newItem = document.createElement('p');
    newItem.textContent = item + " : $" +price;
    console.log(newItem);
    docCart.appendChild(newItem);
    subTotal += price;
    document.getElementById('subTotal').textContent = 'Subtotal: $'+ subTotal;
    showCartAdd();
    setTimeout(hideCartAdd, 2000);
}

function showCartAdd(){ //Show pop-up for adding item to cart
    document.getElementById('addToCart').style.zIndex ='1';
    document.getElementById('addToCart').style.width ='80%';
}

function hideCartAdd(){ //Hide pop-up
    document.getElementById('addToCart').style.zIndex ='-1';
    document.getElementById('addToCart').style.width ='0%';
}

function showCart(){ //shows or hides cart
    console.log('show')
    if(counter%2 === 0){
        document.getElementById('cart').style.zIndex ='1';
        document.getElementById('cart').style.width ='80%';
        counter++
    }
    else if(counter%2 === 1){
        document.getElementById('cart').style.zIndex =-'1';
        document.getElementById('cart').style.width ='0%';
        counter++
    }
}
