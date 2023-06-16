document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const ibuInfo = document.querySelector('.ibu')
    const srmInfo = document.querySelector('.srm')
    const aLevel = document.querySelector('.aLevel')
    const foodMatch = document.querySelector('.food-match')
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
                const foodParing = data[0].food_pairing
                const image = data[0].image_url


                randomBeer.innerHTML = name
                descriptionDisplay.innerHTML = description
                ibuInfo.innerHTML = ibu
                srmInfo.innerHTML = srm
                aLevel.innerHTML = attenuationLevel
                foodMatch.innerHTML = foodParing

                changeBackgroundColor(srm);

                src.setAttribute("src", image);



            });


    }

    startBtn.addEventListener('click', getData);

    function changeBackgroundColor(srmValue) {
        console.log("changeBackgroundColor called with srmValue:", srmValue);

        let color = "";
        let textColor = "";

        if (srmValue < 5) {
            color = "lightyellow";
        } else if (srmValue >= 5 && srmValue < 10) {
            color = "gold";
        } else if (srmValue >= 10 && srmValue < 15) {
            color = "amber";
        } else if (srmValue >= 15 && srmValue < 20) {
            color = "darkOrange";
        } else if (srmValue >= 20 && srmValue < 25) {
            color = "brown";
        } else if (srmValue >= 25 && srmValue <= 30) {
            color = "darkbrown";
        } else {
            color = "black";
            textColor = "white";
        }

        document.body.setAttribute("style", `background-color: ${color} !important`);
        document.body.style.color = textColor;
    }

    let inputElement = document.querySelector("#srm-input")

    inputElement.addEventListener("input", () => {
        let srmValue = inputElement.value;
        console.log(changeBackgroundColor(srmValue));


    });




})