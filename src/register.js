const register = (swUrl, config) => {
    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.register('/pokedex-serviceworker.js');
    // }
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register(('/pokedex-serviceworker.js'));
            console.log("registered")
        });
    }

};

export default register;