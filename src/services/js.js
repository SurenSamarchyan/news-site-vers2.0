import ReactDOM from 'react-dom';
import React from "react";
import {useState} from 'react';
// Data
import newsListObject from "./newsObject";
// Component
import Card from "./components/card";

import Input from "./components/input";


//Style
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import './index.css'

function HomePage() {
	/*	const [inputValue, setInputValue ] = useState('');
		const handleInputChanges = (event)=>{
			setInputValue(event.target.value)
			//getNews().then(data=>{setNews(data)});
		}*/
	
	
	/*<input onChange={handleInputChanges}>
	</input>
	<Input />
	<div>{inputValue}</div>*/
	return (
		<div>
			<Input/>
			<div id='news-container' className='container-fluid'>
				<Row>
					{newsListObject.articles.map((news, index) => {
						return (
							<Card
								key={index}
								cardIndex={index}
								url={news.url}
								title={news.title}
								urlToImage={news.urlToImage}
								description={news.description}
							/>
						)
					})}
				</Row>
			</div>
		</div>
	)
}

ReactDOM.render(
	<HomePage/>,
	document.getElementById('root')
);


import React, {useState} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'


function Input() {
	const [inputValue, setInputValue] = useState('');
	const handleInputChanges = (event) => {
		setInputValue(event.target.value)
		const [storageNews, setStorageNews] = useState({})
		
		//getNews().then(data=>{setNews(data)})
	}
	return (
		<div>
			<input onChange={handleInputChanges}/>
			<div>{inputValue}</div>
		</div>
	)
}

export default Input;


