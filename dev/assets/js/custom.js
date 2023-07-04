const countryInfo = [
  {
    id: 1,
    flag: "assets/img/China.png",
    name: "КНР",
    bill: "1",
    strength: 439,
    mainland: "eurasia",
  },
  {
    id: 2,
    flag: "assets/img/India.png",
    name: "Індія",
    bill: "1",
    strength: 380,
    mainland: "eurasia",
  },
  {
    id: 3,
    flag: "assets/img/United_States.png",
    name: "США",
    bill: "",
    strength: 331,
    mainland: "north_america",
  },
  {
    id: 4,
    flag: "assets/img/Indonesia.png",
    name: "Індонезія",
    bill: "",
    strength: 273,
    mainland: "eurasia",
  },
  {
    id: 5,
    flag: "assets/img/Pakistan.png",
    name: "Пакистан",
    bill: "",
    strength: 220,
    mainland: "eurasia",
  },
  {
    id: 6,
    flag: "assets/img/Brazil.png",
    name: "Бразилія",
    bill: "",
    strength: 212,
    mainland: "south_america",
  },
  {
    id: 7,
    flag: "assets/img/Nigeria.png",
    name: "Нігерія",
    bill: "",
    strength: 206,
    mainland: "africa",
  },
  {
    id: 8,
    flag: "assets/img/Bangladesh.png",
    name: "Бангладеш",
    bill: "",
    strength: 164,
    mainland: "eurasia",
  },
  {
    id: 9,
    flag: "assets/img/ussia.png",
    name: "країна 404",
    bill: "",
    strength: 144,
    mainland: "eurasia",
  },
  {
    id: 10,
    flag: "assets/img/Mexico.png",
    name: "Мексика",
    bill: "",
    strength: 129,
    mainland: "north_america",
  },
  {
    id: 11,
    flag: "assets/img/Japan.png",
    name: "Японія",
    bill: "",
    strength: 126,
    mainland: "eurasia",
  },
  {
    id: 12,
    flag: "assets/img/Ethiopia.png",
    name: "Ефіопія",
    bill: "",
    strength: 114,
    mainland: "africa",
  },
  {
    id: 13,
    flag: "assets/img/Philippines.png",
    name: "Філіппіни",
    bill: "",
    strength: 109,
    mainland: "eurasia",
  },
  {
    id: 14,
    flag: "assets/img/Egypt.png",
    name: "Єгипет",
    bill: "",
    strength: 102,
    mainland: "eurasia",
  },
  {
    id: 15,
    flag: "assets/img/Vietnam.png",
    name: "В'єтнам",
    bill: "",
    strength: 97,
    mainland: "eurasia",
  },
  {
    id: 16,
    flag: "assets/img/Congo.png",
    name: "ДР Конго",
    bill: "",
    strength: 89,
    mainland: "africa",
  },
  {
    id: 17,
    flag: "assets/img/Turkey.png",
    name: "Туреччина",
    bill: "",
    strength: 84,
    mainland: "eurasia",
  },
  {
    id: 18,
    flag: "assets/img/Iran.png",
    name: "Іран",
    bill: "",
    strength: 83,
    mainland: "eurasia",
  },
  {
    id: 19,
    flag: "assets/img/Germany.png",
    name: "Німеччина",
    bill: "",
    strength: 83,
    mainland: "eurasia",
  },
  {
    id: 20,
    flag: "assets/img/Thailand.png",
    name: "Таїланд",
    bill: "",
    strength: 69,
    mainland: "eurasia",
  },
  {
    id: 21,
    flag: "assets/img/United_Kingdom.png",
    name: "Велика Британія",
    bill: "",
    strength: 67,
    mainland: "eurasia",
  },
  {
    id: 22,
    flag: "assets/img/France.png",
    name: "Франція",
    bill: "",
    strength: 65,
    mainland: "eurasia",
  },
  {
    id: 23,
    flag: "assets/img/Italy.png",
    name: "Італія",
    bill: "",
    strength: 60,
    mainland: "eurasia",
  },
  {
    id: 24,
    flag: "assets/img/Tanzania.png",
    name: "Танзанія",
    bill: "",
    strength: 59,
    mainland: "africa",
  },
  {
    id: 25,
    flag: "assets/img/South_Africa.png",
    name: "ПАР",
    bill: "",
    strength: 59,
    mainland: "africa",
  },
  {
    id: 26,
    flag: "assets/img/Myanmar.png",
    name: "М'янма",
    bill: "",
    strength: 54,
    mainland: "eurasia",
  },
  {
    id: 27,
    flag: "assets/img/Kenya.png",
    name: "Кенія",
    bill: "",
    strength: 53,
    mainland: "africa",
  },
  {
    id: 28,
    flag: "assets/img/South_Korea.png",
    name: "Південна Корея",
    bill: "",
    strength: 51,
    mainland: "eurasia",
  },
  {
    id: 29,
    flag: "assets/img/Colombia.png",
    name: "Колумбія",
    bill: "",
    strength: 50,
    mainland: "south_america",
  },
  {
    id: 30,
    flag: "assets/img/Spain.png",
    name: "Іспанія",
    bill: "",
    strength: 46,
    mainland: "eurasia",
  },
  {
    id: 31,
    flag: "assets/img/Uganda.png",
    name: "Уганда",
    bill: "",
    strength: 45,
    mainland: "africa",
  },
  {
    id: 32,
    flag: "assets/img/Argentina.png",
    name: "Аргентина",
    bill: "",
    strength: 45,
    mainland: "south_america",
  },
  {
    id: 33,
    flag: "assets/img/Algeria.png",
    name: "Алжир",
    bill: "",
    strength: 43,
    mainland: "africa",
  },
  {
    id: 34,
    flag: "assets/img/Sudan.png",
    name: "Судан",
    bill: "",
    strength: 43,
    mainland: "africa",
  },
  {
    id: 35,
    flag: "assets/img/Ukraine.png",
    name: "Україна",
    bill: "",
    strength: 43,
    mainland: "eurasia",
  },
  {
    id: 36,
    flag: "assets/img/Iraq.png",
    name: "Ірак",
    bill: "",
    strength: 40,
    mainland: "eurasia",
  },
  {
    id: 37,
    flag: "assets/img/Taliban.png",
    name: "Афганістан",
    bill: "",
    strength: 38,
    mainland: "eurasia",
  },
  {
    id: 38,
    flag: "assets/img/Poland.png",
    name: "Польща",
    bill: "",
    strength: 37,
    mainland: "eurasia",
  },
  {
    id: 39,
    flag: "assets/img/Canada.png",
    name: "Канада",
    bill: "",
    strength: 37,
    mainland: "north_america",
  },
  {
    id: 40,
    flag: "assets/img/Morocco.png",
    name: "Марокко",
    bill: "",
    strength: 36,
    mainland: "africa",
  },
  {
    id: 41,
    flag: "assets/img/Saudi_Arabia.png",
    name: "Саудівська Аравія",
    bill: "",
    strength: 34,
    mainland: "eurasia",
  },
  {
    id: 42,
    flag: "assets/img/Uzbekistan.png",
    name: "Узбекистан",
    bill: "",
    strength: 33,
    mainland: "eurasia",
  },
  {
    id: 43,
    flag: "assets/img/Peru.png",
    name: "Перу",
    bill: "",
    strength: 32,
    mainland: "south_america",
  },
  {
    id: 44,
    flag: "assets/img/Angola.png",
    name: "Ангола",
    bill: "",
    strength: 32,
    mainland: "africa",
  },
  {
    id: 45,
    flag: "assets/img/Malaysia.png",
    name: "Малайзія",
    bill: "",
    strength: 32,
    mainland: "eurasia",
  },
  {
    id: 46,
    flag: "assets/img/Mozambique.png",
    name: "Мозамбік",
    bill: "",
    strength: 31,
    mainland: "africa",
  },
  {
    id: 47,
    flag: "assets/img/Ghana.png",
    name: "Гана",
    bill: "",
    strength: 31,
    mainland: "africa",
  },
  {
    id: 48,
    flag: "assets/img/Yemen.png",
    name: "Ємен",
    bill: "",
    strength: 29,
    mainland: "eurasia",
  },
  {
    id: 49,
    flag: "assets/img/Nepal.png",
    name: "Непал",
    bill: "",
    strength: 29,
    mainland: "eurasia",
  },
  {
    id: 50,
    flag: "assets/img/Venezuela.png",
    name: "Венесуела",
    bill: "",
    strength: 28,
    mainland: "south_america",
  },
  {
    id: 51,
    flag: "assets/img/Madagascar.png",
    name: "Мадагаскар",
    bill: "",
    strength: 27,
    mainland: "africa",
  },
  {
    id: 52,
    flag: "assets/img/Cameroon.png",
    name: "Камерун",
    bill: "",
    strength: 26,
    mainland: "africa",
  },
  {
    id: 53,
    flag: "assets/img/Cote_divoire.png",
    name: "Кот-д'Івуар",
    bill: "",
    strength: 26,
    mainland: "africa",
  },
  {
    id: 54,
    flag: "assets/img/North_Korea.png",
    name: "Північна Корея",
    bill: "",
    strength: 25,
    mainland: "eurasia",
  },
  {
    id: 55,
    flag: "assets/img/Australia.png",
    name: "Австралія",
    bill: "",
    strength: 25,
    mainland: "australia",
  },
  {
    id: 56,
    flag: "assets/img/Niger.png",
    name: "Нігер",
    bill: "",
    strength: 24,
    mainland: "africa",
  },
  {
    id: 57,
    flag: "assets/img/Taivan.png",
    name: "Тайвань",
    bill: "",
    strength: 23,
    mainland: "eurasia",
  },
  {
    id: 58,
    flag: "assets/img/Sri_Lanka.png",
    name: "Шрі-Ланка",
    bill: "",
    strength: 21,
    mainland: "eurasia",
  },
  {
    id: 59,
    flag: "assets/img/Burkina_Faso.png",
    name: "Буркіна-Фасо",
    bill: "",
    strength: 20,
    mainland: "africa",
  },
  {
    id: 60,
    flag: "assets/img/Mali.png",
    name: "Малі",
    bill: "",
    strength: 20,
    mainland: "africa",
  },
  {
    id: 61,
    flag: "assets/img/Romania.png",
    name: "Румунія",
    bill: "",
    strength: 19,
    mainland: "eurasia",
  },
  {
    id: 62,
    flag: "assets/img/Malawi.png",
    name: "Малаві",
    bill: "",
    strength: 19,
    mainland: "africa",
  },
  {
    id: 63,
    flag: "assets/img/Chile.png",
    name: "Чилі",
    bill: "",
    strength: 19,
    mainland: "south_america",
  },
  {
    id: 64,
    flag: "assets/img/Kazakhstan.png",
    name: "Казахстан",
    bill: "",
    strength: 18,
    mainland: "eurasia",
  },
  {
    id: 65,
    flag: "assets/img/Zambia.png",
    name: "Замбія",
    bill: "",
    strength: 18,
    mainland: "africa",
  },
  {
    id: 66,
    flag: "assets/img/Guatemala.png",
    name: "Гватемала",
    bill: "",
    strength: 17,
    mainland: "south_america",
  },
  {
    id: 67,
    flag: "assets/img/Ecuador.png",
    name: "Еквадор",
    bill: "",
    strength: 17,
    mainland: "south_america",
  },
  {
    id: 68,
    flag: "assets/img/Siria.png",
    name: "Сирія",
    bill: "",
    strength: 17,
    mainland: "eurasia",
  },
  {
    id: 69,
    flag: "assets/img/Netherlands.png",
    name: "Нідерланди",
    bill: "",
    strength: 17,
    mainland: "eurasia",
  },
  {
    id: 70,
    flag: "assets/img/Senegal.png",
    name: "Сенегал",
    bill: "",
    strength: 16,
    mainland: "africa",
  },
  {
    id: 71,
    flag: "assets/img/Cambodia.png",
    name: "Камбоджа",
    bill: "",
    strength: 16,
    mainland: "eurasia",
  },
  {
    id: 72,
    flag: "assets/img/Chad.png",
    name: "Чад",
    bill: "",
    strength: 16,
    mainland: "africa",
  },
  {
    id: 73,
    flag: "assets/img/Somalia.png",
    name: "Сомалі",
    bill: "",
    strength: 15,
    mainland: "africa",
  },
  {
    id: 74,
    flag: "assets/img/Zimbabwe.png",
    name: "Зімбабве",
    bill: "",
    strength: 14,
    mainland: "africa",
  },
  {
    id: 75,
    flag: "assets/img/Guinea.png",
    name: "Гвінея",
    bill: "",
    strength: 13,
    mainland: "africa",
  },
  {
    id: 76,
    flag: "assets/img/Rwanda.png",
    name: "Руанда",
    bill: "",
    strength: 12,
    mainland: "africa",
  },
  {
    id: 77,
    flag: "assets/img/Benin.png",
    name: "Бенін",
    bill: "",
    strength: 12,
    mainland: "africa",
  },
  {
    id: 78,
    flag: "assets/img/Burundi.png",
    name: "Бурунді",
    bill: "",
    strength: 11,
    mainland: "africa",
  },
  {
    id: 79,
    flag: "assets/img/Tunisia.png",
    name: "Туніс",
    bill: "",
    strength: 11,
    mainland: "africa",
  },
  {
    id: 80,
    flag: "assets/img/Bolivia.png",
    name: "Болівія",
    bill: "",
    strength: 11,
    mainland: "africa",
  },
  {
    id: 81,
    flag: "assets/img/Belgium.png",
    name: "Бельгія",
    bill: "",
    strength: 11,
    mainland: "eurasia",
  },
  {
    id: 82,
    flag: "assets/img/Haiti.png",
    name: "Гаїті",
    bill: "",
    strength: 11,
    mainland: "north_america",
  },
  {
    id: 83,
    flag: "assets/img/Cuba.png",
    name: "Куба",
    bill: "",
    strength: 11,
    mainland: "north_america",
  },
  {
    id: 84,
    flag: "assets/img/South_Sudan.png",
    name: "Південний Судан",
    bill: "",
    strength: 11,
    mainland: "africa",
  },
  {
    id: 85,
    flag: "assets/img/Dominican_Republic.png",
    name: "Домініканська Республіка",
    bill: "",
    strength: 10,
    mainland: "north_america",
  },
  {
    id: 86,
    flag: "assets/img/Czech_Republic.png",
    name: "Чехія",
    bill: "",
    strength: 10,
    mainland: "eurasia",
  },
  {
    id: 87,
    flag: "assets/img/Greece.png",
    name: "Греція",
    bill: "",
    strength: 10,
    mainland: "eurasia",
  },
  {
    id: 88,
    flag: "assets/img/Jordan.png",
    name: "Йорданія",
    bill: "",
    strength: 10,
    mainland: "eurasia",
  },
  {
    id: 89,
    flag: "assets/img/Portugal.png",
    name: "Португалія",
    bill: "",
    strength: 10,
    mainland: "eurasia",
  },
  {
    id: 90,
    flag: "assets/img/Azerbaijan.png",
    name: "Азербайджан",
    bill: "",
    strength: 10,
    mainland: "eurasia",
  },
  {
    id: 91,
    flag: "assets/img/Sweden.png",
    name: "Швеція",
    bill: "",
    strength: 10,
    mainland: "eurasia",
  },
  {
    id: 92,
    flag: "assets/img/Honduras.png",
    name: "Гондурас",
    bill: "",
    strength: 9,
    mainland: "north_america",
  },
  {
    id: 93,
    flag: "assets/img/United_Arab_Emirates.png",
    name: "ОАЕ",
    bill: "",
    strength: 9,
    mainland: "eurasia",
  },
  {
    id: 94,
    flag: "assets/img/Hungary.png",
    name: "Угорщина",
    bill: "",
    strength: 9,
    mainland: "eurasia",
  },
  {
    id: 95,
    flag: "assets/img/Tajikistan.png",
    name: "Таджикистан",
    bill: "",
    strength: 9,
    mainland: "eurasia",
  },
  {
    id: 96,
    flag: "assets/img/Belarus.png",
    name: "Білорусь",
    bill: "",
    strength: 9,
    mainland: "eurasia",
  },
  {
    id: 97,
    flag: "assets/img/Austria.png",
    name: "Австрія",
    bill: "",
    strength: 9,
    mainland: "eurasia",
  },
  {
    id: 98,
    flag: "assets/img/Papua_New_Guinea.png",
    name: "Папуа Нова Гвінея",
    bill: "",
    strength: 8,
    mainland: "australia",
  },
  {
    id: 99,
    flag: "assets/img/Serbia.png",
    name: "Сербія",
    bill: "",
    strength: 8,
    mainland: "eurasia",
  },
  {
    id: 100,
    flag: "assets/img/Israel.png",
    name: "Ізраїль",
    bill: "",
    strength: 8,
    mainland: "eurasia",
  },
];

window.addEventListener("load", function () {
  const countryItem = document.querySelector(".item");
  const mainlandRadio = document.querySelectorAll('[type="radio"]');
  const strengthRange = document.querySelector("#strength");
  const strengthValue = document.querySelector("#strength-value");

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
            <div class="country-flag">
            <a href="${country.flag}" data-fancybox="gallery" data-caption="${country.name}">
            <img src="${country.flag}" class="img-fluid" alt="${country.name}">
            </a></div>
            <div class="country-name">${country.name}</div>
            <div class="country-strength">${country.bill}${country.strength} міл.</div>
            <div class="country-mainland">${mainlandName}</div>
          </div>
          `;
      })
      .join("");
    countryItem.innerHTML = list;
  };

  const config = {
    mainland: "all",
    strength: 440,
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
      strengthValue.innerHTML = val;
      applyFilters();
    });
  }
  getStrengthVal();

  applyFilters();
});
$(document).ready(function () {
  Fancybox.bind("[data-fancybox]", {
    loop: true,
    buttons: ["zoom", "slideShow", "fullScreen", "close"],
    animationEffect: "fade",
    transitionEffect: "slide",
    animationDuration: 600,
  });
});
