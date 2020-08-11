1. vytvor funkcionalnu komponent s nazvom Nadpis ktora bude cez props ocakvat title hodnotu ktoru vrati spolu s obalenym h1 elementom

2. nasledne tuto komponentu Nadpis pouzi 3 krat pod sebou a vloz im rovnaky text napr vajco

3. baskedbe v tejto komponente pouzi React.memo() a obal jej export

4. skus vytvorit komponentu Input v ktorej budes vyuzivat useRef hook na to aby si vypisovala do p elementu obsah ktori pises do inputu t.j.

```jsx
<p>{inputRef.current.value}</p>
<input ref={inputRef}>
```

2. skús vytvorit pocitadlo ktore nebude pocitavat a odpocitavat cisla ale pismena

zaciatocna hodnota je 'a'
t.j. kliknem na pripocitaj tak uvidim vysledok 'aa'
ak kliknem na odpocitaj uvidim vysledoko 'a'
vytvor reset ktorim vyresetujes stav a zobrazis stav 'a'
