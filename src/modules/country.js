export default class country {
  constructor(flag, common, official, population, region, map) {
    this.flag = flag;
    this.common = common;
    this.official = official;
    this.population = population;
    this.region = region;
    this.map = map;

    this.generateElement();
  }

  generateElement() {
    const main = document.querySelector(".results");

    main.innerHTML = ` 
    <div class="country--container">
	<article class="country--card">
			<section class="country--flag">
				<h1>${this.flag}</h1>
			</section>

			<section class="country--name">
				<h1>${this.common}</h1>
				<h2>${this.official}</h2>
			</section>

			<section class="country--info">
				<p>population: ${this.population}</p>
				<p>region: ${this.region}</p>
			</section>

			<section class="country--actions">
				<a class="country--map" href="${this.map}" target="_blank">
					Display Map 📍
				</a>
			</section>
		</article>
	</div>`;

  }
}
