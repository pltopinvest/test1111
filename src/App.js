import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './layouts/header.jsx';
import Main from './pages/main.jsx';
import Guide from './pages/guide.jsx';
import Contacts from './pages/contacts.jsx';
import Footer from './layouts/footer.jsx';
import Switcher from './components/switcher.jsx';
import Context from './context/context';
import './App.css';

class App extends Component {
  state = {
    languageApp: 'ENG',
    navLinks: [
        {
          lang: 'ENG',
          link1: 'Guide',
          link1Route: '/guide',
          link2: 'Contacts',
          link2Route: '/contacts'
        },
        {
          lang: 'DE',
          link1: 'Leiten',
          link1Route: '/guide',
          link2: 'Kontakte',
          link2Route: '/contacts'
        },
        {
          lang: 'FI',
          link1: 'Opas',
          link1Route: '/guide',
          link2: 'Yhteydet',
          link2Route: '/contacts'
        }
      ],
      contacts:[
        {
          lang:'ENG',
          title: 'Contacts',
          labelName:'Your name',
          placeholderName:'Name',
          labelEmail:'Your email',
          placeholderEmail:'Email',
          labelMessage:'Your message',
          placeholderMessage:'Message',
          buttonText:'Send'
        },
        {
          lang:'DE',
          title: 'Kontakte',
          labelName:'Dein Name',
          placeholderName:'Name',
          labelEmail:'Dein email',
          placeholderEmail:'Email',
          labelMessage:'Deine Nachricht',
          placeholderMessage:'Nachricht',
          buttonText:'Senden'
        },
        {
          lang:'FI',
          title: 'Yhteydet',
          labelName:'Sinun nimesi',
          placeholderName:'nimesi',
          labelEmail:'Sinun email',
          placeholderEmail:'Email',
          labelMessage:'Viestisi',
          placeholderMessage:'Viestisi',
          buttonText:'Lähettää'
        }
      ],
    sidebarItems: [
      {
        lang: 'ENG',
        title: 'The 5 best Android smartphones for under $300'
      },
      {
        lang: 'ENG',
        title: 'The best true wireless earbuds you can buy in 2019',
      },
      {
        lang: 'DE',
        title: 'Die 5 besten Android-Smartphones für unter 300 US-Dollar'
      },
      {
        lang: 'DE',
        title: 'Die besten echten kabellosen Ohrhörer, die Sie 2019 kaufen können'
      },
      {
        lang: 'FI',
        title: '5 parasta Android-älypuhelinta alle 300 dollaria'
      },
      {
        lang: 'FI',
        title: 'Parhaimmat tosi langattomat korvakuulokkeet, joita voit ostaa vuonna 2019'
      }
    ],
    guideContent: [
      {
        lang: 'ENG',
        mainTitle: "Build your reputation in the world's largest Android community",
        title1: 'What is your level?',
        text1: "The number next to every user's profile picture is the level of that user. By helping and contributing to the community, you increase your level.The higher your level, the more reputation you have in the community.",
        title2: "How to get points",
        text2: "All you need to do is make your posts or comments helpful, insightful, funny or positive and you'll get upvotes. For each upvote you'll get 50 points!",
        title3: "Summary of your points",
        text3: "When you visit your own user profile you'll see an overview of your activities. The numbers show you how often each event has occurred. The bars display the proportions of these activities to your overall activity."
      },
      {
        lang: 'DE',
        mainTitle: "Bauen Sie Ihren Ruf in der weltweit größten Android-Community auf",
        title1: 'Was ist dein Level?',
        text1: "Die Zahl neben dem Profilbild jedes Benutzers ist die Ebene dieses Benutzers. Indem Sie helfen und einen Beitrag zur Community leisten, steigern Sie Ihr Level. Je höher Ihr Level, desto mehr Ansehen haben Sie in der Community.",
        title2: "Wie bekomme ich Punkte?",
        text2: "Alles, was Sie tun müssen, ist, Ihre Posts oder Kommentare hilfreich, aufschlussreich, lustig oder positiv zu gestalten, und Sie erhalten positive Stimmen. Für jede positive Bewertung erhalten Sie 50 Punkte!",
        title3: "Zusammenfassung Ihrer Punkte",
        text3: "Wenn Sie Ihr eigenes Benutzerprofil besuchen, sehen Sie eine Übersicht Ihrer Aktivitäten. Die Zahlen zeigen Ihnen, wie oft jedes Ereignis aufgetreten ist. In den Balken werden die Anteile dieser Aktivitäten an Ihrer Gesamtaktivität angezeigt."
      },
      {
        lang: 'FI',
        mainTitle: "Rakenna mainettasi maailman suurimmassa Android-yhteisössä",
        title1: 'Mikä on tasosi?',
        text1: "Jokaisen käyttäjän profiilikuvan vieressä oleva numero on käyttäjän taso. Auttamalla ja myötävaikuttamalla yhteisöön nostat tasoasi. Mitä korkeampi tasosi, sitä enemmän maineesi sinulla on yhteisössä.",
        title2: "Kuinka saada pisteitä",
        text2: "Ainoa mitä sinun täytyy tehdä, on tehdä viesteistäsi tai kommentteistasi hyödyllisiä, oivallisia, hauskoja tai positiivisia ja saat positiivisia ääniä. Jokaisesta äänestyksestä saat 50 pistettä!",
        title3: "Yhteenveto huomioistasi",
        text3: "When you visit your own user profile you'll see an overview of your activities. The numbers show you how often each event has occurred. The bars display the proportions of these activities to your overall activity."
      }
    ],
    mainTitle: [
      {
        lang: 'ENG',
        text: 'Feast your eyes on the Android games with the best graphics'
      },
      {
        lang: 'DE',
        text: 'Bewundern Sie die Android-Spiele mit der besten Grafik'
      },
      {
        lang: 'FI',
        text: 'Nauti silmäsi Android-peleistä parhaalla grafiikalla'
      }
    ],
    articles: [
        { 
          lang: 'ENG',
          title: 'Nimian Legends: BrightRidge',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textPrev: 'This single-dev project has been a long time in the making, but still offers one of the most graphically impressive titles on Android to date. This open-world adventure game offers an extensive settings menu to dial up graphical fidelity to suit your smartphones, and the maximum quality on high-end smartphones can be breathtaking.',
          textNext: "Nimian Legends: Brightridge offers a couple of story modes to play through this lush fantasy world. There are quests to complete and enemies to overcome, and it's also possible to free- roam the game's environment, taking snapshots and shapeshifting your character from different types of humans to creatures like wolves, butterflies, birds or even mighty dragons and Lord of the Rings style tree-men. For 3 bucks with no in-app purchases, there's plenty of keep you entertained, whether you like a challenge or just want to casually explore and discover the beautiful game areas",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'ENG',
          title: 'Returner 77',
          link: 'https://play.google.com/store/apps/details?id=com.FantasticYes.Returner77',
          textPrev: "Puzzle games aren't usually known for their fantastic visuals, but Returner 77 is a headscratcher that packages its conundrums in an absolutely beautiful sci-fi world set in a futuristic Earth after an alien invasion. You're tasked with exploring an alien spaceship - you have to figure out how to operate advanced technology with the potential to restore the human race.",
          url: 'https://www.youtube.com/embed/-RiFQTrOp2U',
          textNext: "While the story provides plenty of atmosphere, it's mainly an excuse to pose some puzzles for you to ponder (seriously, do the aliens really need such complicated doors?). The alien technology in question is built around crystals and light projections which are portrayed with plenty of graphical flourish. The game costs $4.99 , but if that sounds like a lot you can download a demo version and try the first two levels for free.",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'ENG',
          title: 'Asphalt 9: Legends',
          link: 'https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM',
          url: 'https://www.youtube.com/embed/4_2EIOvFNtY',
          textPrev: "Gameloft's Asphalt series has established the standard for realistic-looking racing games on Android. The latest iteration, Asphalt 9: Legends, certainly doesn't disappoint when it comes to visuals, featuring the prettiest vehicles for you to live out your automotive fantasies. The wide selection of famous cars (about 50) includes Ferrari, Porsche, Lamborghini and more. Collect prized models such as the Aston Martin Vulcan, Ford GT, Nissan GT-R Nismo, Ferrari 488 GTB, LaFerrari and the McLaren P1, and then drive them around exotic locales. Don't worry about hurting your beautiful car though, Asphalt 9 Legends still encourages aggressive, hi-octane racing where you'll slam your rivals off-road, but always look good while doing it.",
          textNext: "Gameloft has perfected racing with touch controls, and the incredible graphics really give you an immersive feeling as you speed along the tracks and admire your car. As is tradition with this game series, you can download and play for free, but in-app purchases are there to tempt you if you want the coolest cars straight away.",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'ENG',
          title: 'Darkness Rises',
          link: 'https://play.google.com/store/apps/details?id=com.nexon.da3.global',
          textPrev: "We all know the stereotype of the shallow person who you can't help but like because they are seriously really good-looking. Darkness Rises is a free-to-play action RPG that fits this to a T. It's far from the deepest RPG out there - the world is generic and story/levels are basically on-rails, but boy does it have eye-candy in spades.",
          url: 'https://www.youtube.com/embed/Prh1D9gp5Ig',
          textNext: "There are four archetypal classes to choose from: warrior, sorceress, assassin and barbarian. The game encourages you to have all four on the go. Each class has a different feel and playstyle, as well as different looking weapons and armor. Be warned...only your first character can have their 'beauty' fine-tuned for free (and only once)...after the first time, it costs in-game resources",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'ENG',
          title: 'Shadowgun Legends',
          link: 'https://play.google.com/store/apps/details?id=com.madfingergames.legends&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          url: 'https://www.youtube.com/embed/ZVWOD0AzO8E',
          textPrev: "Shadowgun Legends is the latest offering from Madfinger Games, the team behind the graphically impressive zombie apocalypse shooter Dead Trigger 2. It's a first person shooter that boasts beautiful, colorful visuals. Shadowgun Legends is a real treat for the eyes, with lush graphics and a futuristic setting that will remind gamers of classic AAA PC/console titles such as Destiny and Halo.",
          textNext: "The emphasis given to visuals fits in with the game's economic model, which offers in-app purchases for cosmetic items. However the meat of the game: an extensive single player campaign, as well as multiplayer, versus and co-op team challenges, still looks gorgeous without coughing up dough for the pimp-out loot. ",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'ENG',
          title: 'Tekken Mobile',
          link: 'https://play.google.com/store/apps/details?id=eu.bandainamcoent.tekkenmobile&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          textPrev: "Tekken Mobile brings the hugely popular fighting series to mobile, and looks real good doing it. While not the most technical fighting game out on Android, it's certainly the most graphically impressive.",
          url: 'https://www.youtube.com/embed/pp84Kt7CaDg',
          textNext: "Be warned, Bandai Namco's offering for mobile devices is a different beast from Tekken on other platforms. Nominally free, the game is full of micro-transactions and fiddly in-game currencies and stat-building. The sophisticated controls that characteristic the Tekken games have been scaled down to a limited repertoire of taps and swipes, with 2D movement only",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'ENG',
          title: 'Sdorica Sunset',
          link: 'https://play.google.com/store/apps/details?id=com.rayark.sdorica&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          textPrev: "Rayark is known for developing high quality premium paid mobile games, but Sdorica Sunset is the studio's take on that ubiquitous but much-maligned concept, the free-to-play mobile RPG. It's a genre oversaturated with poor-quality offerings, but fortunately, Sdorica Sunset manages to make the free-to-play model shine with a combination of charming design and well-crafted mechanics",
          url: 'https://www.youtube.com/embed/2aY7il7zuNk',
          textNext: "Battles involve a surprising amount of strategy - discovering what moves different matches perform for which character, and then deploying them at the right time, countering the enemy attack patterns or deploying a character's specific action when it has the most impact. ",
          linkText: 'Get it on the Play Store'
        },
        { 
          lang: 'DE',
          title: 'Nimian Legends: BrightRidge',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textPrev: 'Dieses Single-Dev-Projekt war lange in der Entwicklung, bietet aber immer noch einen der grafisch eindrucksvollsten Titel für Android. Dieses weltoffene Abenteuerspiel bietet ein umfangreiches Einstellungsmenü, mit dem Sie die Wiedergabetreue für Ihr Smartphone einstellen können. Die maximale Qualität von High-End-Smartphones ist atemberaubend.',
          textNext: "Nimian Legends: Brightridge bietet einige Story-Modi zum Durchspielen dieser üppigen Fantasiewelt. Es gibt Quests zu erledigen und Feinde zu überwinden, und es ist auch möglich, die Umgebung des Spiels frei zu durchstreifen, Schnappschüsse zu machen und deinen Charakter von verschiedenen Arten von Menschen zu Kreaturen wie Wölfen, Schmetterlingen, Vögeln oder sogar mächtigen Drachen und Herr der Ringe zu verändern Stil Baum-Männer. Für 3 Dollar ohne In-App-Käufe gibt es jede Menge Unterhaltung, egal ob Sie eine Herausforderung mögen oder einfach nur die schönen Spielbereiche erkunden und entdecken möchten",
          linkText: 'Laden Sie es im Play Store herunter'
        },
        {
          lang: 'DE',
          title: 'Returner 77',
          link: 'https://play.google.com/store/apps/details?id=com.FantasticYes.Returner77',
          textPrev: "Puzzlespiele sind normalerweise nicht für ihre fantastische Grafik bekannt, aber Returner 77 ist ein Headscratcher, der nach einer außerirdischen Invasion seine Rätsel in einer absolut schönen Science-Fiction-Welt in einer futuristischen Erde packt. Du musst ein außerirdisches Raumschiff erforschen - du musst herausfinden, wie man fortschrittliche Technologien einsetzt, mit denen die menschliche Rasse wiederhergestellt werden kann.",
          url: 'https://www.youtube.com/embed/-RiFQTrOp2U',
          textNext: "Während die Geschichte viel Atmosphäre bietet, ist es hauptsächlich eine Ausrede, um ein paar Rätsel zu stellen, über die Sie nachdenken können (im Ernst, brauchen die Außerirdischen wirklich so komplizierte Türen?). Die fragliche Alien-Technologie basiert auf Kristallen und Lichtprojektionen, die mit viel grafischem Glanz dargestellt werden. Das Spiel kostet 4,99 US-Dollar, aber wenn das viel klingt, können Sie eine Demoversion herunterladen und die ersten beiden Levels kostenlos ausprobieren.",
          linkText: 'Laden Sie es im Play Store herunter'
        },
        {
          lang: 'DE',
          title: 'Asphalt 9: Legends',
          link: 'https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM',
          url: 'https://www.youtube.com/embed/4_2EIOvFNtY',
          textPrev: "Gamelofts Asphalt-Serie hat den Standard für realistisch aussehende Rennspiele auf Android gesetzt. Die neueste Version, Asphalt 9: Legends, enttäuscht nicht, wenn es um Visuals geht. Sie enthält die schönsten Fahrzeuge, mit denen Sie Ihre automobilen Fantasien ausleben können. Die große Auswahl an berühmten Autos (ca. 50) umfasst Ferrari, Porsche, Lamborghini und mehr. Sammle begehrte Modelle wie den Aston Martin Vulcan, den Ford GT, den Nissan GT-R Nismo, den Ferrari 488 GTB, den LaFerrari und den McLaren P1 und fahre mit ihnen durch exotische Gegenden. Machen Sie sich keine Sorgen, Ihr schönes Auto zu verletzen. Asphalt 9 Legends fördert weiterhin aggressive Rennen mit hoher Oktanzahl, bei denen Sie Ihre Konkurrenten im Gelände schlagen, aber dabei immer gut aussehen.",
          textNext: "Gameloft hat den Rennsport mit Touch-Steuerung perfektioniert, und die unglaubliche Grafik vermittelt Ihnen ein beeindruckendes Gefühl, wenn Sie über die Rennstrecken rasen und Ihr Auto bewundern. Wie es bei dieser Spieleserie Tradition ist, können Sie sie kostenlos herunterladen und spielen, aber In-App-Käufe sind dazu da, Sie zu verführen, wenn Sie sofort die coolsten Autos wollen.",
          linkText: 'Laden Sie es im Play Store herunter'
        },
        {
          lang: 'DE',
          title: 'Darkness Rises',
          link: 'https://play.google.com/store/apps/details?id=com.nexon.da3.global',
          textPrev: "Wir alle kennen das Stereotyp einer seichten Person, der man nur zustimmen kann, weil sie wirklich gut aussieht. Darkness Rises ist ein kostenloses Action-Rollenspiel, das zu einem T passt. Es ist weit davon entfernt, das tiefste Rollenspiel der Welt zu sein - die Welt ist generisch und die Story / Levels sind im Grunde genommen auf Schienen, aber der Junge hat einen Hingucker Pik.",
          url: 'https://www.youtube.com/embed/Prh1D9gp5Ig',
          textNext: "Es stehen vier archetypische Klassen zur Auswahl: Krieger, Zauberin, Attentäter und Barbar. Das Spiel ermutigt Sie, alle vier auf dem Sprung zu haben. Jede Klasse hat ein anderes Spielgefühl und einen anderen Spielstil sowie unterschiedlich aussehende Waffen und Rüstungen. Seien Sie gewarnt ... nur Ihr erster Charakter kann seine 'Schönheit' kostenlos (und nur einmal) optimieren ... nach dem ersten Mal kostet es im Spiel Ressourcen",
          linkText: 'Laden Sie es im Play Store herunter'
        },
        {
          lang: 'DE',
          title: 'Shadowgun Legends',
          link: 'https://play.google.com/store/apps/details?id=com.madfingergames.legends&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          url: 'https://www.youtube.com/embed/ZVWOD0AzO8E',
          textPrev: "Shadowgun Legends ist das neueste Angebot von Madfinger Games, dem Team hinter dem grafisch eindrucksvollen Zombie-Apokalypse-Shooter Dead Trigger 2. Es ist ein Ego-Shooter mit einer wunderschönen, farbenfrohen Grafik. Shadowgun Legends ist ein wahrer Augenschmaus mit üppiger Grafik und einer futuristischen Umgebung, die Gamer an klassische AAA-PC- / Konsolentitel wie Destiny und Halo erinnert.",
          textNext: "Die Betonung der Grafik passt zum Wirtschaftsmodell des Spiels, das In-App-Käufe für Kosmetikartikel anbietet. Das Wichtigste im Spiel: Eine umfangreiche Einzelspieler-Kampagne sowie Mehrspieler-, Versus- und Koop-Team-Herausforderungen sehen immer noch großartig aus, ohne den Teig für die Zuhälter-Beute abzuspucken.",
          linkText: 'Laden Sie es im Play Store herunter'
        },
        {
          lang: 'DE',
          title: 'Tekken Mobile',
          link: 'https://play.google.com/store/apps/details?id=eu.bandainamcoent.tekkenmobile&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          textPrev: "Tekken Mobile bringt die äußerst beliebte Kampfserie auf das Handy und sieht dabei wirklich gut aus. Obwohl es nicht das technischste Kampfspiel für Android ist, ist es mit Sicherheit das grafisch beeindruckendste.",
          url: 'https://www.youtube.com/embed/pp84Kt7CaDg',
          textNext: "Seien Sie gewarnt, das Angebot von Bandai Namco für mobile Geräte unterscheidet sich von Tekken auf anderen Plattformen. Das Spiel ist nominell kostenlos und voller Mikrotransaktionen, komplizierter Spielwährungen und der Erstellung von Statistiken. Die ausgeklügelten Steuerelemente, die für die Tekken-Spiele charakteristisch sind, wurden auf ein begrenztes Repertoire an Taps und Swipes mit nur 2D-Bewegung verkleinert",
          linkText: 'Laden Sie es im Play Store herunter'
        },
        {
          lang: 'DE',
          title: 'Sdorica Sunset',
          link: 'https://play.google.com/store/apps/details?id=com.rayark.sdorica&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          textPrev: "Rayark ist bekannt für die Entwicklung hochwertiger, kostenpflichtiger Handyspiele, aber Sdorica Sunset ist die Interpretation des allgegenwärtigen, aber häufig bösartigen Konzepts des Studios, dem kostenlosen mobilen Rollenspiel. Es ist ein Genre, das mit Angeboten von schlechter Qualität überlastet ist, aber glücklicherweise gelingt es Sdorica Sunset, das frei spielbare Modell mit einer Kombination aus charmantem Design und gut gemachter Mechanik zum Leuchten zu bringen",
          url: 'https://www.youtube.com/embed/2aY7il7zuNk',
          textNext: "Gefechte beinhalten eine überraschend große Menge an Strategien: Finden Sie heraus, welche Bewegungen verschiedene Matches für welchen Charakter ausführen, und setzen Sie sie dann zur richtigen Zeit ein, um den feindlichen Angriffsmustern entgegenzuwirken, oder setzen Sie die spezifische Aktion eines Charakters ein, wenn sie den größten Einfluss hat.",
          linkText: 'Laden Sie es im Play Store herunter'
        },


        { 
          lang: 'FI',
          title: 'Nimian Legends: BrightRidge',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textPrev: 'Tämä yhden kehittäjän projekti on ollut pitkään tekemisessä, mutta tarjoaa silti yhden graafisesti vaikuttavimmista nimikkeistä Androidilla. Tämä avoimen maailman seikkailupeli tarjoaa laajan asetusvalikon, jonka avulla graafinen uskollisuus voidaan valita älypuhelimiesi mukaan, ja huippuluokan älypuhelimien maksimilaatu voi olla henkeäsalpaava.',
          textNext: "Nimian Legends: Brightridge tarjoaa pari tarinatilaa pelataksesi tämän rehevän fantasiamaailman läpi. On tehtäviä, jotka on täytettävä, ja viholliset ylitettävissä, ja on myös mahdollista vapauttaa pelin toimintaympäristö vapaana, ottaen tilannekuvia ja muotoja, jotka siirtävät hahmosi erityyppisistä ihmisistä olentoihin, kuten susia, perhosia, lintuja tai jopa mahtavia lohikäärmeitä ja Lord of the Rings -sarjaa. tyyli puu-miehet. Kolmella dollarilla ilman sovelluksen sisäisiä ostoja on paljon viihdettä, olitpa sitten haaste vai haluatko vain rentoutua tutkimaan ja löytämään kauniita pelialueita.",
          linkText: 'Hanki se Play Kaupasta'
        },
        {
          lang: 'FI',
          title: 'Returner 77',
          link: 'https://play.google.com/store/apps/details?id=com.FantasticYes.Returner77',
          textPrev: "Pulmapelejä ei yleensä tunneta fantastisista visuaaleistaan, mutta Returner 77 on pääharja, joka pakata rahansa ehdottomasti kauniiseen sci-fi-maailmaan, joka on asetettu futuristiseen maahan ulkomaalaisen hyökkäyksen jälkeen. Sinun tehtäväsi on tutkia vieraita avaruusaluksia - sinun on selvitettävä, kuinka edistynyttä tekniikkaa voidaan käyttää palauttamalla ihmiskunta.",
          url: 'https://www.youtube.com/embed/-RiFQTrOp2U',
          textNext: "Vaikka tarina tarjoaa runsaasti ilmapiiriä, se on pääasiassa tekosyynä palapelien asettamiselle pohdintaa varten (tosiaanko tarvitsevatko ulkomaalaiset todella niin monimutkaisia ​​ovia?). Kyseinen ulkomaalainen tekniikka on rakennettu kiteiden ja valoprojektioiden ympärille, joita kuvataan runsaalla graafisella kukoistuksella. Peli maksaa 4,99 dollaria, mutta jos tämä kuulostaa paljon, voit ladata esittelyversion ja kokeilla kahta ensimmäistä tasoa ilmaiseksi.",
          linkText: 'Hanki se Play Kaupasta'
        },
        {
          lang: 'FI',
          title: 'Asphalt 9: Legends',
          link: 'https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM',
          url: 'https://www.youtube.com/embed/4_2EIOvFNtY',
          textPrev: "Gameloftin Asphalt-sarja on luonut standardin realistisen näköisiltä kilpapeleiltä Androidilla. Viimeisin toisto, Asphalt 9: Legends, ei varmasti petä, kun kyse on visuaalista esityksestä, jossa on kauneimmat ajoneuvot, joiden avulla voit elää autoteoksesi. Laajaan kuuluisten autojen (noin 50) valikoimaan kuuluu Ferrari, Porsche, Lamborghini ja paljon muuta. Kerää arvostettuja malleja, kuten Aston Martin Vulcan, Ford GT, Nissan GT-R Nismo, Ferrari 488 GTB, LaFerrari ja McLaren P1, ja aja sitten niitä eksoottisten alueiden ympäri. Älä ole huolissasi siitä, että vahingoittat kaunista autoasi, Asphalt 9 Legends kannustaa silti aggressiivisia, hi-oktaaniläistettäviä kilpa-aikoja, joissa lyö kilpailijaasi maastossa, mutta näytät aina hyvältä tekeessään sitä.",
          textNext: "Gameloft on hienostanut kilpa-ohjausta kosketussäätimillä, ja uskomaton grafiikka antaa sinulle todella kiehtovan tunteen kiihdyttäessäsi teillä ja ihailemalla autoasi. Kuten tämän pelisarjan perinne, voit ladata ja pelata ilmaiseksi, mutta sovelluksen sisäiset ostot houkuttelevat sinua, jos haluat viileimmät autot heti.",
          linkText: 'Hanki se Play Kaupasta'
        },
        {
          lang: 'FI',
          title: 'Darkness Rises',
          link: 'https://play.google.com/store/apps/details?id=com.nexon.da3.global',
          textPrev: "Me kaikki tiedämme stereotyypin matalasta henkilöstä, jolle et voi auttaa, mutta pidät siitä, koska he ovat todella todella hyvännäköisiä. Darkness Rises on ilmaiseksi pelattava toiminta-RPG, joka sopii tähän T: lle. Se ei ole kaukana syvimmästä RPG: stä - maailma on yleinen ja tarina / tasot ovat pohjimmiltaan kiskoilla, mutta poikalla on siinä silmäkarkkia pata.",
          url: 'https://www.youtube.com/embed/Prh1D9gp5Ig',
          textNext: "Valittavana on neljä arkkityyppistä luokkaa: soturi, velho, salamurhaaja ja barbaari. Peli kannustaa sinua olemaan kaikki neljä liikkeellä. Jokaisella luokalla on erilainen tunnelma ja leikkityyli, samoin kuin eri näköiset aseet ja panssarit. Varoita, että vain ensimmäisen hahmoni voi “kauneuden” hienosäätää ilmaiseksi (ja vain kerran) ... ensimmäisen kerran se maksaa pelin sisäiset resurssit",
          linkText: 'Hanki se Play Kaupasta'
        },
        {
          lang: 'FI',
          title: 'Shadowgun Legends',
          link: 'https://play.google.com/store/apps/details?id=com.madfingergames.legends&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          url: 'https://www.youtube.com/embed/ZVWOD0AzO8E',
          textPrev: "Shadowgun Legends on Madfinger Games -yhtiön viimeisin tarjous, joka on graafisesti vaikuttavan zombie-apokalypsisyörittäjän Dead Trigger 2: n takana oleva joukkue. Se on ensimmäisen persoonan ampuja, jolla on kauniit, värikkäät visuaalit. Shadowgun Legends on todellinen herkku silmille rehevällä grafiikalla ja futuristisella ympäristöllä, joka muistuttaa pelaajia klassisista AAA PC / -konsolinimikkeistä, kuten Destiny ja Halo.",
          textNext: "Visuaalinen painotus sopii pelin taloudelliseen malliin, joka tarjoaa kosmeettisten tuotteiden sovelluksen sisäisiä ostoja. Pelin liha: laaja yhden pelaajan kampanja, samoin kuin moninpelin versio ja co-op-joukkueen haasteet, näyttää silti upealta ilman ymmärrystä taikinaa pimp-out ryöstäjälle.",
          linkText: 'Hanki se Play Kaupasta'
        },
        {
          lang: 'FI',
          title: 'Tekken Mobile',
          link: 'https://play.google.com/store/apps/details?id=eu.bandainamcoent.tekkenmobile&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          textPrev: "Tekken Mobile tuo erittäin suositun taistelusarjan matkapuhelimeen ja näyttää todella hyvältä tekemällä sitä. Vaikka se ei olekin teknisin taistelupeli Androidilla, se on varmasti graafisesti vaikuttavin.",
          url: 'https://www.youtube.com/embed/pp84Kt7CaDg',
          textNext: "Varoita, Bandai Namcon tarjoama mobiililaite on erilainen peto kuin Tekken muilla alustoilla. Nimellisesti ilmainen, peli on täynnä mikrotapahtumia ja siististi pelin sisäisiä valuuttoja ja tilastoja. Tekken-peleille ominaiset hienostuneet säätimet on pienennetty rajatuksi hana- ja pyyhkäisyohjelmaan, vain 2D-liikkeellä",
          linkText: 'Hanki se Play Kaupasta'
        },
        {
          lang: 'FI',
          title: 'Sdorica Sunset',
          link: 'https://play.google.com/store/apps/details?id=com.rayark.sdorica&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT',
          textPrev: "Rayark tunnetaan kehitettävän korkealaatuisia maksettuja mobiilipelejä, mutta Sdorica Sunset on studion omaksuma tuo kaikkialla oleva, mutta paljon malloitu konsepti, vapaasti pelattava mobiili RPG. Se on tyylilaji, joka on tyydyttynyt huonolaatuisilla tarjouksilla, mutta onneksi Sdorica Sunset onnistuu saamaan vapaasti pelattavan mallin loistamaan yhdistämällä viehättävä muotoilu ja hyvin muotoillut mekaniikka",
          url: 'https://www.youtube.com/embed/2aY7il7zuNk',
          textNext: "Taisteluihin sisältyy yllättävän suuri määrä strategiaa - selvitetään, mitä liikkeitä eri ottelut suorittavat jollakin hahmolla, ja sitten otetaan ne käyttöön oikeaan aikaan, torjutaan vihollisen hyökkäysmalleja tai otetaan käyttöön hahmon tietty toiminta, kun sillä on eniten vaikutuksia.",
          linkText: 'Hanki se Play Kaupasta'
        }
      ]
  }