{
	"status"
:
	"ok", "totalResults"
:
	128, "articles"
:
	[{
		"source": {"id": "liberation", "name": "Libération"},
		"author": "Isabelle Hanne",
		"title": "Convention républicaine : Make Trump Candidate Again",
		"description": "Le président américain sera officiellement réinvesti lors de l'événement qui a lieu à partir de ce lundi. Malgré une base militante acquise, plusieurs élites du parti ont annoncé qu'elles voteront en novembre pour son adversaire démocrate, Joe Biden.",
		"url": "http://www.liberation.fr/planete/2020/08/24/convention-republicaine-make-trump-candidate-again_1797476",
		"urlToImage": "https://medias.liberation.fr/photo/1331897-democratic-national-convention.jpg?modified_at=1598198437&amp;picto=fb&amp;ratio_x=191&amp;ratio_y=100&amp;width=1080",
		"publishedAt": "2020-08-24T07:01:42Z",
		"content": "Après une semaine de convention démocrate, où les figures du parti, le candidat à la présidentielle Joe Biden en tête, nont eu de cesse de présenter Donald Trump comme une «menace existentielle pour … [+5788 chars]"
	}, {
		"source": {"id": "svenska-dagbladet", "name": "Svenska Dagbladet"},
		"author": "Tina Magnergård Bjers / TT",
		"title": "Nu ska Republikanerna hylla Donald Trump",
		"description": "En hyllad FN-ambassadör, en abortmotståndare, förespråkare för rätten att bära vapen och så klart familjen Trump. Det är dags för Republikanernas partifest, det fyra dagar långa konvent då den sittande presidenten formellt utses till presidentkandidat.",
		"url": "https://www.svd.se/nu-ska-republikanerna-hylla-donald-trump",
		"urlToImage": "https://svd.vgc.no/v2/images/f098a748-8c2c-4ade-9a47-0152c56fbcfd?h=630&q=80&upscale=true&w=1200&s=0bcd35e01138c27b76c6b32d9a296389efc34fdd",
		"publishedAt": "2020-08-24T06:10:52Z",
		"content": "Liksom Demokraterna har Republikanerna tvingats ändra planerna för sitt jättemöte på grund av viruspandemin. Vad som ursprungligen skulle ha varit en glittrande och flaggprydd tillställning i Charlot… [+430 chars]"
	}, {
		"source": {"id": "financial-times", "name": "Financial Times"},
		"author": null,
		"title": "Kellyanne Conway to leave White House before election",
		"description": "Loyal Trump aide announces resignation to focus on family on eve of Republican convention",
		"url": "https://www.ft.com/content/4ee1b46b-430e-470f-b711-296b4e281566",
		"urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ff4aebd10-3136-45c6-b3d9-1dca0d8f785b.jpg?source=next-opengraph&fit=scale-down&width=900",
		"publishedAt": "2020-08-24T06:07:32.1755404Z",
		"content": "Kellyanne Conway, one of Donald Trump’s longest-serving and most loyal aides, announced on the eve of the Republican convention that she would leave the White House at the end of the month.\r\nMs Conwa… [+2349 chars]"
	}, {
		"source": {"id": "financial-times", "name": "Financial Times"},
		"author": null,
		"title": "US election: a divided Republican party questions Trump legacy",
		"description": "The president is behind in the polls but he will remain a divisive presence in American politics even if Biden wins",
		"url": "https://www.ft.com/content/1521cb7b-44fe-47f3-bdac-92372a8ef129",
		"urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fbecab05f-0306-43dc-9068-4b8721d1a201.jpg?source=next-opengraph&fit=scale-down&width=900",
		"publishedAt": "2020-08-24T06:07:26.0520638Z",
		"content": "Donald Trump turned heads last week when he praised people who adhere to the QAnon conspiracy theory that claims Satan-worshipping paedophiles in powerful positions around the globe are gunning for t… [+13034 chars]"
	}, {
		"source": {"id": "cnn-es", "name": "CNN Spanish"},
		"author": "CNN",
		"title": "La hermana de Trump critica al presidente en conversaciones grabadas en secreto por su sobrina Mary Trump",
		"description": "Maryanne Trump Barry criticó amargamente a su hermano, el presidente de Estados Unidos, Donald Trump, y pareció confirmar las acusaciones anteriores de su sobrina Mary Trump de que el mandatario te…",
		"url": "https://cnnespanol.cnn.com/2020/08/24/la-hermana-de-trump-critica-al-presidente-en-conversaciones-grabadas-en-secreto-por-su-sobrina-mary-trump/",
		"urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2020/08/CNN-Maryanne-Trump-Barry.jpg?quality=100&strip=info",
		"publishedAt": "2020-08-24T05:59:07Z",
		"content": "Sobrina de Trump pide la renuncia del presidente 1:36\r\n(CNN) — Maryanne Trump Barry criticó amargamente a su hermano, el presidente de Estados Unidos, Donald Trump, diciendo: «Donald está a favor de … [+6018 chars]"
	}, {
		"source": {"id": "der-tagesspiegel", "name": "Der Tagesspiegel"},
		"author": null,
		"title": "Mindestens ein Dutzend Tote durch Tropensturm Laura",
		"description": "Tropensturm Laura richtet mit Geschwindigkeiten von 110 Kilometern pro Stunde massive Schäden an. US-Präsident Trump warnt.",
		"url": "https://www.tagesspiegel.de/gesellschaft/panorama/haiti-und-dominikanische-republik-mindestens-ein-dutzend-tote-durch-tropensturm-laura/26121108.html",
		"urlToImage": "https://www.tagesspiegel.de/images/people-take-belongings-out-of-their-homes-after-they-got-wet-due-to-rains-amid-tropical-storm-laura-in-santo-domingo-on-august-23-2020-tropical-storm-laura-hammered-hispaniola-island-with-heavy-rain-killing-at-least-three-people-in-the-dominican-republic-and-five-in-haiti-and-was-set-to-become/26121114/1-format530.jpg",
		"publishedAt": "2020-08-24T05:55:01+00:00",
		"content": "Die Zahl der Toten durch Tropensturm Laura ist weiter gestiegen. In Haiti und der Dominikanischen Republik kamen nach Angaben der Behörden vom Sonntag insgesamt mindestens zwölf Menschen ums Leben. D… [+2290 chars]"
	}, {
		"source": {"id": "abc-news-au", "name": "ABC News (AU)"},
		"author": "Peter Marsh",
		"title": "Donald Trump will speak on every night of the 2020 Republican National Convention. Here's who else will appear",
		"description": "The 2020 Republican National Convention begins tomorrow. Here's your guide to the most important speeches to watch at the four-day festival, before Donald Trump steps up on Friday.",
		"url": "http://www.abc.net.au/news/2020-08-24/how-to-watch-the-republican-national-convention/12588106",
		"urlToImage": "https://www.abc.net.au/cm/rimage/12588878-16x9-large.jpg?v=2",
		"publishedAt": "2020-08-24T05:51:06Z",
		"content": "The first half of the convention season in US politics has played out.\r\nLast week, the Democrats held their nominating convention, officially recognising former vice-president Joe Biden as their cand… [+6559 chars]"
	}, {
		"source": {"id": "rte", "name": "RTE"},
		"author": "Brian O'Donovan",
		"title": "Trump supporters set their sights on election day",
		"description": "The city of Charlotte in North Carolina will play host to the Republican National Convention this week.",
		"url": "https://www.rte.ie/news/world/2020/0824/1160876-trump-republicans/",
		"urlToImage": "https://img.rasset.ie/00150c4d-1600.jpg",
		"publishedAt": "2020-08-24T05:40:53Z",
		"content": "The city of Charlotte in North Carolina will play host to the Republican National Convention this week.\r\nLike the Democrats' event last week, the Republican Convention will be largely virtual, but de… [+2040 chars]"
	}, {
		"source": {"id": "der-tagesspiegel", "name": "Der Tagesspiegel"},
		"author": "Ruth Ciesinger",
		"title": "Trumps langjährige Beraterin Kellyanne Conway wirft hin",
		"description": "Der US-Präsident verliert seine Beraterin und Wahlkampfmanagerin von 2016. Conway und ihr Mann - ein Trump-Gegner, wollen sich \"auf die Kinder konzentrieren\".",
		"url": "https://www.tagesspiegel.de/politik/familie-statt-us-wahlkampf-trumps-langjaehrige-beraterin-kellyanne-conway-wirft-hin/26121038.html",
		"urlToImage": "https://www.tagesspiegel.de/images/file-photo-white-house-adviser-kellyanne-conway-speaks-to-reporters-at-the-white-house-in-washington/26121040/1-format530.jpg",
		"publishedAt": "2020-08-24T05:35:14+00:00",
		"content": "Kellyanne Conway war schon 2016 Donald Trumps Wahlkampfmanagerin und seit seinem Amtsantritt 2017 als eine der engsten Beraterinnen des US-Präsidenten im Weißen Haus mit dabei. Doch jetzt hat Conway … [+2629 chars]"
	}, {
		"source": {"id": "handelsblatt", "name": "Handelsblatt"},
		"author": "ap, Reuters",
		"title": "Kellyanne Conway verlässt das Weiße Haus und Trump",
		"description": "Kellyanne Conway galt lange als eine der wichtigsten Beraterinnen für US-Präsident Donald Trump und leitete den Wahlkampf 2016. Nun zieht sie sich zurück.",
		"url": "https://www.handelsblatt.com/politik/international/us-wahlkampf-trump-beraterin-kellyanne-conway-verlaesst-das-weisse-haus/26121054.html",
		"urlToImage": "https://www.handelsblatt.com/images/kellyanne-conway/26121062/2-format2003.jpg",
		"publishedAt": "2020-08-24T05:24:07+00:00",
		"content": "Kellyanne ConwayDie Trump-Beraterin zieht sich zurück.\r\n(Foto: AFP) \r\nWashington Kellyanne Conway, einflussreiche und langjährige Beraterin von US-Präsident Donald Trump, verlässt das Weiße Haus. Sie… [+1239 chars]"
	}, {
		"source": {"id": "rte", "name": "RTE"},
		"author": "RTÉ News",
		"title": "White House adviser Conway to leave at end of August",
		"description": "White House adviser Kellyanne Conway has said she will be leaving the administration of US President Donald Trump at the end of August, citing the need to focus on her family.",
		"url": "https://www.rte.ie/news/world/2020/0824/1160872-conway-white-house/",
		"urlToImage": "https://img.rasset.ie/00150c46-1600.jpg",
		"publishedAt": "2020-08-24T05:23:16Z",
		"content": "White House adviser Kellyanne Conway has said she will be leaving the administration of US President Donald Trump at the end of August, citing the need to focus on her family.\r\n\"I will be transitioni… [+1804 chars]"
	}, {
		"source": {"id": "al-jazeera-english", "name": "Al Jazeera English"},
		"author": "Al Jazeera",
		"title": "Top Trump adviser Kellyanne Conway leaving White House job",
		"description": "Departure of White House adviser, who managed Trump's successful 2016 campaign, comes just two months before elections.",
		"url": "http://www.aljazeera.com/news/2020/08/top-trump-adviser-kellyanne-conway-leaving-white-house-job-200824034326218.html",
		"urlToImage": "https://www.aljazeera.com/mritems/Images/2020/8/24/589104e8537c43ac945ce1666bdcdd08_18.jpg",
		"publishedAt": "2020-08-24T04:49:00Z",
		"content": "White House adviser Kellyanne Conway has announced that she will be leaving the administration of US President Donald Trump at the end of August, citing the need to focus on her family.\r\n\"I will be t… [+2706 chars]"
	}, {
		"source": {"id": "rtl-nieuws", "name": "RTL Nieuws"},
		"author": "RTL Nieuws",
		"title": "Deze week houden de Republikeinen een partijcongres, maar waarom?",
		"description": "Een week na de partijconventie van de Democraten begint vandaag het congres van de Republikeinse partij. President Trump zal aan het einde daarvan, op donderdag, de nominatie van zijn partij aanvaarden. Zes vragen aan correspondent Erik Mouthaan over het hoe …",
		"url": "https://www.rtlnieuws.nl/nieuws/buitenland/artikel/5179030/republikeinse-conventie-trump-presidentskandidaat-mouthaan",
		"urlToImage": "https://www.rtlnieuws.nl/sites/default/files/styles/liggend_hoge_resolutie/public/content/images/2020/07/15/000_1V70GC.jpg?itok=ur8_weaI",
		"publishedAt": "2020-08-24T04:44:05+00:00",
		"content": "Mensen die Trump heten. Naast de president spreken zijn vrouw, zijn dochter, zijn zoon, zijn andere zoon en zijn andere dochter. Natuurlijk geeft ook de vicepresident een speech. En de fractievoorzit… [+264 chars]"
	}, {
		"source": {"id": "les-echos", "name": "Les Echos"},
		"author": "Nicolas Rauline",
		"title": "Avec la convention républicaine, Donald Trump abat ses dernières cartes",
		"description": "Après l'investiture démocrate de Joe Biden la semaine dernière, c'est Donald Trump qui doit être officiellement choisi cette semaine par le parti républicain. La convention se déroulera en partie en public, en partie sur Internet. L'occasion pour le président…",
		"url": "https://www.lesechos.fr/monde/etats-unis/avec-la-convention-republicaine-donald-trump-abat-ses-dernieres-cartes-1234510",
		"urlToImage": "https://media.lesechos.com/api/v1/images/view/5f4343f83e45461ed4046f84/1280x720/0603781389315-web-tete.jpg",
		"publishedAt": "2020-08-24T04:37:20Z",
		"content": "Après Joe Biden jeudi soir, c'est cette semaine au tour de Donald Trump d'être officiellement investi par son parti pour l'élection présidentielle du 3 novembre. Ce lundi débute la convention républi… [+4054 chars]"
	}, {
		"source": {"id": "nrk", "name": "NRK"},
		"author": null,
		"title": "Trumps rådgiver Kellyanne Conway slutter",
		"description": "Kellyanne Conway slutter som president Donald Trumps politiske rådgiver av hensyn til familien, ifølge The Washington Post.",
		"url": "https://www.nrk.no/urix/trumps-radgiver-kellyanne-conway-slutter-1.15132872",
		"urlToImage": "https://gfx.nrk.no/cqITFJ-HF_IdZBj0FUj3VwVnyjDQxjjjYddnReS7J1xw.jpg",
		"publishedAt": "2020-08-24T04:35:13Z",
		"content": "Conway har vært en av Trumps lengstsittende og nærmeste rådgivere.\r\n Dette er mitt valg, helt og holdent. Med tiden vil jeg kunngjøre mine fremtidige planer, skriver Conway i en uttalelse gjengitt av… [+1364 chars]"
	}, {
		"source": {"id": "focus", "name": "Focus"},
		"author": "FOCUS Online",
		"title": "US-Politik: Trump verliert eine seiner wichtigsten Beraterinnen vor Wahl",
		"description": "US-Politik im News-Ticker: Kurz vor der US-Wahl wurde jetzt ein  heimlich aufgezeichnetes Privatgespräch veröffentlicht, in dem die Schwester von US-Präsident Donald Trump, Maryanne Trump Barry, den US-Präsidenten stark kritisiert. Alles Wichtige zur US-Polit…",
		"url": "https://www.focus.de/politik/ausland/us-politik-im-news-ticker-trump-verliert-eine-seiner-wichtigsten-beraterinnen-vor-wahl_id_12301088.html",
		"urlToImage": "https://p5.focus.de/img/fotos/crop10828000/0362719819-w1200-h627-o-q75-p5/urn-newsml-dpa-com-20090101-190614-99-650196-large-4-3.jpg",
		"publishedAt": "2020-08-24T04:28:39Z",
		"content": "US-Politik im News-Ticker: Kurz vor der US-Wahl wurde jetzt ein  heimlich aufgezeichnetes Privatgespräch veröffentlicht, in dem die Schwester von US-Präsident Donald Trump, Maryanne Trump Barry, den … [+14137 chars]"
	}, {
		"source": {"id": "the-washington-post", "name": "The Washington Post"},
		"author": null,
		"title": "Live updates: Scientists express doubt about coronavirus treatment touted as breakthrough by Trump",
		"description": "“The urgency of the crisis has elided with a false sense we should skip over rigorous studies of interventions because we don’t have enough time,” Peter Bach, director of Memorial Sloan Kettering’s Center for Health Policy and Outcomes, told The Washington Po…",
		"url": "https://www.washingtonpost.com/nation/2020/08/24/coronavirus-covid-live-updates-us/",
		"urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-23-2020/t_dcef2c20625e4a598df252f3fe05f9d8_name_plasma_scaled.jpg&w=1440",
		"publishedAt": "2020-08-24T04:23:47Z",
		"content": "President Trump announced Sunday that he had helped break through a regulatory logjam to grant emergency authorization of convalescent plasma to treat covid-19, a powerful therapy that he claimed had… [+853 chars]"
	}, {
		"source": {"id": "the-washington-post", "name": "The Washington Post"},
		"author": null,
		"title": "Live updates: Scientists express doubts about coronavirus treatment touted as breakthrough by Trump",
		"description": "“The urgency of the crisis has elided with a false sense we should skip over rigorous studies of interventions because we don’t have enough time,” Peter Bach, director of Memorial Sloan Kettering’s Center for Health Policy and Outcomes, told The Washington Po…",
		"url": "https://www.washingtonpost.com/nation/2020/08/24/coronavirus-covid-live-updates-us/#link-K3SKXZBJLZH3BL6FSOBJK534C4",
		"urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-23-2020/t_dcef2c20625e4a598df252f3fe05f9d8_name_plasma_scaled.jpg&w=1440",
		"publishedAt": "2020-08-24T04:23:47Z",
		"content": "President Trump announced Sunday that he had helped break through a regulatory logjam to grant emergency authorization of convalescent plasma to treat covid-19, a powerful therapy that he claimed had… [+853 chars]"
	}, {
		"source": {"id": "the-washington-post", "name": "The Washington Post"},
		"author": null,
		"title": "Live updates: Scientists express doubts about coronavirus treatment touted as breakthrough by Trump",
		"description": "“The urgency of the crisis has elided with a false sense we should skip over rigorous studies of interventions because we don’t have enough time,” Peter Bach, director of Memorial Sloan Kettering’s Center for Health Policy and Outcomes, told The Washington Po…",
		"url": "https://www.washingtonpost.com/nation/2020/08/24/coronavirus-covid-live-updates-us/#link-KUC26DGNRFAC7K3ZSUQ4HJFRCE",
		"urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-23-2020/t_dcef2c20625e4a598df252f3fe05f9d8_name_plasma_scaled.jpg&w=1440",
		"publishedAt": "2020-08-24T04:23:47Z",
		"content": "President Trump announced Sunday that he had helped break through a regulatory logjam to grant emergency authorization of convalescent plasma to treat covid-19, a powerful therapy that he claimed had… [+853 chars]"
	}, {
		"source": {"id": "the-washington-post", "name": "The Washington Post"},
		"author": null,
		"title": "Live updates: Scientists express doubt about coronavirus treatment touted as breakthrough by Trump",
		"description": "“The urgency of the crisis has elided with a false sense we should skip over rigorous studies of interventions because we don’t have enough time,” Peter Bach, director of Memorial Sloan Kettering’s Center for Health Policy and Outcomes, told The Washington Po…",
		"url": "https://www.washingtonpost.com/nation/2020/08/24/coronavirus-covid-live-updates-us/#link-OMA4ICDRRJFL7CIHGYT4A7AYH4",
		"urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-23-2020/t_dcef2c20625e4a598df252f3fe05f9d8_name_plasma_scaled.jpg&w=1440",
		"publishedAt": "2020-08-24T04:23:47Z",
		"content": "President Trump announced Sunday that he had helped break through a regulatory logjam to grant emergency authorization of convalescent plasma to treat covid-19, a powerful therapy that he claimed had… [+853 chars]"
	}]
}








