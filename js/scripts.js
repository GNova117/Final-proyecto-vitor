/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // --- SECCIÓN DEL MAPA (Leaflet) ---
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        var map = L.map('map').setView([61.2, 7.1], 6); // Norway fjords region

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Major Norwegian fjords
        L.marker([60.8720, 6.6958]).addTo(map)
            .bindPopup('<b>Sognefjord</b><br>The longest fjord in Norway (205 km)');

        L.marker([60.3892, 5.3317]).addTo(map)
            .bindPopup('<b>Hardangerfjord</b><br>Known as the "Queen of Fjords"');

        L.marker([62.1500, 7.0833]).addTo(map)
            .bindPopup('<b>Geirangerfjord</b><br>UNESCO World Heritage Site');

        L.marker([61.0500, 6.5500]).addTo(map)
            .bindPopup('<b>Nærøyfjord</b><br>UNESCO World Heritage Site — narrowest fjord');

        setTimeout(function() {
            map.invalidateSize();
        }, 500);
    }

}); // Cierre del window.addEventListener('DOMContentLoaded', ...)