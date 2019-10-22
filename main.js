// PWA
var deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log({deferredPrompt});
    
});

var install = document.querySelector('.install');
install.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    install.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
            } else {
            console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
});



// Logic
var status = 0;
var airhorn = document.querySelector('.airhorn');
var promise = airhorn.play();

if (promise !== undefined) {
    promise.then(_ => {
        // Autoplay started!
    }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
        document.querySelector('.start').innerHTML = ''; // maybe play button
        airhorn.play();
    });
}



function checkTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var body = document.querySelector('body');
    var title = document.querySelector('.title');
    var desc = document.querySelector('.desc');
    var clock = document.querySelector('.clock');
    var oldStatus = status;
    clock.innerHTML = hours + ':' + minutes;

    if (hours === 11 && minutes === 11) {
        body.className = 'warning';
        title.innerHTML = '11:11';
        desc.innerHTML = '';
        status = -1;
    } else if (hours < 9 || (hours === 9 && minutes <= 30)) {
        //early!
        body.className = 'early';
        title.innerHTML = 'Early bird';
        desc.innerHTML = '';
        status = 0;
    } else if (hours === 9) {
        // email / social / pr
        body.className = 'emails';
        title.innerHTML = 'Setup';
        desc.innerHTML = 'Emails, ASANA, setup for the day';
        status = 1;
    } else if (hours === 10) {
        // email / social / pr
        body.className = 'emails';
        title.innerHTML = 'PR '
        desc.innerHTML = 'Social / PR work for sales funnel';
        status = 2;
    } else if (hours >= 11 && hours < 15) {
        // client work
        body.className = 'projects';
        title.innerHTML = 'Project work';
        desc.innerHTML = 'Project/client work';
        status = 3;
    } else if (hours === 15 && minutes <= 30) {
        // client work
        body.className = 'emails';
        title.innerHTML = 'Emails';
        desc.innerHTML = 'Afternoon email catchup';
        status = 4;
    } else if (hours >= 15 && hours < 19) {
        // client work
        body.className = 'projects';
        title.innerHTML = 'Project work';
        desc.innerHTML = 'Project/client work';
        status = 5;
    } else {
        body.className = 'early';
        title.innerHTML = 'END';
        desc.innerHTML = '';
        status = 6;
    }
    if (oldStatus !== status) {
        // AIRHORN
        airhorn.play();

    }
}
checkTime();
airhorn.play();
setInterval(checkTime, 60000);

// 9.30 - 10 setup, asana, emails
// 10 - 11, social PR