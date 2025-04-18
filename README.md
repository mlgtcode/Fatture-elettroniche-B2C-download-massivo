# Download Massivo Fatture

Questo script Greasemonkey/Tampermonkey aggiunge un pulsante **Download massivo** alla pagina di elenco delle fatture elettroniche su Agenzia delle Entrate] - https://serviziae.agenziaentrate.gov.it/FattureWeb/fatture/elenco - e gestisce il download sequenziale delle fatture. Lo script ricostruisce gli URL delle fatture in modo che abbiano il formato corretto, carica ciascun link in un iframe nascosto, clicca il pulsante di download e attende 5 secondi dopo il click per permettere l’avvio del download prima di passare al link successivo.

È possibile effettuare il download massivo delle fatture elettroniche che sono state inviate in qualità di cliente, sia quelle consegnate attraverso il sistema di intercambio, sia quelle che il sistema stesso non è riuscito a consegnare.

## Installazione

1. Installa un gestore di script come [Greasemonkey](https://addons.mozilla.org/it/firefox/addon/greasemonkey/) o [Tampermonkey](https://www.tampermonkey.net/) per il tuo browser.
2. Crea un nuovo script e incolla il codice fornito.
3. Salva lo script e assicurati che sia attivato per le pagine che corrispondono all'URL:  
   `https://serviziae.agenziaentrate.gov.it/FattureWeb/fatture/elenco*`

## Utilizzo

- Accedi alla pagina di elenco delle fatture.
- Accanto al pulsante **esporta la tabella** verrà aggiunto un nuovo pulsante **Download massivo**.
- Cliccando su **Download massivo**, il pulsante verrà sostituito dal testo **Inizio download...** con uno stile in verde, e verrà avviato il processo di download massivo.
- Lo script elaborerà ciascun link delle fatture sequenzialmente, cliccando sul pulsante di download presente nelle pagine di dettaglio e attendendo 5 secondi dopo ogni click.
- I messaggi di log (o avviso, se il pulsante di download non viene trovato) saranno mostrati in box stilizzati all’interno del `<div id="page-header">`.

## Disclaimer

**NO WARRANTY DISCLAIMER**  
Questo script viene fornito "COSÌ COM'È", SENZA ALCUNA GARANZIA, ESPRESSA O IMPLICITA, incluse, senza limitazione, le garanzie di commerciabilità e idoneità per uno scopo particolare. L'uso di questo script è a tuo rischio e pericolo. L'autore non sarà in nessun modo responsabile per danni diretti o indiretti derivanti dall'utilizzo dello script.

## Licenza

Questo script è distribuito sotto la [Licenza MIT](https://opensource.org/licenses/MIT).
