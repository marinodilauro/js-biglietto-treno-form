# Readme
## Calcolo del prezzo del biglietto del treno

Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21€ al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).

***

### Steps

- Creo due variabili per l'età dell'utente e i km che deve percorrere.
- Assegno a queste due variabili dei valori tramite input utente.
- Creo una costante per il prezzo al km del biglietto (0.21€).
- Creo una varaibile e le assegno il prezzo del biglietto dell'utente (sarà 0.21 moltiplicato il valore della variabile "km da percorrere").
- Creo due variabili per lo sconto ai minorenni e per lo sconto agli over 65 anni.
- Verifico l'età dell'utente per applicare lo sconto.
  - SE è minore di 18:
    - Sottraggo al valore della variabile prezzo del biglietto il valore della variabile sconto ai minorenni e stampo il prezzo del biglietto arrotondando alla seconda cifra decimale e aggiungendo il simbolo €.
  - ALTRIMENTI SE è maggiore di 65:
      - Sottraggo al valore della variabile prezzo del biglietto il valore della variabile sconto agli over 65 e stampo il prezzo del biglietto arrotondando alla seconda cifra decimale e aggiungendo il simbolo €.
  - ALTRIMENTI (quindi se è compreso fra 18 e 65):
    - Non applico nessuno sconto e stampo il prezzo del biglietto arrotondando alla seconda cifra decimale e aggiungendo il simbolo €

***

### Tools

- Variabili e costanti
- Input utente (tag html input)
- Istruzioni condizionali (if/else if/else)
- document.getElementBy....innerHTML per stampare il risultato all'interno dell'HTML 