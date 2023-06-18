import Player from '@vimeo/player';
import { __esModule } from 'simplelightbox';
import throttle  from "lodash.throttle";


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const localStorageSet = ({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', `${seconds}`)
}   

player.on('timeupdate', throttle(localStorageSet, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(currentTime).then(function (seconds) {
    console.log(`${seconds}`)
})