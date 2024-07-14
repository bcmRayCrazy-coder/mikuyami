const mainAnimElement = document.querySelector('#main_anim');

var anim = bodymovin.loadAnimation({
    container: mainAnimElement,
    path: 'lottie/data.json',
    renderer: 'svg/canvas/html',
    loop: false,
    autoplay: false,
    name: 'test',
});

let frameTotal = 18;

document.addEventListener('mousemove', (ev) => {
    const clientWidth = document.body.clientWidth;
    const time = ((ev.clientX - clientWidth / 4) / clientWidth) * 2;
    if (time < 0 || time > 1) return;
    anim.goToAndStop(Math.round(frameTotal * time), true);
});
