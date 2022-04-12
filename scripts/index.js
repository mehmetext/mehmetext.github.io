const logosEl = document.getElementsByClassName("logo");
const continueBtn = document.querySelector(".continue");
const iconsEl = document.querySelector(".icons");
const myExperiencesEl = document.querySelector(".my-experiences");
const myReferencesEl = document.querySelector(".my-references");

const okeyWhoItems = [
	{
		icon: "fas fa-mobile-alt",
		text: "Mobil Uygulama <br /> Geliştirici",
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
				name: "PHP",
				rate: 40,
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
		experienceGroupName: "Masaüstü Geliştirici",
		experiences: [
			{
				name: "C#",
				rate: 30,
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
	logo.classList.add("slab", "fs-1", "fw-bold", "mt-n1");
	logo.innerHTML = "< MehmetKonukçu />";
});

continueBtn.onclick = function () {
	window.scrollTo(0, window.innerHeight);
};

okeyWhoItems.forEach((item) => {
	let html = `
	
		<div class="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column mt-3 mt-md-0 icons__icon">
			<i class="mb-3 ${item.icon}"></i>
			<div class="icons__text fw-bold text-center lh-1 fs-2 slab">${item.text}</div>
		</div>

	`;

	iconsEl.insertAdjacentHTML("beforeend", html);
});

myExperiences.forEach((experienceGroup, index) => {
	let html = `
			<div class="section">
				<div class="container">
					<div class="row">
						<div class="fs-2 fw-light">
							Bir
							<span class="experience-group__title__groupName fw-bold fs-1 slab">${experienceGroup.experienceGroupName}</span>
							olarak ben şu tecrübelere sahibim:
						</div>
						<div class="row">
							
						`;

	experienceGroup.experiences.forEach((experience) => {
		let experienceItemHtml = `
							<div class="mt-3 col-md-6 flex-column">
								<div class="d-flex flex-row justify-content-between">
									<span class="slab fs-4 fw-bold">${experience.name}</span>
									<div class="fw-light">
										%<span class="fw-bold fs-4">${experience.rate}</span>
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
					<div class="mt-4">
						<div class="fs-2 fw-light">
							Bir <span class="fs-1 fw-bold slab">${referenceGroup.referenceGroupName}</span> olarak şunları yaptım:
						</div>
						<div class="d-flex flex-row flex-wrap justify-content-center justify-content-md-start">
							
						`;

	referenceGroup.references.forEach((reference, index) => {
		let referenceItemHtml = `
							<div class="d-flex justify-content-start flex-column mt-3 me-4">
								<div class="reference-group__references__item__image overflow-hidden mb-2">
									<img src="images/${reference.image}" alt="${reference.title}" />
								</div>
								<div class="d-flex flex-column align-items-center">
									<div class="fs-2 fw-bold mb-2 text-center lh-1 slab">${reference.title}</div>
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
