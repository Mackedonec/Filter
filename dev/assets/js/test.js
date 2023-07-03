// початковий код
const countryInfo = [
  {
    id: 1,
    flag: "assets/img/China.png",
    name: "КНР",
    strength: "1439",
    mainland: "Євразія",
  },
  {
    id: 2,
    flag: "assets/img/India.png",
    name: "Індія",
    strength: "1380",
    mainland: "Євразія",
  },
  {
    id: 3,
    flag: "assets/img/India.png",
    name: "США",
    strength: "331",
    mainland: "Північна Америка",
  },
  {
    id: 4,
    flag: "assets/img/India.png",
    name: "Індонезія",
    strength: "273",
    mainland: "Євразія",
  },
  {
    id: 5,
    flag: "assets/img/India.png",
    name: "Пакистан",
    strength: "220",
    mainland: "Євразія",
  },
  {
    id: 6,
    flag: "assets/img/India.png",
    name: "Бразилія",
    strength: "212",
    mainland: "Південна Америка",
  },
  {
    id: 7,
    flag: "assets/img/India.png",
    name: "Нігерія",
    strength: "206",
    mainland: "Африка",
  },
];
window.addEventListener("load", function () {
  const countryItem = document.querySelector(".item");
  const mainlandRadio = document.querySelectorAll('[type="radio"]');
  const strengthRange = document.querySelector("#strength");

  const renderCountries = (countries) => {
    const countriesList = countries
      .map((country) => {
        return `
  <div class="countries">
	  <div class="country-flag"><img src="${country.flag}" class="img-fluid" alt="${country.name}"></div>
	  <div class="country-name">${country.name}</div>
	  <div class="country-strength">${country.strength}</div>
	  <div class="country-mainland">${country.mainland}</div>
	</div>
	`;
      })
      .join("");
    countryItem.innerHTML = countriesList;
  };
  renderCountries(countryInfo);

  const config = {
    mainland: "all",
    strength: "1439",
  };

  function getMainlandVal() {
    mainlandRadio.forEach((item) => {
      item.addEventListener("click", (event) => {
        let val = event.target.value;
        config.mainland = val;
      });
    });
  }
  getMainlandVal();

  function getStrengthVal() {
    strengthRange.addEventListener("click", (event) => {
      let val = event.target.value;
      config.strength = val;
      const fillteredStrength = strengthFilter();
      renderCountries(fillteredStrength);
      console.log(val);
    });
  }
  getStrengthVal();

  function mainlandFilter() {
    return config.mainland === "all"
      ? countryInfo
      : countryInfo.filter((item) => item.mainland === config.mainland);
  }

  function strengthFilter() {
    return countryInfo.filter((item) => item.strength <= config.strength);
  }
});

// код не працює
