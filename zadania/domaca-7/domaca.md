vytvor component priecinok v ktorom vytvoris komponentu s nazvom input v tejto komponente budes mat input ktory ma definovany atribut value={value} onChange={e => handleChange(e)}

pouzi useState na definovanie zaciatocneho stavu value ktore bude prazdny string ''
handleChange bude tvoja funkcia arrow fun. ktora bude setValue(e.target.value)

pouzi useEffect ktori bude kontrolovat [value] ak value.length ako > 2 zmeni farbu pisma v inpute na cervenu ak bude > 5 farba pisma bude modra

https://reactjs.org/docs/hooks-intro.html
