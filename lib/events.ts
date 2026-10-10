export type SaiyaEvent = {
  id: string
  series: string
  title: string
  subtitle: string
  format: string
  image: string
  imageAlt: string
  paragraphs: string[]
  closing?: string
}

export const events: SaiyaEvent[] = [
  {
    id: 'deer-temple',
    series: 'SAIYA',
    title: 'Deer Temple',
    subtitle: 'Klankreis',
    format: 'Intieme huiskamer · maximaal 4 deelnemers',
    image: '/images/deer-temple.png',
    imageAlt:
      'Gezellige huiskamer met zachte kussens, kaarsen en kristallen klankschalen',
    paragraphs: [
      'Kom zakken in een veld vol zachtheid, zodat je aan diepere lagen van regulatie kunt toekomen dan je hiervoor kende. In de Deer Temple ontvang je een liefdevolle bedding om in eenvoud tot jezelf te komen.',
      'Door middel van zachte ademtechnieken en soundhealing word je naar vertraging gebracht, zodat het stil kan worden vanbinnen en je beter kunt voelen wat op dit moment werkelijk belangrijk voor je is. Maar al te vaak bewegen we als mensen namelijk vanuit het hoofd, terwijl het lichaam zo veel wijzer is.',
      'Belle begeleidt vanuit een ruime ervaring in zowel de diepteregulatie van haar eigen systeem als die van vele andere systemen. Dit is waar integratie vanzelf plaatsvindt, mindfulness niet meer iets is wat je beoefent maar wat je gewoon wordt, en waar je je beschermlagen af kunt laten omdat je gewoon kunt zijn zoals je bent.',
    ],
    closing: 'Be welcome!',
  },
  {
    id: 'stargate',
    series: 'SAIYA',
    title: 'Stargate',
    subtitle: 'Trancedente reis',
    format: 'Online · maandelijks',
    image: '/images/stargate.png',
    imageAlt: 'Een gloeiend portaal van licht in een sterrenhemel',
    paragraphs: [
      'Hoe dieper je in verbinding stapt met wie je werkelijk bent, hoe meer je je gesteund kunt voelen in wat je te doen hebt hier op aarde. Maar echt het pad van je Ziel volgen kan eenzaam voelen wanneer je in het aardse nog niet helemaal in de gelegenheid bent het voluit te leven. Daarom is het belangrijk om regelmatig de multidimensionale draging op te zoeken waarin je je weer kunt gaan herinneren waar je vandaan komt en wat je komt doen.',
      'Je doet het namelijk nooit alleen. Je bent multidimensionaal gesteund door je voorouders en alle ondersteunende spirits in jou en om je heen. Hoe meer je die verbinding legt, hoe meer Ziel er in jou komt en je kunt gaan leven zoals je echt graag wilt.',
      'In de Online Stargate biedt Belle maandelijks de ruimte om in die afstemming te verdiepen en verruimen. Door middel van frequentiehealing via onder andere een lichttaalchannel begeleidt ze je in een trancedente reis naar de lagen waar je moet zijn om te helen en op te halen wat je op dit moment mag ophalen om dieper te ankeren in het Aardse.',
    ],
    closing:
      'Je hebt echt niets te verliezen, want alles wat je in dit portaal meeneemt, vermeerdert zich vanzelf. Zo werkt een uitlijning nu eenmaal (:',
  },
  {
    id: 'seagate',
    series: 'SAIYA',
    title: 'Seagate',
    subtitle: 'Afstandshealing',
    format: 'Online · maandelijks',
    image: '/images/seagate.png',
    imageAlt: 'Zachte waterstromen in diepe zeegroene tinten',
    paragraphs: [
      'Om jezelf vrij te zetten van de patronen die je klein houden, is het belangrijk om diep geworteld te zijn in je eigen systeem. Dit geeft je de ruimte om vrijer te bewegen en trouw te zijn aan jezelf. Bewust en onbewust dragen we allemaal patronen en overtuigingen mee vanuit waar we leven.',
      'Hoe dieper je reguleert, hoe meer je de patronen die niet helpend zijn vrij kunt zetten en door het leven kunt bewegen volgens de stroom die het meest bijdraagt aan jouw levensgeluk en daarmee de meeste overvloed brengt.',
      'In de Online Seagate biedt Belle maandelijks de ruimte om steeds meer in verbinding te zakken met die dieptestroom in jou. Door middel van frequentiehealing via onder andere een lichttaalchannel begeleidt ze je in een trancedente reis naar jouw innerlijke dieptes, waar je los kunt laten wat niet langer dient, zodat wat je wél graag wilt je beter kunt bereiken in het leven.',
    ],
    closing:
      'Door je eraan over te geven, ga je merken dat er echt zo veel minder hoeft dan we vaak denken en dat er een heel stuk meer gebeurt wanneer we gaan bewegen zoals het water.',
  },
  {
    id: 'temple-of-atlantis',
    series: 'SAIYA',
    title: 'Temple of Atlantis',
    subtitle: 'Soundhealing',
    format: 'Systemisch soundhealing · kristallen klankschalen',
    image: '/images/atlantis.png',
    imageAlt: 'Kristallen klankschalen die zacht oplichten in parel en aqua',
    paragraphs: [
      'Dit is waar je thuiskomt in je eigen energie en stroming. In het dagelijks leven met alles wat dat met zich meebrengt, kan dat best wel eens lastig zijn. Dit is niet zo vreemd: daadwerkelijk gaan rusten en een prioriteit maken van je zelfzorg is nu eenmaal niet iets wat tegenwoordig genormaliseerd is.',
      'De Temple of Atlantis is een veld voor Systemisch Soundhealing dat samenwerkt met het veld van Seagate, een online gegeven afstandshealing die je meer naar de rust in je innerlijke dieptes brengt. De cirkels zijn beide ook los te volgen, maar als je de multidimensionaliteit van de cirkels dieper wilt ervaren, is het zeker aan te raden ze beide te doen.',
      'Het veld van de Temple of Atlantis is heel licht en wat speels, wat het heel toegankelijk maakt voor wanneer je het dieptewerk nog wat spannend vindt. Het is bedoeld als iets wat je op regelmatige basis kunt doen voor jezelf, met je familie, partner of vriend of vriendin: voor zelfzorg en om te normaliseren dat je naar andere lagen van ontspanning en spirituele verbinding gaat dan waar je aan toekomt wanneer je alleen aan de oppervlakte functioneert.',
      'Laat de klanken van de kristallen klankschalen en Belle’s channel je meenemen naar andere lagen in jezelf. De klanken en het krachtveld helpen je zuiveren en loslaten wat je niet meer hoeft te dragen. Hierdoor komt er vanzelf meer ruimte voor een positieve stroom die je kan optillen naar een hoogfrequentere laag in jouw bewustzijn.',
    ],
    closing: 'Kom maar ervaren ♡',
  },
]
