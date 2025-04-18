// ==UserScript==
// @name         Download Massivo Fatture B2C
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Aggiunge il pulsante "Download massivo" e gestisce il download sequenziale delle fatture
// @match        https://serviziae.agenziaentrate.gov.it/FattureWeb/fatture/elenco*
// @grant        none
// ==/UserScript==

(function() {
  if (window.location.href.startsWith("https://serviziae.agenziaentrate.gov.it/FattureWeb/fatture/elenco")) {
    const exportButton = document.querySelector('button[title="esporta la tabella"]');
    if (exportButton) {
      const massDownloadButton = document.createElement("button");
      massDownloadButton.textContent = "Download massivo";
      massDownloadButton.style.marginLeft = "10px";
      massDownloadButton.style.padding = "6px 12px";
      massDownloadButton.style.border = "1px solid #ccc";
      massDownloadButton.style.backgroundColor = "#f5f5f5";
      massDownloadButton.style.cursor = "pointer";
      exportButton.parentNode.insertBefore(massDownloadButton, exportButton.nextSibling);
      massDownloadButton.addEventListener("click", async function(){
        massDownloadButton.textContent = "Inizio download...";
        massDownloadButton.style.backgroundColor = "green";
        massDownloadButton.style.color = "white";
        massDownloadButton.style.border = "1px solid green";
        massDownloadButton.disabled = true;
        await massDownloadScript();
      });
    }
  }

  async function massDownloadScript() {
    const sec = 5;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const links = document.querySelectorAll('a[href^="../fatture/dettaglio/"]');
    const pageHeader = document.getElementById("page-header");
    for (let i = 0; i < links.length; i++){
      const originalHref = links[i].getAttribute("href");
      let newHref;
      const prefix = "../fatture/dettaglio/";
      if (originalHref.startsWith(prefix)) {
        newHref = "https://serviziae.agenziaentrate.gov.it/FattureWeb/fatture/dettaglio/" + originalHref.substring(prefix.length);
      } else {
        newHref = originalHref;
      }
      console.log(`Elaborazione link ${i + 1} di ${links.length}: ${newHref}`);
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = newHref;
      document.body.appendChild(iframe);
      await new Promise(resolve => { iframe.onload = resolve; });
      await delay(1000);
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const downloadBtn = iframeDoc.querySelector('button[title^="download file fattura"]');
      if (downloadBtn) {
        downloadBtn.click();
        const logText = `Download avviato per la fattura su ${newHref}. Attesa di ${sec} secondi prima del link successivo.`;
        console.log(logText);
        if (pageHeader) {
          const messageBox = document.createElement("div");
          messageBox.style.border = "1px solid green";
          messageBox.style.backgroundColor = "#e6ffe6";
          messageBox.style.color = "green";
          messageBox.style.padding = "10px";
          messageBox.style.margin = "10px";
          messageBox.textContent = logText;
          pageHeader.appendChild(messageBox);
        }
        await delay(sec * 1000);
        iframe.remove();
      } else {
        const warnText = `Nessun pulsante di download trovato sulla pagina: ${newHref}`;
        console.warn(warnText);
        if (pageHeader) {
          const warningBox = document.createElement("div");
          warningBox.style.border = "1px solid red";
          warningBox.style.backgroundColor = "#ffe6e6";
          warningBox.style.color = "red";
          warningBox.style.padding = "10px";
          warningBox.style.margin = "10px";
          warningBox.textContent = warnText;
          pageHeader.appendChild(warningBox);
        }
        iframe.remove();
      }
    }
    console.log("Download massivo completato.");
  }
})();
