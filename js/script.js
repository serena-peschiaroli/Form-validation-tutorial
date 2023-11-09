
/*Introduzione
La validazione del form è un passo fondamentale per migliorare l'esperienza degli utenti e garantire l'integrità dei dati inviati. In questo tutorial, impareremo come eseguire una semplice validazione del form utilizzando JavaScript.*/

document.getElementById('registrazioneForm').addEventListener('submit', function(event) {
    let valido = true;
  
    // Validazione per ogni campo di input
    // ...
  
    // Impedisci l'invio del form se la validazione fallisce
    if (!valido) {
      event.preventDefault();
    }
  });
  

//   Validazione del form completo:
// Questo esempio mostra come impedire l'invio del modulo se la validazione fallisce per almeno uno dei campi.

  document.getElementById('myForm').addEventListener('submit', function (event) {
    let valido = true;
  
    // Validazione per ogni campo di input
    // Esempio: Nome non può essere vuoto
    const nomeInput = document.getElementById('nameInput');
    const nomeErrore = document.getElementById('nameError');
    if (nomeInput.value === '') {
      nomeErrore.textContent = 'Il nome è obbligatorio';
      valido = false;
    } else {
      nomeErrore.textContent = '';
    }
  
    // Aggiungi altre validazioni per gli altri campi
  
    // Impedisci l'invio del form se la validazione fallisce
    if (!valido) {
      event.preventDefault();
    }
  });
  


//   Validazione dell'email:
// Un esempio di funzione di validazione personalizzata per l'email.


function isValidEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

// Visualizzazione dei messaggi di errore:
// Esempio di come visualizzare un messaggio di errore per il campo del nome.

// Esempio: Visualizzazione di un messaggio di errore per il campo del nome
const nomeErrore = document.getElementById('nomeErrore');
if (nomeInput.value === '') {
  nomeErrore.textContent = 'Il nome è obbligatorio';
  valido = false;
} else {
  nomeErrore.textContent = '';
}

// Utilizzo di checkValidity:
// Verifica se un elemento soddisfa tutti i vincoli di validità.
document.getElementById('myForm').addEventListener('submit', function (event) {
    const customField = document.getElementById('customField');
  
    if (!customField.checkValidity()) {
      // Se la validazione fallisce, gestisci l'errore qui
      alert("Il campo personalizzato deve iniziare con 'A'");
      event.preventDefault(); // Impedisci l'invio del modulo
    }
  });

//   Eventi di Input:
//   Invece di ascoltare solo l'evento di invio del form, puoi ascoltare gli eventi di input su singoli campi per fornire feedback in tempo reale all'utente.
const nomeInput = document.getElementById('nameInput');

nomeInput.addEventListener('input', function () {
  // Validazione e feedback in tempo reale
});
