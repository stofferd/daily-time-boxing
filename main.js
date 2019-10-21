setInterval(function(){ 
    var date = new Date();
    var hours = date.getHours();
    var body = document.querySelector('body');
    var title = document.querySelector('.title');

//     console.log(date);

// console.log(date.getHours());
// console.log(date.getMinutes());

console.log('running');

if (hours < 7) {
    //early!
    body.className = 'early';
    title.innerHTML = 'Early bird'
} else if (hours >= 7 && hours < 11) {
    // email / social / pr
    body.className = 'emails';
    title.innerHTML = 'Emails / Social / PR'
} else if (hours >= 11) {
    // client work
    body.className = 'projects';
    title.innerHTML = 'Project work'
}

}, 2000);
