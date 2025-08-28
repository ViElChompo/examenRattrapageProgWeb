import Country from "./modules/country.js";

const countries = [];

const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");

form.addEventListener("keydown", (e) => {
  const countryName = input.value;

  if (e.key === "Enter") {
    e.preventDefault();

    countries.push(countryName);
    countries.forEach((name) => {
      generateCountry(name);
    });
  }
});



const submitButton = document.querySelector('button'); 

submitButton.addEventListener('click', (e)=>{

  
  const countryName = input.value;

  if (e.key === "Enter") {
    e.preventDefault();

    countries.push(countryName);
    countries.forEach((name) => {
      generateCountry(name);
    });
  }

})

async function generateCountry(countryName) {
  const name = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  const data = await name.json();
  const population = data[0].population;
  const countryNameCommon = data[0].name.common;
  const countryNameOfficial = data[0].name.official;
  const flag = data[0].flag;
  const subregion = data[0].subregion;
  const maps = data[0].maps.openStreetMaps;

  const search = [];

  // le constructor de Country() reçoit les paramètres dans cet ordre la : flag, common, official, population, region, map
  new Country(
    flag,
    countryNameCommon,
    countryNameOfficial,
    population,
    subregion,
    maps
  );
}
