import "./ValentineRevealed.css";

type Spot = {
	id: string;
	title: string;
	location: {
		label: string;
		mapUrl: string;
	};
	description: string;
	image: { src: string; alt: string };
	tags?: string[];
	cta?: { label: string; href: string };
};

const SPOTS_SATURDAY: Spot[] = [
	{
		id: "sat-brunch",
		title: "Spread the Moon",
		location: {
			label: "Allons-y !",
			mapUrl: "https://maps.app.goo.gl/dLvTynXXtwCgty7f7",
		},
		description: "On commence tranquille avec un brunch fait pour nous 🌙",
		image: {
			src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/07/6e/e7/spread-the-moon.jpg?w=1400&h=-1&s=1",
			alt: "Logo Spread the moon",
		},
		tags: ["Brunch", "Cosy", "Miam miam"],
	},
	{
		id: "sat-bd",
		title: "Musée de la BD",
		location: {
			label: "Allons-y !",
			mapUrl: "https://maps.app.goo.gl/6g82XHKkQ2aSHUjz7",
		},
		description: "Balade digestive et culturelle 😋",
		image: {
			src: "https://www.brusselsmuseums.be/imager/images/1515/IMG_1560-copie_80fa4cf31d8a0946e0febc8689ecd38c.jpg",
			alt: "Exposition du musée de la BD à Bruxelles",
		},
		tags: ["Culture", "Balade", "BD"],
	},
	{
		id: "sat-pool-1",
		title: "Piscine",
		location: {
			label: "Allons-y !",
			mapUrl: "https://maps.app.goo.gl/EoPid5CQyNpuiGMK9",
		},
		description: "Piscine avec vue, juste pour nous 💘",
		image: {
			src: "https://agendabrussels2.imgix.net/caf541bf1638e08cc38b5c9f83614f5f93a90214.jpg?w=1200&h=664&fit=clip",
			alt: "Piscine d'hôtel",
		},
		tags: ["Spa", "Piscine", "Détente"],
	},
	{
		id: "sat-snack-room",
		title: "Goûter dans la chambre",
		location: {
			label: "Allons-y !",
			mapUrl: "https://maps.app.goo.gl/EoPid5CQyNpuiGMK9",
		},
		description: "L'eau ça creuse ! 🍓",
		image: {
			src: "https://foto.hrsstatic.com/fotos/0/2/800/458/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2Fdms%2F1126497%2FAMADEUS%2F43299749378c40dcbf6b1fe08229ffdf.jpeg/2e7bc782f10adf4548add32d1bb9af72/2000%2C1333/6/Cardo_Brussels_Autograph_Collection-Brussels-Room-22-1126497.jpg",
			alt: "Chambre d'hôtel",
		},
		tags: ["Cookies by Sucré", "Goûter", "Ronpiche"],
	},
	{
		id: "bright-brussels",
		title: "Bright Brussels festival",
		location: {
			label: "Allons-y !",
			mapUrl:
				"https://www.visit.brussels/content/dam/visitbrussels/images/b2c/agenda/bright-festival/2026/plan_site_v2%201.pdf",
		},
		description: "Festival de lumière et d'art numérique ✨",
		image: {
			src: "https://www.visit.brussels/content/dam/visitbrussels/images/b2c/agenda/bright-festival/2026/oeuvres/floating-constellation-2.png/jcr:content/renditions/cq5dam.zoom.2048.2048.jpeg",
			alt: "Festival Bright Brussels,  Vision Nocturne - Verlinden Michaël (BE) - Galerie du Roi ",
		},
		tags: ["Brussels by night", "Art", "Bright in love"],
	},
	{
		id: "sat-bars",
		title: "Tournée des bars",
		location: {
			label: "Allons-y !",
			mapUrl:
				"https://www.google.com/maps/dir/Delirium+Caf%C3%A9,+Imp.+de+la+Fid%C3%A9lit%C3%A9+4,+1000+Bruxelles,+Belgique/Le+Cercueil+-+Bruxelles,+Rue+des+Harengs+10%2F12,+1000+Bruxelles,+Belgique/Fin+de+Si%C3%A8cle,+Rue+des+Chartreux+9,+1000+Bruxelles,+Belgique/La+Pharmacie+Anglaise,+Coudenberg+66,+1000+Bruxelles,+Belgique/@50.8464472,4.3476922,1101m/data=!3m2!1e3!4b1!4m26!4m25!1m5!1m1!1s0x47c3c380bd32d907:0x26e1f42d7ed8d292!2m2!1d4.3538834!2d50.8485002!1m5!1m1!1s0x47c3c47f44221f55:0xd53651d292eb058a!2m2!1d4.3532563!2d50.846959!1m5!1m1!1s0x47c3c387efb8839d:0x2ea70798a4083b6e!2m2!1d4.3470948!2d50.8489267!1m5!1m1!1s0x47c3c480a523a3ad:0xc53c7d6c2f550d8a!2m2!1d4.3585325!2d50.8432579!3e2?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D",
		},
		description:
			"No tomorrow! \n• Delirium (avec détour par Jeanneke Pis)\n• Le Cercueil\n• La Pharmacie Anglaise\nEt si on a faim avant le dernier : Fin de Siècle 🍻🍹",
		image: {
			src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fe/bb/48/cafe-brussels-basement.jpg?w=2000&h=-1&s=1",
			alt: "Bar Le Delirium à Bruxelles",
		},
		tags: ["Bars", "Cocktails", "Bruxelles by night"],
	},
];

