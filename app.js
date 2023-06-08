document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const ibuInfo = document.querySelector('.ibu')
    const srmInfo = document.querySelector('.srm')
    const aLevel = document.querySelector('.aLevel')
    const src = document.querySelector('.beer-img')


    function getData(e) {
        e.preventDefault()

        fetch('https://api.punkapi.com/v2/beers/random')
            .then(Response => {
                return Response.json()
            })
            .then(data => {
                console.log(data)
                const name = data[0].name
                const description = data[0].description
                    //ibu is the measure bitter
                const ibu = data[0].ibu
                    //srm Standard Reference Method (Color of beer)
                const srm = data[0].srm
                    //Attenuation is the measure of a beer’s fermentation process
                const attenuationLevel = data[0].attenuation_level
                const image = data[0].image_url

                randomBeer.innerHTML = name
                descriptionDisplay.innerHTML = description
                ibuInfo.innerHTML = ibu
                srmInfo.innerHTML = srm
                aLevel.innerHTML = attenuationLevel
                src.appendChild(image);

            })

    }

    startBtn.addEventListener('click', getData);


})