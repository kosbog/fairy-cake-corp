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

export const menuBookAnimation = () => {
    let menuBook = document.getElementsByClassName('menu-book')[0],
        page = document.getElementsByClassName('menu-book-page'),
        checkClass = 'page-opacity',
        menuBookPages = [];

    menuBookPages = [...page];

    // Page opacity animation
    // 
    for (let item of menuBookPages) {
        if (!item.classList.contains(checkClass)) {
            setTimeout(function() {
                item.style.display = "none";
            }, 1000);
            item.classList.add(checkClass);
            break;
            // TODO: cerate promise ???
        }
    }

    // Full book animation
    // 
    // let wasMoved = false;
    // menuBook.classList.add('menu-book-position');
    // wasMoved = true;
    // if (wasMoved) {
    //     for (let item of menuBookPages) {
    //         let temporaryPage = item;
    //         if (!temporaryPage.classList.contains('page-flip')) {
    //             setTimeout(function() {
    //                 temporaryPage.style.zIndex = "0";
    //             }, 1000);
    //             temporaryPage.classList.add('page-flip');
    //             break;
    //         }
    //     }
    // }
}