const SPOTS_SUNDAY: Spot[] = [
	{
		id: "sun-pool-2",
		title: "Piscine — encore 😌",
		location: {
			label: "Allons-y !",
			mapUrl: "https://maps.app.goo.gl/EoPid5CQyNpuiGMK9",
		},
		description: "Piscine avec vue, juste pour nous deux, le retour 💦",
		image: {
			src: "https://agendabrussels2.imgix.net/caf541bf1638e08cc38b5c9f83614f5f93a90214.jpg?w=1200&h=664&fit=clip",
			alt: "Piscine d'hôtel",
		},
		tags: ["Piscine", "On n'est pas fatigué·es", "Plongeon sous les nuages"],
	},
	{
		id: "sun-breakfast",
		title: "Petit-déjeuner à l'hôtel",
		location: {
			label: "Allons-y !",
			mapUrl: "https://maps.app.goo.gl/EoPid5CQyNpuiGMK9",
		},
		description: "Late check-out baby! ☕💗",
		image: {
			src: "https://images2.bovpg.net/fw2x/media/1/9/4/1/2/941237.jpg",
			alt: "Petit-déjeuner d'hôtel avec viennoiseries et boissons",
		},
		tags: ["MANGER", "FAIM", "Sieste post-petit-déj"],
	},
];

type Option = {
	id: string;
	title: string;
	desc: string;
	emoji: string;
	image: { src: string; alt: string };
	websiteUrl?: string;
};

const SUNDAY_OPTIONS: Option[] = [
	{
		id: "opt-argos",
		title: "ARGOS",
		desc: "Option art contemporain — on se laisse surprendre",
		emoji: "🎥",
		image: {
			src: "https://visit.argosarts.org/img/logo-baseline-ARGOS.jpg",
			alt: "Logo musée Argos, art contemporain",
		},
		websiteUrl: "https://visit.argosarts.org/",
	},
	{
		id: "opt-magritte",
		title: "Musée Magritte",
		desc: "Option surréalisme — ceci n'est pas une pipe",
		emoji: "🎩",
		image: {
			src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiklj84JDFkmR8HyrzQRavslsQdZbm238KVMAh63E1rdmmEuninw8292CWQ1pRbvvQu9jASziA-idNpadJ1xqwf8rXCnKA7Kih02YgKDTfPucf7qrDOyJ0093mgP-8HtpiSrwXvd4X96xWm/w640-h355/Rene%25CC%2581-Magritte-Son-of-man-foto-Magritte-Museum-Brussel.jpg",
			alt: "Œuvre de Magritte",
		},
		websiteUrl:
			"https://musee-magritte-museum.be/fr/activites/2026/02/15/visite-decouverte-du-musee-magritte-fr-14",
	},
	{
		id: "opt-botanical",
		title: "Jardin botanique",
		desc: "Option balade verte — respirer, marcher, se poser",
		emoji: "🌿",
		image: {
			src: "https://gardens.brussels/sites/default/files/styles/gallery_lg/public/2025-05/IMG_0875_0.jpg.webp?itok=6iSwv3Ae",
			alt: "Jardin botanique",
		},
		websiteUrl: "https://gardens.brussels/fr/espaces-verts/jardin-botanique",
	},
	{
		id: "opt-eu",
		title: "Parlement européen (quartier européen)",
		desc: "Option découverte — on flâne dans le quartier",
		emoji: "🇪🇺",
		image: {
			src: "https://media.lesechos.com/api/v1/images/view/5fc6787e3e45460cce449f16/1280x720/06166610280-web-tete.jpg",
			alt: "Bâtiment du quartier européen",
		},
	},
];

