// help functions here
export const parallaxScroll = () => {
    addEventListener('scroll', function() {
        const elementsArr = document.getElementsByClassName('parallax'),
            yPos = -(window.pageYOffset / 9),
            position = 'center ' + yPos + 'px';

        [...elementsArr].forEach(function(element) {
            element.style.backgroundPosition = position;
        });
    });
};