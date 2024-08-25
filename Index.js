let menuBar = document.querySelector(`.fa-bars`);
let sideBar = document.querySelector(`.mobileHeader`);
let mediaQuery = window.matchMedia("(max-width: 1120px)");
let calculatorBTN = document.querySelector(`.calBTN`);
let calculatorOverlay = document.querySelector(`.calculatorSection`);
let cancelCalOverlay = document.querySelector(`#cancelOverlay`);
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

      let weatherI = document.createElement(`i`);
      let degreeBox = document.querySelector(`.degree`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBox.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBox.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBox.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBox.append(weatherI);
      }
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
      let weatherI = document.createElement(`i`);
      let degreeBoxtwo = document.querySelector(`.degreebox2`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBoxtwo.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBoxtwo.append(weatherI);
      }
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
      let weatherI = document.createElement(`i`);
      let degreeBoxtwo = document.querySelector(`.degreebox3`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBoxtwo.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBoxtwo.append(weatherI);
      }
    });

  let cityfour = `paris`;
  let parisDegree = document.querySelector(`.parisDegree`);
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
      parisDegree.textContent = `${weatherData}°`;
      let weatherI = document.createElement(`i`);
      let degreeBoxtwo = document.querySelector(`.degreebox4`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBoxtwo.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBoxtwo.append(weatherI);
      }
    });

  let cityfive = `new york`;
  let newyorkDegree = document.querySelector(`.newyorkDegree`);
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
      let weatherI = document.createElement(`i`);
      let degreeBoxtwo = document.querySelector(`.degreebox5`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBoxtwo.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBoxtwo.append(weatherI);
      }
    });

  let citysix = `manchester`;
  let manchesterDegree = document.querySelector(`.manchesterDegree`);
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
      let weatherI = document.createElement(`i`);
      let degreeBoxtwo = document.querySelector(`.degreebox6`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBoxtwo.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBoxtwo.append(weatherI);
      }
    });

  let citySeven = `dakar`;
  let dakerDegree = document.querySelector(`.dakarDegree`);
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
      let weatherI = document.createElement(`i`);
      let degreeBoxtwo = document.querySelector(`.degreebox7`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBoxtwo.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBoxtwo.append(weatherI);
      }
    });

  let cityeight = `abuja`;
  let abujaDegree = document.querySelector(`.abujaDegree`);
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
      let weatherI = document.createElement(`i`);
      let degreeBoxtwo = document.querySelector(`.degreebox8`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBoxtwo.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBoxtwo.append(weatherI);
      }
    });

  let citynine = `madrid`;
  let madridDegree = document.querySelector(`.madridDegree`);
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
      let weatherI = document.createElement(`i`);
      let degreeBoxtwo = document.querySelector(`.degreebox9`);
      if (weatherData <= 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-snowflake`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 20 && weatherData > 5) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-rain`);
        degreeBoxtwo.append(weatherI);
      } else if (weatherData <= 25 && weatherData > 10) {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-cloud-sun`);
        degreeBoxtwo.append(weatherI);
      } else {
        weatherI.classList.add(`fa-solid`);
        weatherI.classList.add(`fa-sun`);
        degreeBoxtwo.append(weatherI);
      }
    });
}

weatherScroll();

// Calculator

function calculator() {
  calculatorBTN.addEventListener(`click`, function showCalculator() {
    calculatorOverlay.style.display = `flex`;
  });

  cancelCalOverlay.addEventListener(`click`, function cancelCalOverlay() {
    calculatorOverlay.style.display = `none`;
  });

  let calDisplay = document.querySelector(`.calInput`);
  let clearCalDisplay = document.querySelector(`#clearCal`);
  let plusCal = document.querySelector(`#plusBTN`);
  let divideCal = document.querySelector(`#divideCal`);
  let minusCal = document.querySelector(`#minusCal`);
  let malCal = document.querySelector(`#mulCal`);
  let perCal = document.querySelector(`#perCal`);
  let delCal = document.querySelector(`#delCal`);
  let equals = document.querySelector(`.equal`);

  equals.addEventListener("click", (event) => {
    event.preventDefault();
    try {
      // Use eval to evaluate the expression
      calDisplay.value = eval(calDisplay.value);
    } catch (error) {
      // If the expression is invalid, show an error
      calDisplay.value = "Error";
    }
  });

  const calBTNS = document.querySelectorAll(".priBTN");

  delCal.addEventListener("click", (event) => {
    event.preventDefault();
    // Get the current value of the display
    let displayString = calDisplay.value;

    // Remove the last character
    calDisplay.value = displayString.slice(0, -1);
  });

  calBTNS.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      calDisplay.value += button.value;
    });
  });

  clearCalDisplay.addEventListener(`click`, (event) => {
    event.preventDefault();
    calDisplay.value = ``;
  });

  plusCal.addEventListener(`click`, (event) => {
    event.preventDefault();
    calDisplay.value += plusCal.value;
  });
  divideCal.addEventListener(`click`, (event) => {
    event.preventDefault();
    calDisplay.value += divideCal.value;
  });
  minusCal.addEventListener(`click`, (event) => {
    event.preventDefault();
    calDisplay.value += minusCal.value;
  });
  malCal.addEventListener(`click`, (event) => {
    event.preventDefault();
    calDisplay.value += malCal.value;
  });
  perCal.addEventListener(`click`, (event) => {
    event.preventDefault();
    calDisplay.value += perCal.value;
  });
}

calculator();
