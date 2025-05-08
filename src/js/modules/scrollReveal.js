// ScrollReveal
import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true
});

function scrollRevealFunc() {
    ScrollReveal().reveal(`.header, .partners`, {
        origin: 'top',
        distance: '0px',
        opacity: 0,
        // scale: 3,
    });

    ScrollReveal().reveal(`.nav__list`, {
        // origin: 'top',
        // distance: '0px',
        // opacity: 0,
        scale: 5,
    });

    ScrollReveal().reveal(`.discover__desc`,
        {
            origin: 'left',
        }
    );

    ScrollReveal().reveal(`.discover__picture-img`, {
        origin: 'right',
    });

    ScrollReveal().reveal(`.discover__picture-scroll`, {
        origin: 'bottom'
    });
}

export default scrollRevealFunc;
