1. vytvor si priecinok context a vnom subor KosickContext.js
   v nom ci vytvor konštantu Kosik ktora bude obsahovať React.createContext()
   vyexportuj tento kosik bez default

2) vramci App.js si importni Kosic a nasledne tuto komponentu pouzi na obalenie komponenty Obsah
   vytvor si konstantu vsetko ktora bude obsahovat ['jablko','hruska','chleba','vajco']

````jsx
<Kosik.Provider value={vsetko}>
   <Obash1/>
   <Obash2/>
   <Obash3/>
</Kosik.Provider>

3. vytvor class komponentu Obsah1 ktora bude nacitavat Kosik teda nas kontext a tento kosik vyuzi na importnutie statickej hodnoty
```jsx
	static contextType = Kosik
````

vramci classy nacitaj this.obsah kedze je to pole namapuj pole a vypis obsah do p elementu

4. vytvor class komponentu Obsah2 ktora nacita Kosik cez Consumer

5. vytvor funkcionalnu komponentu ktora nacita obsah cez useContext(Kosik)

mapujes vsade obsah a vypisujes p element s danym textom
