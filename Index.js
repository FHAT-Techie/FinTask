let menuBar = document.querySelector(`.fa-bars`);
let sideBar = document.querySelector(`.mobileHeader`);
let mediaQuery = window.matchMedia("(max-width: 1120px)");
let sideBarCancel = document.querySelector(`.fa-xmark`);

// sideBar
menuBar.addEventListener(`click`, () => {
  if (mediaQuery.matches) {
    // Only toggle if screen width is less than 1120px
    if (sideBar.style.display === `flex`) {
      sideBar.style.display = `none`;
    } else {
      sideBar.style.display = `flex`;
    }
  }
});

sideBarCancel.addEventListener(`click`, () => {
  if (mediaQuery.matches) {
    // Only hide the sidebar if the screen width is less than 1120px
    sideBar.style.display = `none`;
  }
});

// weather Scroll
function weatherScroll() {
  let cityOne = `Lagos`;
  let lagosDegree = document.querySelector(`.lagosDegree`);

  let cityTwo = `Accra`;
  let accraDegree = document.querySelector(`.accraDegree`);

  let apiKey = `db78b3d94a007c958c44142be214ba78`;
  let weatherURLLagos = `https://api.openweathermap.org/data/2.5/weather?q=${cityOne}&appid=${apiKey}`;

  fetch(weatherURLLagos)
    .then((response) => response.json())
    .then((weatherData) => {
      let degree = weatherData.main.temp;
      degree = Math.round(degree - 273.15);
      return degree;
    })
    .then((weatherData) => {
      lagosDegree.textContent = `${weatherData}°`;
    });

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityTwo}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      let degree = weatherData.main.temp;
      degree = Math.round(degree - 273.15);
      return degree;
    })
    .then((weatherData) => {
      accraDegree.textContent = `${weatherData}°`;
    });

  let citythree = `London`;
  let londonDegree = document.querySelector(`.londonDegree`);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${citythree}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      let degree = weatherData.main.temp;
      degree = Math.round(degree - 273.15);
      return degree;
    })
    .then((weatherData) => {
      londonDegree.textContent = `${weatherData}°`;
    });


    let cityfour = `paris`
    let parisDegree = document.querySelector(`.parisDegree`) 
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityfour}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((weatherData) => {
          let degree = weatherData.main.temp;
          degree = Math.round(degree - 273.15);
          return degree;
        })
        .then((weatherData) => {
            console.log(weatherData)
          parisDegree.textContent = `${weatherData}°`;
        });

        let cityfive = `new york`
        let newyorkDegree = document.querySelector(`.newyorkDegree`)
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityfive}&appid=${apiKey}`
          )
            .then((response) => response.json())
            .then((weatherData) => {
              let degree = weatherData.main.temp;
              degree = Math.round(degree - 273.15);
              return degree;
            })
            .then((weatherData) => {
              newyorkDegree.textContent = `${weatherData}°`;
            });

            let citysix = `manchester`
            let manchesterDegree = document.querySelector(`.manchesterDegree`)
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${citysix}&appid=${apiKey}`
              )
                .then((response) => response.json())
                .then((weatherData) => {
                  let degree = weatherData.main.temp;
                  degree = Math.round(degree - 273.15);
                  return degree;
                })
                .then((weatherData) => {
                  manchesterDegree.textContent = `${weatherData}°`;
                });

                let citySeven = `dakar`
                let dakerDegree = document.querySelector(`.dakarDegree`)
                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${citySeven}&appid=${apiKey}`
                  )
                    .then((response) => response.json())
                    .then((weatherData) => {
                      let degree = weatherData.main.temp;
                      degree = Math.round(degree - 273.15);
                      return degree;
                    })
                    .then((weatherData) => {
                      dakerDegree.textContent = `${weatherData}°`;
                    });

                    let cityeight =`abuja`
                    let abujaDegree = document.querySelector(`.abujaDegree`)
                    fetch(
                        `https://api.openweathermap.org/data/2.5/weather?q=${cityeight}&appid=${apiKey}`
                      )
                        .then((response) => response.json())
                        .then((weatherData) => {
                          let degree = weatherData.main.temp;
                          degree = Math.round(degree - 273.15);
                          return degree;
                        })
                        .then((weatherData) => {
                          abujaDegree.textContent = `${weatherData}°`;
                        });

                        let citynine = `madrid`
                        let madridDegree = document.querySelector(`.madridDegree`)
                        fetch(
                            `https://api.openweathermap.org/data/2.5/weather?q=${citynine}&appid=${apiKey}`
                          )
                            .then((response) => response.json())
                            .then((weatherData) => {
                              let degree = weatherData.main.temp;
                              degree = Math.round(degree - 273.15);
                              return degree;
                            })
                            .then((weatherData) => {
                              madridDegree.textContent = `${weatherData}°`;
                            });




    

}

weatherScroll();
