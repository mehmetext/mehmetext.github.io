const logosEl = document.getElementsByClassName("logo");
const continueBtn = document.querySelector(".continue");
const iconsEl = document.querySelector(".icons");
const myExperiencesEl = document.querySelector(".my-experiences");
const myReferencesEl = document.querySelector(".my-references");

const okeyWhoItems = [
	{
		icon: "fas fa-mobile-alt",
		text: "Mobil Uygulama Geliştirici",
	},
	{
		icon: "fas fa-globe",
		text: "Website <br /> Geliştirici",
	},
	{
		icon: "fas fa-brush",
		text: "Grafik <br /> Tasarımcı",
	},
];

const myExperiences = [
	{
		experienceGroupName: "Mobil Uygulama Geliştirici",
		experiences: [
			{
				name: "DART",
				rate: 85,
			},
			{
				name: "FLUTTER",
				rate: 85,
			},
		],
	},
	{
		experienceGroupName: "Website Geliştirici",
		experiences: [
			{
				name: "HTML",
				rate: 90,
			},
			{
				name: "CSS",
				rate: 90,
			},
			{
				name: "JAVASCRIPT",
				rate: 50,
			},
			{
				name: "JQUERY",
				rate: 60,
			},
			{
				name: "BOOSTRAP",
				rate: 20,
			},
		],
	},
	{
		experienceGroupName: "Grafik Tasarımcı",
		experiences: [
			{
				name: "PHOTOSHOP",
				rate: 85,
			},
			{
				name: "ILLUSTRATOR",
				rate: 65,
			},
			{
				name: "ADOBE XD",
				rate: 90,
			},
			{
				name: "WEB TASARIM",
				rate: 90,
			},
			{
				name: "MOBİL UI TASARIMI",
				rate: 80,
			},
			{
				name: "KARTVİZİT TASARIMI",
				rate: 85,
			},
		],
	},
	{
		experienceGroupName: "Diğer",
		experiences: [
			{
				name: "EXCEL",
				rate: 85,
			},
			{
				name: "İNGİLİZCE",
				rate: 50,
			},
			{
				name: "CAMTASIA STUDIO",
				rate: 60,
			},
			{
				name: "ÖĞRENME İSTEĞİ",
				rate: 1000,
			},
		],
	},
];

const myReferences = [
	{
		referenceGroupName: "Mobil Uygulama Geliştirici",
		references: [
			{
				image: "fotonot.jpg",
				title: "FOTONOT",
			},
			{
				image: "sprien.jpg",
				title: "SPRIEN",
			},
			{
				image: "calcubody.jpg",
				title: "CALCUBODY",
			},
		],
	},
	{
		referenceGroupName: "Web Geliştirici",
		references: [
			{
				image: "kendine.jpg",
				title: "KENDİNE TEMA (MYBB)",
			},
		],
	},
	{
		referenceGroupName: "Grafik Tasarımcı",
		references: [
			{
				image: "aytec.jpg",
				title: "AY-TEC KARTVİZİT",
			},
			{
				image: "kipost.png",
				title: "Kİ POST TASARIMI",
			},
			{
				image: "instagramstory.jpg",
				title: "HİKAYE",
			},
			{
				image: "wdpost.png",
				title: "WEBIDEBBY POST",
			},
		],
	},
];

[...logosEl].forEach((logo) => {
	logo.classList.add("slab");
	logo.innerHTML = "< MehmetKonukçu />";
});

continueBtn.onclick = function () {
	window.scrollTo(0, window.innerHeight);
};

okeyWhoItems.forEach((item) => {
	let html = `
	
		<div class="icons__icon">
			<i class="${item.icon}"></i>
			<div class="icons__text slab">${item.text}</div>
		</div>

	`;

	iconsEl.insertAdjacentHTML("beforeend", html);
});

myExperiences.forEach((experienceGroup, index) => {
	let html = `
			<div class="section">
				<div class="section__content container">
					<div class="experience-group">
						<div class="experience-group__title">
							Bir
							<span class="experience-group__title__groupName slab">${experienceGroup.experienceGroupName}</span>
							olarak ben şu tecrübelere sahibim:
						</div>
						<div class="experience-group__experiences">
							
						`;

	experienceGroup.experiences.forEach((experience) => {
		let experienceItemHtml = `
							<div class="experience-group__experiences__item">
								<div class="experience-group__experiences__item__title">
									<span class="slab">${experience.name}</span>
									<div class="group__experiences__item__title__percent">
										%<span>${experience.rate}</span>
									</div>
								</div>
								<div class="experience-group__experiences__item__line">
									<div class="experience-group__experiences__item__line__percent" style="width: ${
										experience.rate > 100
											? 100
											: experience.rate
									}%"></div>
								</div>
							</div>`;
		html += experienceItemHtml;
	});

	let htmlLast = `
						</div>
					</div>
				</div>
			</div>`;

	html += htmlLast;

	myExperiencesEl.insertAdjacentHTML("beforeend", html);
});

document.querySelectorAll(".section").forEach((element, index) => {
	if (index % 2 == 0) {
		element.classList.add("light");
	}
});

myReferences.forEach((referenceGroup, index) => {
	let html = `
					<div class="reference-group">
						<div class="reference-group__title">
							Bir <span class="reference-group__title__groupName slab">Web Geliştirici</span> olarak şunları yaptım:
						</div>
						<div class="reference-group__references">
							
						`;

	referenceGroup.references.forEach((reference, index) => {
		let referenceItemHtml = `
							<div class="reference-group__references__item">
								<div class="reference-group__references__item__image">
									<img src="images/${reference.image}" alt="${reference.title}" />
								</div>
								<div class="reference-group__references__item__info">
									<div class="reference-group__references__item__title slab">${reference.title}</div>
									<a href="#!" class="group__references__item__detailsBtn">
										<i class="fas fa-arrow-up"></i> detaylar
									</a>
								</div>
							</div>`;
		html += referenceItemHtml;
	});

	let htmlLast = `
						</div>
					</div>`;

	html += htmlLast;

	myReferencesEl.insertAdjacentHTML("beforeend", html);
});
