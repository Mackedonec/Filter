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
  {
    id: 36,
    flag: "assets/img/Iraq.png",
    name: "Ірак",
    strength: 40,
    mainland: "eurasia",
  },
  {
    id: 37,
    flag: "assets/img/Taliban.png",
    name: "Афганістан",
    strength: 38,
    mainland: "eurasia",
  },
  {
    id: 38,
    flag: "assets/img/Poland.png",
    name: "Польща",
    strength: 37,
    mainland: "eurasia",
  },
  {
    id: 39,
    flag: "assets/img/Canada.png",
    name: "Канада",
    strength: 37,
    mainland: "north_america",
  },
  {
    id: 40,
    flag: "assets/img/Morocco.png",
    name: "Марокко",
    strength: 36,
    mainland: "africa",
  },
  {
    id: 41,
    flag: "assets/img/Saudi_Arabia.png",
    name: "Саудівська Аравія",
    strength: 34,
    mainland: "eurasia",
  },
  {
    id: 42,
    flag: "assets/img/Uzbekistan.png",
    name: "Узбекистан",
    strength: 33,
    mainland: "eurasia",
  },
  {
    id: 43,
    flag: "assets/img/Peru.png",
    name: "Перу",
    strength: 32,
    mainland: "south_america",
  },
  {
    id: 44,
    flag: "assets/img/Angola.png",
    name: "Ангола",
    strength: 32,
    mainland: "africa",
  },
  {
    id: 45,
    flag: "assets/img/Malaysia.png",
    name: "Малайзія",
    strength: 32,
    mainland: "eurasia",
  },
  {
    id: 46,
    flag: "assets/img/Mozambique.png",
    name: "Мозамбік",
    strength: 31,
    mainland: "africa",
  },
  {
    id: 47,
    flag: "assets/img/Ghana.png",
    name: "Гана",
    strength: 31,
    mainland: "africa",
  },
  {
    id: 48,
    flag: "assets/img/Yemen.png",
    name: "Ємен",
    strength: 29,
    mainland: "eurasia",
  },
  {
    id: 49,
    flag: "assets/img/Nepal.png",
    name: "Непал",
    strength: 29,
    mainland: "eurasia",
  },
  {
    id: 50,
    flag: "assets/img/Venezuela.png",
    name: "Венесуела",
    strength: 28,
    mainland: "south_america",
  },
  {
    id: 51,
    flag: "assets/img/Madagascar.png",
    name: "Мадагаскар",
    strength: 27,
    mainland: "africa",
  },
  {
    id: 52,
    flag: "assets/img/Cameroon.png",
    name: "Камерун",
    strength: 26,
    mainland: "africa",
  },
  {
    id: 53,
    flag: "assets/img/Cote_divoire.png",
    name: "Кот-д'Івуар",
    strength: 26,
    mainland: "africa",
  },
  {
    id: 54,
    flag: "assets/img/North_Korea.png",
    name: "Північна Корея",
    strength: 25,
    mainland: "eurasia",
  },
  {
    id: 55,
    flag: "assets/img/Australia.png",
    name: "Австралія",
    strength: 25,
    mainland: "australia",
  },
  {
    id: 56,
    flag: "assets/img/Niger.png",
    name: "Нігер",
    strength: 24,
    mainland: "africa",
  },
  {
    id: 57,
    flag: "assets/img/Taivan.png",
    name: "Тайвань",
    strength: 23,
    mainland: "eurasia",
  },
  {
    id: 58,
    flag: "assets/img/Sri_Lanka.png",
    name: "Шрі-Ланка",
    strength: 21,
    mainland: "eurasia",
  },
  {
    id: 59,
    flag: "assets/img/Burkina_Faso.png",
    name: "Буркіна-Фасо",
    strength: 20,
    mainland: "africa",
  },
  {
    id: 60,
    flag: "assets/img/Mali.png",
    name: "Малі",
    strength: 20,
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