export default function ValentineRevealed() {
	return (
		<main className="vrPage">
			<header className="vrHero">
				<p className="vrKicker">Bruxelles nous voilà</p>
				<h1 className="vrTitle">Notre programme 💘</h1>
				<p className="vrLead">Above the clouds with you ✨</p>
			</header>

			<section className="vrSection" aria-label="Saturday itinerary">
				<h2 className="vrSectionTitle">Samedi</h2>

				<ol className="vrTimeline">
					{SPOTS_SATURDAY.map((spot) => (
						<li key={spot.id} className="vrItem">
							<article className="vrCard">
								<div className="vrMedia">
									<img
										className="vrImg"
										src={spot.image.src}
										alt={spot.image.alt}
										loading="lazy"
									/>
								</div>

								<div className="vrBody">
									<div className="vrTopline">
										<h3 className="vrSpotTitle">{spot.title}</h3>
										<a
											className="vrLocationLink"
											href={spot.location.mapUrl}
											target="_blank"
											rel="noreferrer"
											aria-label={`Open ${spot.location.label} on Google Maps`}
										>
											📍 {spot.location.label}
										</a>{" "}
									</div>

									<p className="vrDesc">{spot.description}</p>

									{spot.tags?.length ? (
										<ul className="vrTags" aria-label="Tags">
											{spot.tags.map((t) => (
												<li key={t} className="vrTag">
													{t}
												</li>
											))}
										</ul>
									) : null}

									{spot.cta ? (
										<p className="vrActions">
											<a
												className="vrLink"
												href={spot.cta.href}
												target="_blank"
												rel="noreferrer"
											>
												{spot.cta.label} →
											</a>
										</p>
									) : null}
								</div>
							</article>
						</li>
					))}
				</ol>
			</section>

			<section className="vrSection" aria-label="Sunday itinerary">
				<h2 className="vrSectionTitle">Dimanche</h2>

				<ol className="vrTimeline">
					{SPOTS_SUNDAY.map((spot) => (
						<li key={spot.id} className="vrItem">
							<article className="vrCard">
								<div className="vrMedia">
									<img
										className="vrImg"
										src={spot.image.src}
										alt={spot.image.alt}
										loading="lazy"
									/>
								</div>

								<div className="vrBody">
									<div className="vrTopline">
										<h3 className="vrSpotTitle">{spot.title}</h3>
										<a
											className="vrLocationLink"
											href={spot.location.mapUrl}
											target="_blank"
											rel="noreferrer"
											aria-label={`Open ${spot.location.label} on Google Maps`}
										>
											📍 {spot.location.label}
										</a>{" "}
									</div>

									<p className="vrDesc">{spot.description}</p>

									{spot.tags?.length ? (
										<ul className="vrTags" aria-label="Tags">
											{spot.tags.map((t) => (
												<li key={t} className="vrTag">
													{t}
												</li>
											))}
										</ul>
									) : null}
								</div>
							</article>
						</li>
					))}
				</ol>
			</section>

			<section className="vrSection" aria-label="Sunday options">
				<h2 className="vrSectionTitle">Dimanche — au choix</h2>
				<p className="vrLead" style={{ textAlign: "left", marginTop: 0 }}>
					Musée, balade ou politique ✨
				</p>

				<ul className="vrOptions" aria-label="Options">
					{SUNDAY_OPTIONS.map((opt) => (
						<li key={opt.id} className="vrOptionItem">
							<article className="vrOptionCard">
								<div className="vrOptionMedia">
									<img
										className="vrOptionImg"
										src={opt.image.src}
										alt={opt.image.alt}
										loading="lazy"
									/>
									<div className="vrOptionEmoji" aria-hidden="true">
										{opt.emoji}
									</div>
								</div>
								<div className="vrOptionBody">
									<h3 className="vrOptionTitle">{opt.title}</h3>
									<p className="vrOptionDesc">{opt.desc}</p>
								</div>
							</article>
						</li>
					))}
				</ul>
			</section>

			<footer className="vrFooter">
				<p className="vrFooterText">
					Le meilleur endroit du week-end : là où tu es 💗
				</p>
			</footer>
		</main>
	);
}
