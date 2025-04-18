# Download Massivo Fatture

Questo script per Greasemonkey/Tampermonkey aggiunge un pulsante **Download massivo** alla pagina di elenco delle fatture elettroniche sul sito dell’Agenzia delle Entrate (https://serviziae.agenziaentrate.gov.it/FattureWeb/fatture/elenco) e gestisce il download sequenziale delle singole fatture. Il codice ricostruisce gli URL in modo da garantire il formato corretto, carica ogni link in un iframe nascosto, attiva il pulsante di download e attende 5 secondi dopo ogni click per consentire l’avvio del download prima di procedere al link successivo.

È possibile eseguire il download massivo delle fatture elettroniche inviate in qualità di cliente, sia quelle trasmesse tramite il sistema di scambio sia quelle che il sistema stesso non è riuscito a inoltrare.  
![Screenshot](https://raw.githubusercontent.com/mlgtcode/Fatture-elettroniche-B2C-download-massivo/refs/heads/main/Screenshot%20ADE.png)

**Nota:** Se il pulsante **Download massivo** non viene visualizzato, è necessario ricaricare la pagina:  
https://serviziae.agenziaentrate.gov.it/FattureWeb/fatture/elenco

## Installazione

1. Installare un gestore di script, ad esempio [Greasemonkey](https://addons.mozilla.org/it/firefox/addon/greasemonkey/) o [Tampermonkey](https://www.tampermonkey.net/), per il proprio browser.
2. Creare un nuovo script e incollare il codice fornito.
3. Salvare lo script e verificare che esso sia attivato per le pagine corrispondenti all’URL:  
   `https://serviziae.agenziaentrate.gov.it/FattureWeb/fatture/elenco*`

## Utilizzo

- Accedere alla pagina di elenco delle fatture.
- Accanto al pulsante **Esporta la tabella** verrà aggiunto il pulsante **Download massivo**.
- Cliccando su **Download massivo**, il pulsante verrà sostituito dal testo **Inizio download...** evidenziato in verde, avviando così il processo di download massivo.
- Lo script processerà sequenzialmente ciascun link, attivando il pulsante di download presente nelle pagine di dettaglio e attendendo 5 secondi dopo ogni click.
- I messaggi di log (oppure eventuali avvisi, nel caso in cui il pulsante di download non venga individuato) saranno mostrati in box stilizzati all’interno del `<div id="page-header">`.

## Disclaimer

**NO WARRANTY DISCLAIMER**  
Questo script viene fornito "COSÌ COM'È", SENZA ALCUNA GARANZIA, ESPRESSA O IMPLICITA, incluse, ma non limitate a, garanzie di commerciabilità o idoneità per uno scopo particolare. L'utilizzo dello script è esclusivamente a proprio rischio e pericolo. L'autore non potrà essere ritenuto responsabile per eventuali danni diretti o indiretti derivanti dall'uso del presente script.

## Licenza

Questo script è distribuito sotto la [Licenza MIT](https://opensource.org/licenses/MIT).
