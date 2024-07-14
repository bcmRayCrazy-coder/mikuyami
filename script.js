const mainAnimElement = document.querySelector('#main_anim');

var anim = bodymovin.loadAnimation({
    container: mainAnimElement, // Required
    path: 'lottie/data.json',
    renderer: 'svg/canvas/html', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: 'Hello World', // Name for future reference. Optional.
});
