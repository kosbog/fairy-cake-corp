// help functions here
export const parallaxScroll = () => {
    addEventListener('scroll', function() {
        const elem = document.getElementsByClassName('cakes')[0],
            yPos = -(window.pageYOffset / 8),
            coords = 'center ' + yPos + 'px';

        elem.style.backgroundPosition = coords;
    });
};