function explain_callback(name, age, task) {
    console.log('Hello ', name);
    console.log('your age ', age);
    task();
}

function washHand() {
    console.log('wa h hand with soap');
}
function takeShower() {
    console.log('Take shower');
}
function scrollFacebook() {
    console.log('Scroll facebook but do not like any post');
}

explain_callback('Sogir Uddin', 17, washHand);
explain_callback('jogir Uddin', 13, takeShower);
explain_callback('Mugir Uddin', 21, scrollFacebook);