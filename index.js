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

// news fetch
document.addEventListener('DOMContentLoaded', function () {
  function news() {
    const apiKey = `a18b15a4-87a8-4b2b-b613-17857195bc64`;
    const searchTerm = "finance business stocks";
    const url = `https://content.guardianapis.com/search?api-key=${apiKey}&q=${searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // Top story section
        let topstoryP = document.querySelector(`.topstoryPara`);
        let articleTitle = data.response.results[0].webTitle;
        topstoryP.textContent = articleTitle;

        let link = data.response.results[0].webUrl;
        let topStoryBTN = document.querySelector(`.topStoryBTN`);
        topStoryBTN.addEventListener('click', () => {
          window.open(link, '_blank');
        });

        // Blog 1 section
        let blogcontent1 = document.querySelector(`#blogContent1`);
        let category1 = document.querySelector(`#category1`);
        let time1 = document.querySelector(`#time1`);
        let link1 = document.querySelector(`#link1`);

        if (link1) {
          blogcontent1.textContent = data.response.results[1].webTitle;
          category1.textContent = data.response.results[1].sectionName;
          let date = new Date(data.response.results[1].webPublicationDate);
          time1.textContent = date.toLocaleDateString();

          let linkUrl1 = data.response.results[1].webUrl;
          link1.addEventListener('click', () => {
            window.open(linkUrl1, '_blank');
          });
        } else {
          console.error('Button with ID "link1" not found.');
        }
        // Blog 2 section
        let blogcontent2 = document.querySelector(`#blogContent2`);
        let category2 = document.querySelector(`#category2`);
        let time2 = document.querySelector(`#time2`);
        let link2 = document.querySelector(`#link2`);

        if (link2) {
          blogcontent2.textContent = data.response.results[2].webTitle;
          category2.textContent = data.response.results[2].sectionName;
          let date2 = new Date(data.response.results[2].webPublicationDate);
          time2.textContent = date2.toLocaleDateString();

          let linkUrl2 = data.response.results[2].webUrl;
          link2.addEventListener('click', () => {
            window.open(linkUrl2, '_blank');
          });
        } else {
          console.error('Button with ID "link2" not found.');
        }
        // Blog 3 section
        let blogcontent3 = document.querySelector(`#blogContent3`);
        let category3 = document.querySelector(`#category3`);
        let time3 = document.querySelector(`#time3`);
        let link3 = document.querySelector(`#link3`);

        if (link3) {
          blogcontent3.textContent = data.response.results[3].webTitle;
          category3.textContent = data.response.results[3].sectionName;
          let date3 = new Date(data.response.results[3].webPublicationDate);
          time3.textContent = date3.toLocaleDateString();

          let linkUrl3 = data.response.results[3].webUrl;
          link3.addEventListener('click', () => {
            window.open(linkUrl3, '_blank');
          });
        } else {
          console.error('Button with ID "link3" not found.');
        }
        // Blog 4 section
        let blogcontent4 = document.querySelector(`#blogContent4`);
        let category4 = document.querySelector(`#category4`);
        let time4 = document.querySelector(`#time4`);
        let link4 = document.querySelector(`#link4`);

        if (link4) {
          blogcontent4.textContent = data.response.results[4].webTitle;
          category4.textContent = data.response.results[4].sectionName;
          let date4 = new Date(data.response.results[4].webPublicationDate);
          time4.textContent = date4.toLocaleDateString();

          let linkUrl4 = data.response.results[4].webUrl;
          link4.addEventListener('click', () => {
            window.open(linkUrl4, '_blank');
          });
        } else {
          console.error('Button with ID "link4" not found.');
        }
        // Blog 5 section
        let blogcontent5 = document.querySelector(`#blogContent5`);
        let category5 = document.querySelector(`#category5`);
        let time5 = document.querySelector(`#time5`);
        let link5 = document.querySelector(`#link5`);

        if (link5) {
          blogcontent5.textContent = data.response.results[5].webTitle;
          category5.textContent = data.response.results[5].sectionName;
          let date5 = new Date(data.response.results[5].webPublicationDate);
          time5.textContent = date5.toLocaleDateString();

          let linkUrl5 = data.response.results[5].webUrl;
          link5.addEventListener('click', () => {
            window.open(linkUrl5, '_blank');
          });
        } else {
          console.error('Button with ID "link5" not found.');
        }
        // Blog 6 section
        let blogcontent6 = document.querySelector(`#blogContent6`);
        let category6 = document.querySelector(`#category6`);
        let time6 = document.querySelector(`#time6`);
        let link6 = document.querySelector(`#link6`);

        if (link5) {
          blogcontent6.textContent = data.response.results[6].webTitle;
          category6.textContent = data.response.results[6].sectionName;
          let date6 = new Date(data.response.results[6].webPublicationDate);
          time6.textContent = date6.toLocaleDateString();

          let linkUrl6 = data.response.results[6].webUrl;
          link6.addEventListener('click', () => {
            window.open(linkUrl6, '_blank');
          });
        } else {
          console.error('Button with ID "link6" not found.');
        }
        // Blog 7 section
        let blogcontent7 = document.querySelector(`#blogContent7`);
        let category7 = document.querySelector(`#category7`);
        let time7 = document.querySelector(`#time7`);
        let link7 = document.querySelector(`#link7`);

        if (link7) {
          blogcontent7.textContent = data.response.results[7].webTitle;
          category7.textContent = data.response.results[7].sectionName;
          let date7 = new Date(data.response.results[7].webPublicationDate);
          time7.textContent = date7.toLocaleDateString();

          let linkUrl7 = data.response.results[7].webUrl;
          link7.addEventListener('click', () => {
            window.open(linkUrl7, '_blank');
          });
        } else {
          console.error('Button with ID "link7" not found.');
        }
        // Blog 8 section
        let blogcontent8 = document.querySelector(`#blogContent8`);
        let category8 = document.querySelector(`#category8`);
        let time8 = document.querySelector(`#time8`);
        let link8 = document.querySelector(`#link8`);

        if (link8) {
          blogcontent8.textContent = data.response.results[8].webTitle;
          category8.textContent = data.response.results[8].sectionName;
          let date8 = new Date(data.response.results[8].webPublicationDate);
          time8.textContent = date8.toLocaleDateString();

          let linkUrl8 = data.response.results[8].webUrl;
          link8.addEventListener('click', () => {
            window.open(linkUrl8, '_blank');
          });
        } else {
          console.error('Button with ID "link8" not found.');
        }
        // Blog 9 section
        let blogcontent9 = document.querySelector(`#blogContent9`);
        let category9 = document.querySelector(`#category9`);
        let time9 = document.querySelector(`#time9`);
        let link9 = document.querySelector(`#link9`);

        if (link9) {
          blogcontent9.textContent = data.response.results[9].webTitle;
          category9.textContent = data.response.results[9].sectionName;
          let date9 = new Date(data.response.results[9].webPublicationDate);
          time9.textContent = date9.toLocaleDateString();

          let linkUrl9 = data.response.results[9].webUrl;
          link9.addEventListener('click', () => {
            window.open(linkUrl9, '_blank');
          });
        } else {
          console.error('Button with ID "link9" not found.');
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }

  news(); // Call the news function after DOM is fully loaded
});



function weatherPage() {
  const weatherResultCon = document.querySelector(`.weatherResultCon`);
  const weatherCityInput = document.querySelector(`.weatherCity`);
  const weathercheckBTN = document.querySelector(`.weatherBTN`);
  let weatherForm = document.querySelector(`.weatherCheckerForm`)

  weathercheckBTN.addEventListener(`click`, (event) => {
      event.preventDefault(); // Prevent form submission
      const city = weatherCityInput.value;
      console.log(city);

      const apiKeyweather = `db78b3d94a007c958c44142be214ba78`;
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyweather}`;

      // Clear previous result
      weatherResultCon.innerHTML = "";

      // Create result container
      const resultBox = document.createElement(`div`);
      resultBox.classList.add(`resultBox`);
      weatherResultCon.appendChild(resultBox);

      // Weather Degree
      const weatherDegree = document.createElement(`div`);
      weatherDegree.classList.add(`weatherDegree`);
      const weatherDegreeH1 = document.createElement(`h1`);
      const weatherIMG = document.createElement(`img`);
      weatherDegree.appendChild(weatherDegreeH1);
      weatherDegree.appendChild(weatherIMG);
      resultBox.appendChild(weatherDegree);

      // More Weather Info
      const moreWeatherInfo = document.createElement(`div`);
      moreWeatherInfo.classList.add(`moreWeatherInfo`);
      const locationBox = document.createElement(`div`);
      locationBox.classList.add(`locationBox`);
      const locationBoxp = document.createElement(`p`);
      const locationBoxH1 = document.createElement(`h1`);
      locationBox.append(locationBoxp, locationBoxH1);
      moreWeatherInfo.appendChild(locationBox);
      const dayResult = document.createElement(`p`);
      dayResult.classList.add(`dayResult`);
      moreWeatherInfo.appendChild(dayResult);
      resultBox.appendChild(moreWeatherInfo);

      // SVG Creation
      const svg = document.createElement('svg');
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("width", "280");
      svg.setAttribute("height", "173");
      svg.setAttribute("viewBox", "0 0 280 173");

      const path = document.createElement('path');
      path.setAttribute("d", "M0 68.271C0 31.9023 0 13.7179 11.8946 4.71492C23.7892 -4.28806 41.2903 0.649757 76.2925 10.5254L247.948 58.9567C263.372 63.3084 271.084 65.4843 275.542 71.3744C280 77.2646 280 85.2776 280 101.303V129C280 149.742 280 160.113 273.556 166.556C267.113 173 256.742 173 236 173H44C23.2582 173 12.8873 173 6.44365 166.556C0 160.113 0 149.742 0 129V68.271Z");
      path.setAttribute("fill", "url(#paint0_linear_33_323)");

      const defs = document.createElement('defs');
      const linearGradient = document.createElement('linearGradient');
      linearGradient.setAttribute("id", "paint0_linear_33_323");
      linearGradient.setAttribute("x1", "140");
      linearGradient.setAttribute("y1", "-11");
      linearGradient.setAttribute("x2", "140");
      linearGradient.setAttribute("y2", "173");
      linearGradient.setAttribute("gradientUnits", "userSpaceOnUse");

      const stop1 = document.createElement('stop');
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", "#B7C7EA");

      const stop2 = document.createElement('stop');
      stop2.setAttribute("offset", "0.0001");
      stop2.setAttribute("stop-color", "#5C98AD");

      const stop3 = document.createElement('stop');
      stop3.setAttribute("offset", "100%");
      stop3.setAttribute("stop-color", "#00696F");

      linearGradient.appendChild(stop1);
      linearGradient.appendChild(stop2);
      linearGradient.appendChild(stop3);
      defs.appendChild(linearGradient);
      svg.appendChild(defs);
      svg.appendChild(path);
      resultBox.appendChild(svg);

      // Fetch Weather Data
      fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const degreeInCelsius = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
        const degree = `${degreeInCelsius}°`; // Convert to a string with the degree symbol
        weatherDegreeH1.textContent = degree;

        const humidity = data.main.humidity;
        locationBoxp.textContent = `H: ${humidity}%`;

        const weatherCityIn = data.name;
        const countryIn = data.sys.country;
        locationBoxH1.textContent = `${weatherCityIn}, ${countryIn}`;

        // Update Weather Image and Description

        // Now, use degreeInCelsius for comparison
        if (degreeInCelsius <= 5) {
            dayResult.innerText = `Snow Day`;
            weatherIMG.setAttribute(`src`, `./Resource/cold.png`);
        } else if (degreeInCelsius <= 20) {
            dayResult.innerText = `Cloudy Day`;
            weatherIMG.setAttribute(`src`, `./Resource/cold.png`);
        } else if (degreeInCelsius <= 25) {
            dayResult.innerText = `Sunny Day`;
            weatherIMG.setAttribute(`src`, `./Resource/cloud.png`);
        } else {
            dayResult.innerText = `Hot Day`;
            weatherIMG.setAttribute(`src`, `./Resource/hot.png`);
        }
    })
    .catch((error) => console.error("Error fetching weather data:", error));

    weatherForm.reset()
});



}


weatherPage()