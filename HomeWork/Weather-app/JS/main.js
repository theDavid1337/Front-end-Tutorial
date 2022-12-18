window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        })

        const api = ''

    } else {
        h1.textContent = `Hey this is not working because you didn't allowed GeoLoacation, please refresh page and Enable GeoLoacation.`
    }
})