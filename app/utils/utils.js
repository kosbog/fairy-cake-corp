// help functions here
export const parallaxScroll = () => {
    const elementsArr = document.getElementsByClassName('parallax'),
        yPos = -(window.pageYOffset / 9),
        position = 'center ' + yPos + 'px';

    [...elementsArr].forEach(function(element) {
        element.style.backgroundPosition = position;
    });
};

export const scrollToTop = () => {
    let scrollStep = -window.scrollY / (1000 / 45),
        scrollInterval = setInterval(function() {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
}

export const showScrollTopButton = () => {
    let scrollButton = document.getElementsByClassName('scroll-top-button')[0],
        showClass = 'show',
        scrollPosY = window.scrollY;

    scrollPosY > 1000 ?
        scrollButton.classList.add(showClass) :
        scrollButton.classList.remove(showClass);
}

// Page opacity animation
// 
export const menuBookAnimation = () => {
    let menuBook = document.getElementsByClassName('menu-book')[0],
        page = document.getElementsByClassName('menu-book-page'),
        checkClass = 'page-opacity',
        lastPageClass = 'last-page',
        menuBookPages = [];

    menuBookPages = [...page];

    for(let i = 0; i < menuBookPages.length-1; i++) {
        let item = menuBookPages[i];
        if (!item.classList.contains(checkClass)) {
            setTimeout(function() {
                item.style.display = "none";
            }, 1000);
            item.classList.add(checkClass);
            return false;
            // TODO: cerate promise ???
        }
    };
}

export const stickyNavigation = () => {
    let navigation = document.getElementsByTagName('nav')[0],
        pageYOffset = window.pageYOffset,
        classSticky = 'sticky',
        staticPos = 52;

    pageYOffset > 52 ?
        navigation.classList.add(classSticky) :
        navigation.classList.remove(classSticky);
}