  switchHandler = event => {
    this.setState({
      languageApp: event.target.textContent
    })
  }

  filteredArticles = () => {
    return this.state.articles.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  filteredMainTitles = () => {
    return this.state.mainTitle.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  filteredNav = () => {
    return this.state.navLinks.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  filteredSidebar = () => {
    return this.state.sidebarItems.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  filteredGuideContent = () => {
    return this.state.guideContent.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  filteredContactsContent = () => {
    return this.state.contacts.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  render() {
    return (
      <Context.Provider value={this.filteredSidebar()}>
      <React.Fragment>
        <Switcher onClick = {this.switchHandler}/>
        <Header nav={this.filteredNav()} lang={this.state.languageApp}/>

        <Route path="/" exact render={(props) => <Main {...props} lang={this.state.languageApp} mainTitle={this.filteredMainTitles()} articles={this.filteredArticles()} />}/>
        <Route path="/guide" render={(props) => <Guide {...props} lang={this.state.languageApp} articles={this.filteredGuideContent()} />}/>
        <Route path="/contacts" render={(props) => <Contacts {...props} lang={this.state.languageApp} texts={this.filteredContactsContent()}/>}/>
        
        <Footer nav={this.filteredNav()} lang={this.state.languageApp}/>
      </React.Fragment>
      </Context.Provider>
    )
  }
}

export default App;