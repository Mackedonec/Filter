const countryInfo = [
  {
    id: 1,
    flag: "assets/img/China.png",
    name: "КНР",
    strength: 1439,
    mainland: "eurasia",
  },
  {
    id: 2,
    flag: "assets/img/India.png",
    name: "Індія",
    strength: 1380,
    mainland: "eurasia",
  },
  {
    id: 3,
    flag: "assets/img/United_States.png",
    name: "США",
    strength: 331,
    mainland: "north_america",
  },
  {
    id: 4,
    flag: "assets/img/Indonesia.png",
    name: "Індонезія",
    strength: 273,
    mainland: "eurasia",
  },
  {
    id: 5,
    flag: "assets/img/Pakistan.png",
    name: "Пакистан",
    strength: 220,
    mainland: "eurasia",
  },
  {
    id: 6,
    flag: "assets/img/Brazil.png",
    name: "Бразилія",
    strength: 212,
    mainland: "south_america",
  },
  {
    id: 7,
    flag: "assets/img/Nigeria.png",
    name: "Нігерія",
    strength: 206,
    mainland: "africa",
  },
  {
    id: 8,
    flag: "assets/img/Bangladesh.png",
    name: "Бангладеш",
    strength: 164,
    mainland: "eurasia",
  },
  {
    id: 9,
    flag: "assets/img/ussia.png",
    name: "країна 404",
    strength: 144,
    mainland: "eurasia",
  },
  {
    id: 10,
    flag: "assets/img/Mexico.png",
    name: "Мексика",
    strength: 129,
    mainland: "north_america",
  },
  {
    id: 11,
    flag: "assets/img/Japan.png",
    name: "Японія",
    strength: 126,
    mainland: "eurasia",
  },
  {
    id: 12,
    flag: "assets/img/Ethiopia.png",
    name: "Ефіопія",
    strength: 114,
    mainland: "africa",
  },
];

window.addEventListener("load", function () {
  const countryItem = document.querySelector(".item");
  const mainlandRadio = document.querySelectorAll('[type="radio"]');
  const strengthRange = document.querySelector("#strength");

  const renderCountries = (countries) => {
    const list = countries
      .map((country) => {
        let mainlandName;
        switch (country.mainland) {
          case "eurasia":
            mainlandName = "Євразія";
            break;
          case "africa":
            mainlandName = "Африка";
            break;
          case "north_america":
            mainlandName = "Північна Америка";
            break;
          case "south_america":
            mainlandName = "Південна Америка";
            break;
          case "australia":
            mainlandName = "Австралія";
            break;
          default:
            mainlandName = country.mainland;
        }
        return `
          <div class="countries">
            <div class="country-flag"><img src="${country.flag}" class="img-fluid" alt="${country.name}"></div>
            <div class="country-name">${country.name}</div>
            <div class="country-strength">${country.strength} мільйонів</div>
            <div class="country-mainland">${mainlandName}</div>
          </div>
          `;
      })
      .join("");
    countryItem.innerHTML = list;
  };

  const config = {
    mainland: "all",
    strength: 1439,
  };

  function applyFilters() {
    const filteredCountries = countryInfo.filter((item) => {
      const strength = parseInt(item.strength);
      const mainland = item.mainland;

      const strengthFilterPassed = strength <= config.strength;
      const mainlandFilterPassed =
        config.mainland === "all" || mainland === config.mainland;

      return strengthFilterPassed && mainlandFilterPassed;
    });

    renderCountries(filteredCountries);
  }

  function getMainlandVal() {
    mainlandRadio.forEach((item) => {
      item.addEventListener("click", (event) => {
        let val = event.target.value;
        config.mainland = val;
        applyFilters();
      });
    });
  }
  getMainlandVal();

  function getStrengthVal() {
    strengthRange.addEventListener("input", (event) => {
      let val = parseInt(event.target.value);
      config.strength = val;
      applyFilters();
    });
  }
  getStrengthVal();

  applyFilters();
});
