function checkTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var body = document.querySelector('body');
    var title = document.querySelector('.title');
    var desc = document.querySelector('.desc');
    var clock = document.querySelector('.clock');

    clock.innerHTML = hours + ':' + minutes;

    if (hours === 11 && minutes === 11) {
        body.className = 'warning';
        title.innerHTML = '11:11';
        desc.innerHTML = '';
    } else if (hours < 9 || (hours === 9 && minutes <= 30)) {
        //early!
        body.className = 'early';
        title.innerHTML = 'Early bird';
        desc.innerHTML = '';

    } else if (hours === 9) {
        // email / social / pr
        body.className = 'emails';
        title.innerHTML = 'Setup';
        desc.innerHTML = 'Emails, ASANA, setup for the day';
    } else if (hours === 10) {
        // email / social / pr
        body.className = 'emails';
        title.innerHTML = 'PR '
        desc.innerHTML = 'Social / PR work for sales funnel';
    } else if (hours >= 11 && hours < 15) {
        // client work
        body.className = 'projects';
        title.innerHTML = 'Project work';
        desc.innerHTML = 'Project/client work';
    } else if (hours === 15 && minutes <= 30) {
        // client work
        body.className = 'emails';
        title.innerHTML = 'Emails';
        desc.innerHTML = 'Afternoon email catchup';
    } else if (hours >= 15 && hours < 19) {
        // client work
        body.className = 'projects';
        title.innerHTML = 'Project work';
        desc.innerHTML = 'Project/client work';
    } else {
        body.className = 'early';
        title.innerHTML = 'END';
        desc.innerHTML = '';
    }
}
checkTime();
setInterval(checkTime, 60000);



// 9.30 - 10 setup, asana, emails
// 10 - 11, social PR