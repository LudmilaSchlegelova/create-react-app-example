1. vytvor HOC funkcionalnu komponentu ktora bude pridavat background color: red pre vlozenu komponentu vsetky komponenty nech su funkcionalne vramci app pouzi tuto funkciu kde v App.js budes mat funkcionalnu komponentu Title ta bude vraciat h1 element s textom super duper farba

2. ak to budes mat skus namiesto Title komponenty vytvorit List funkcionalnu komponentu ktora bude vraciat 3 divka v ktorich budes mat text krabica 1 krabica 2 krabica 3
   na obalenie skus pouzit fragment nasledne tuto List komponentu vloz do funkcie HOC

3. skus upravit List komponentu tak ze tie tri divka nebudu pod sebou napisane ale do List komponenty cez props zasles array ktore bude obsahovat [{id: 1, title: 'krabica 1'}, {id: 2, title: 'krabica 2'}, {id: 3, title: 'krabica 3'}]

4. ak to budes mat odstran pouzitie HOC komponenty pre List komponentu v App ale pouzi tuto HOC funkciu vo vnutri List komponenty pre kazde divko v Liste t.j. pre kazdu krabicu aby kazda krabica mala cervene pozadie
