import { quotes, allVideos } from './lists.js';

document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const playButton = document.getElementById('play-button');
    const overlay = document.getElementById('overlay');
    const chevronContainer = document.getElementById('chevron-container');
    const memesSection = document.getElementById('memes-section');

    // Randomize background class
    const backgrounds = ['bg1', 'bg2', 'bg3'];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.documentElement.classList.add(randomBg);

    // Select 5 random videos
    const selectedVideos = [];
    while (selectedVideos.length < 5) {
        const randomIndex = Math.floor(Math.random() * allVideos.length);
        const selectedVideo = allVideos[randomIndex];
        if (!selectedVideos.includes(selectedVideo)) {
            selectedVideos.push(selectedVideo);
        }
    }

    // Standard positions for the 5-dice layout
    const positions = [
        { top: '20%', left: '20%' },
        { top: '20%', left: '60%' },
        { top: '50%', left: '40%' },
        { top: '80%', left: '20%' },
        { top: '80%', left: '60%' }
    ];

    selectedVideos.forEach((video, index) => {
        const videoElem = document.createElement('video');
        videoElem.src = `./videos/${video}`;
        videoElem.style.position = 'absolute';
        videoElem.style.width = '275px';
        videoElem.style.height = '275px';
        videoElem.style.opacity = '0';
        videoElem.style.transition = 'opacity 1s';

        // Position the video
        videoElem.style.top = positions[index].top;
        videoElem.style.left = positions[index].left;

        // Thumbnail effect
        videoElem.addEventListener('loadeddata', () => {
            videoElem.currentTime = videoElem.duration;
            videoElem.style.opacity = '1';
        });

        // Create thumbs-up and thumbs-down elements
        const thumbUp = document.createElement('div');
        thumbUp.className = 'thumb-up';
        thumbUp.innerHTML = '👍';

        const thumbDown = document.createElement('div');
        thumbDown.className = 'thumb-down';
        thumbDown.innerHTML = '👎';

        videoElem.addEventListener('mouseover', () => {
            videoElem.currentTime = 0;
            videoElem.play();
            thumbUp.style.display = 'inline';
            thumbDown.style.display = 'inline';
        });

        videoElem.addEventListener('mouseout', () => {
            videoElem.pause();
            setTimeout(() => {
                thumbUp.style.display = 'none';
                thumbDown.style.display = 'none';
            }, 1000);
        });

        thumbUp.addEventListener('click', () => {
            thumbUp.classList.add('clicked');
            setTimeout(() => {
                thumbUp.style.display = 'none';
                thumbDown.style.display = 'none';
                thumbUp.classList.remove('clicked');
            }, 1000);
        });

        thumbDown.addEventListener('click', () => {
            thumbDown.innerHTML = '🔒';
            thumbDown.classList.add('locked');
            setTimeout(() => {
                thumbDown.style.display = 'none';
                thumbUp.style.display = 'none';
                thumbDown.classList.remove('locked');
                thumbDown.innerHTML = '👎';
            }, 2000);
        });

        videoContainer.appendChild(videoElem);
        videoContainer.appendChild(thumbUp);
        videoContainer.appendChild(thumbDown);
    });

    playButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        playButton.style.display = 'none';
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('mouseover', () => video.play());
            video.addEventListener('mouseout', () => video.pause());
        });
    });

    chevronContainer.addEventListener('click', () => {
        memesSection.style.display = 'block';
        memesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Load videos into memes section
    const memesContainer = document.querySelector('.memes-container');
    const videoFiles = [
        '$LOCKEDIN (1).mp4',
        '$LOCKEDIN (2).mp4',
        '$LOCKEDIN (3).mp4',
        '$LOCKEDIN (4).mp4',
        '$LOCKEDIN (5).mp4',
        '$LOCKEDIN.mp4'
    ];

    videoFiles.forEach(file => {
        console.log(`Loading video: ${file}`);
        const videoElem = document.createElement('video');
        videoElem.src = `./videos/${file}`;
        videoElem.style.width = '300px';
        videoElem.style.height = '300px';
        videoElem.autoplay = true;
        videoElem.loop = true;
        videoElem.muted = true;
        videoElem.playsInline = true;

        videoElem.addEventListener('loadeddata', () => {
            console.log(`Loaded video: ${file}`);
        });

        videoElem.addEventListener('error', () => {
            console.error(`Error loading video: ${file}`);
        });

        memesContainer.appendChild(videoElem);
    });
});
