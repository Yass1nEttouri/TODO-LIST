// module to handle router

export function navigateTo(route) {
    window.history.pushState({}, '', route);
    /* handleRoute(); */
}
function handleRoute() {
    const path = window.location.pathname;
    const contentDiv = document.querySelector('#content');

    if (path === '/home') {
        contentDiv.innerHTML = '<h1>Home</h1>';
    } else if (path === '/about') {
        contentDiv.innerHTML = '<h1>About Us</h1>';
    } else {
        contentDiv.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
}
window.addEventListener('popstate', handleRoute);