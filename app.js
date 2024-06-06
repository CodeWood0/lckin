document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const allVideos = [
        'shit my pants like crazy.mp4',
        'until the breaks give out, lets ride people.mp4',
        'whoever lives the truth comes ot the light.mp4',
        'Come after Me.mp4',
        'I_m not an influencer.mp4',
        'running on fumes - lets get it locked in today.mp4',
        'haven_t been feeling myself today.mp4',
        'when opportunity knocks - friday.mp4',
        'sleep in at least 1 day a week.mp4',
        'back on the regular train, ready to get after it.mp4',
        'I like my 9-5 job.mp4',
        'Became an overnight sensation through hardwork.mp4',
        'hammered weights on a saturday.mp4',
        'competative world .mp4',
        'Locked in for greatness today.mp4',
        'absolute characters out here.mp4',
        'apologise to absolutely nobody.mp4',
        'We need the communitys help.mp4',
        'Yo - We are absolutely locked in!.mp4',
        '12 hours of sleep time to rip again.mp4',
        'Crushed 5 burritos.mp4',
        'amost monday people.mp4',
        'Best fit in america - prove me wrong.mp4',
        'who are you inspiring.mp4',
        'never cared about social media - pump algo.mp4',
        'Fun Work day.mp4',
        'favourite hobbies - working out and studying.mp4',
        'I_m still hungry.mp4',
        'got to make the most of every day.mp4',
        'locked in to the absolute max.mp4',
        'havy hitters watch out.mp4',
        'When that alarm clock goes off.mp4',
        'nerves through the roof this week.mp4',
        'Be respectfull of everyone else .mp4',
        'Im not locked in, SIYC.mp4',
        'make sure you_re right then go ahead.mp4',
        'Diversifying my business persuits.mp4',
        'heavy hitters about to be shaking in their boots.mp4',
        'you will not catch me slacking today.mp4',
        'Overnight Sensation.mp4',
        'fridays are for the heaby hitters.mp4',
        'Thank you for your sacrifice.mp4',
        'Sunday lock in .mp4',
        'Music intro.mp4',
        'I_m not selling out.mp4',
        'The US is the greates country on earth.mp4',
        'the hate fuels me.mp4',
        'share your opinions - greatest country on earth.mp4',
        'just a normal dude getting after it - long week.mp4',
        'difficulty getting workouts in.mp4',
        'sunday positive vibes.mp4',
        'still sick as a dog on this friday.mp4',
        'keep pumping the content.mp4',
        'it_s all about going after it every day.mp4',
        'gunna need a big second half of the day.mp4',
        'The heavy hitters haven_t seen a rise this fast.mp4',
        'hauling it through a downpour today.mp4',
        'Ispire america.mp4',
        'never know what day will be your last.mp4',
        'dailed in.mp4',
        'chef_ed up a bowl of bison.mp4',
        'they aren_t ready - we are coming.mp4',
        'time to lock back in.mp4',
        'Change is hard.mp4',
        'riser morning workout.mp4',
        'young people work on sundays.mp4',
        'Absolutely locked in!.mp4',
        'who_s getting after it on a friday afternoon.mp4',
        'rabble rousers fired up .mp4',
        'riser mode.mp4',
        'make fun of me - america.mp4',
        'Nvidia can_t keep up.mp4',
        'lcoked in working from home.mp4',
        'Carry the American Economy.mp4',
        'help others core values.mp4',
        'hird better chirps at the duck pond.mp4',
        'you don_t go where the puck is.mp4',
        'I_m tired but time to lock in - monday.mp4',
        'I will be starting a company.mp4',
        'its 12am on monday morining.mp4',
        '9 to 5 job, no sunday scaries.mp4',
        'everyone has a purpose.mp4',
        'Ok, it_s a set back.mp4',
        'We are absolutely locked in!.mp4',
        'gotta be responsible - friday night.mp4',
        'ready to rip - monday morning .mp4',
        'some men cant be bought.mp4'
    ];

    // Select 5 random videos
    const selectedVideos = [];
    while (selectedVideos.length < 5) {
        const randomIndex = Math.floor(Math.random() * allVideos.length);
        const selectedVideo = allVideos[randomIndex];
        if (!selectedVideos.includes(selectedVideo)) {
            selectedVideos.push(selectedVideo);
        }
    }

    const gridSize = 200;
    const margin = 50;
    const placedPositions = [];

    function checkOverlap(top, left) {
        for (const pos of placedPositions) {
            if (Math.abs(pos.top - top) < gridSize && Math.abs(pos.left - left) < gridSize) {
                return true;
            }
        }
        return false;
    }

    selectedVideos.forEach((video, index) => {
        const videoElem = document.createElement('video');
        videoElem.src = `./videos/${video}`;
        videoElem.style.position = 'absolute';
        videoElem.style.width = '200px';
        videoElem.style.height = '200px';
        videoElem.style.opacity = '0';
        videoElem.style.transition = 'opacity 1s';

        let placed = false;
        while (!placed) {
            const top = Math.floor(Math.random() * ((window.innerHeight - margin - gridSize) / gridSize)) * gridSize + margin;
            const left = Math.floor(Math.random() * ((window.innerWidth - margin - gridSize) / gridSize)) * gridSize + margin;
            if (!checkOverlap(top, left)) {
                videoElem.style.top = `${top}px`;
                videoElem.style.left = `${left}px`;
                placedPositions.push({ top, left });
                placed = true;
            }
        }

        videoElem.addEventListener('mouseover', () => videoElem.play());
        videoElem.addEventListener('mouseout', () => videoElem.pause());

        videoContainer.appendChild(videoElem);

        // Fade in effect
        setTimeout(() => {
            videoElem.style.opacity = '1';
        }, 100);
    });

    // Add animation to meme text
    const memeTexts = document.querySelectorAll('.meme-text');
    memeTexts.forEach(text => {
        const animations = ['moveLeftToRight', 'moveRightToLeft', 'moveTopToBottom', 'moveBottomToTop', 'moveDiagonal'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        const randomSpeed = Math.random() * 5 + 5;
        text.style.animation = `${randomAnimation} ${randomSpeed}s linear infinite`;
        text.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    });
});
