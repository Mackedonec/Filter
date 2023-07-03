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
  {
    id: 13,
    flag: "assets/img/Philippines.png",
    name: "Філіппіни",
    strength: 109,
    mainland: "eurasia",
  },
  {
    id: 14,
    flag: "assets/img/Egypt.png",
    name: "Єгипет",
    strength: 102,
    mainland: "eurasia",
  },
  {
    id: 15,
    flag: "assets/img/Vietnam.png",
    name: "В'єтнам",
    strength: 97,
    mainland: "eurasia",
  },
  {
    id: 16,
    flag: "assets/img/Congo.png",
    name: "ДР Конго",
    strength: 89,
    mainland: "africa",
  },
  {
    id: 17,
    flag: "assets/img/Turkey.png",
    name: "Туреччина",
    strength: 84,
    mainland: "eurasia",
  },
  {
    id: 18,
    flag: "assets/img/Iran.png",
    name: "Іран",
    strength: 83,
    mainland: "eurasia",
  },
  {
    id: 19,
    flag: "assets/img/Germany.png",
    name: "Німеччина",
    strength: 83,
    mainland: "eurasia",
  },
  {
    id: 20,
    flag: "assets/img/Thailand.png",
    name: "Таїланд",
    strength: 69,
    mainland: "eurasia",
  },
  {
    id: 21,
    flag: "assets/img/United_Kingdom.png",
    name: "Велика Британія",
    strength: 67,
    mainland: "eurasia",
  },
  {
    id: 22,
    flag: "assets/img/France.png",
    name: "Франція",
    strength: 65,
    mainland: "eurasia",
  },
  {
    id: 23,
    flag: "assets/img/Italy.png",
    name: "Італія",
    strength: 60,
    mainland: "eurasia",
  },
  {
    id: 24,
    flag: "assets/img/Tanzania.png",
    name: "Танзанія",
    strength: 59,
    mainland: "africa",
  },
  {
    id: 25,
    flag: "assets/img/South_Africa.png",
    name: "ПАР",
    strength: 59,
    mainland: "africa",
  },
  {
    id: 26,
    flag: "assets/img/Myanmar.png",
    name: "М'янма",
    strength: 54,
    mainland: "eurasia",
  },
  {
    id: 27,
    flag: "assets/img/Kenya.png",
    name: "Кенія",
    strength: 53,
    mainland: "africa",
  },
  {
    id: 28,
    flag: "assets/img/South_Korea.png",
    name: "Південна Корея",
    strength: 51,
    mainland: "eurasia",
  },
  {
    id: 29,
    flag: "assets/img/Colombia.png",
    name: "Колумбія",
    strength: 50,
    mainland: "south_america",
  },
  {
    id: 30,
    flag: "assets/img/Spain.png",
    name: "Іспанія",
    strength: 46,
    mainland: "eurasia",
  },
  {
    id: 31,
    flag: "assets/img/Uganda.png",
    name: "Уганда",
    strength: 45,
    mainland: "africa",
  },
  {
    id: 32,
    flag: "assets/img/Argentina.png",
    name: "Аргентина",
    strength: 45,
    mainland: "south_america",
  },
  {
    id: 33,
    flag: "assets/img/Algeria.png",
    name: "Алжир",
    strength: 43,
    mainland: "africa",
  },
  {
    id: 34,
    flag: "assets/img/Sudan.png",
    name: "Судан",
    strength: 43,
    mainland: "africa",
  },
  {
    id: 35,
    flag: "assets/img/Ukraine.png",
    name: "Україна",
    strength: 43,
    mainland: "eurasia",
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
            <div class="country-strength">${country.strength} міл.</div>
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
