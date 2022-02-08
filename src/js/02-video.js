import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function(event) {
    const currentTime = event.seconds
    localStorage.setItem('videoplayer-current-time', currentTime)
}, 1000))

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));