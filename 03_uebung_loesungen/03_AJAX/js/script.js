/*
let person = {
 alter:  42,
 anrede:  'Herr',
 name:  {
   vorname:  'Urs',
   nachname:  'Thöny'
},
 interessen:  ['Film', 'Fahrrad fahren']
};

person_anzeigen(person);
*/

// Mit fetch() -Funktion die externe Datei 'extern/person.json' laden.
fetch('extern/person.json')
  .then((response) => {
  // Definiert, welches Format die Antwort hat (wichtig für den nächsten Teil)
  // !!!!! hier JSON !!!!!!
  // fetch erwartet jetzt eine validen JSON-Zeichenkette
  // Die empfangegen JSON-Daten werden von JS direkt in ein Objekt umgewandelt.
    return response.json();
  })
  .then((data) => {
    // Da wirJavaScript oben mitgeteilt haben, dass der empfangene Text eine JSON-Zeichenkette ist,
    // können wir die empfangenen Daten direkt als JavaScript-Objekt-Variable weiterverwenden.
    // fetch() wandelt die JSON-Daten automatisch in ein JS-Objekt um.
    // Ausgabe von data in der Konsole des Browsers.
    console.log(data);

    // Aufruf der person_anzeigen() -Funktion, die weiter unten definiert ist.
    // Die Funktion erwartet als Parameter ein JS-Objekt.
    // Wir geben der Funktion data als Parameter mit.
    person_anzeigen(data);
  })
  .catch(function(error) {
    console.log('Error: ' + error.message);
  });

function person_anzeigen(person_param){
// Der Funktionsparameter "person_param" enthält jetzt das übergebene Objekt.

// HTML-Struktur mit JS erzeugen
  // Text für person zusammenstellen
  let person_text = person_param.anrede + " ";
  person_text += person_param.name.vorname + " ";
  person_text += person_param.name.nachname + " ";
  person_text += "ist " + person_param.alter + " Jahre alt.<br>";
  person_text += "Seine Interessen sind ...";
  // p-Element für person_text erzeugen
  let person_p_element = document.createElement('p');
  // person_text als HTML in das p-Element einfügen
  person_p_element.innerHTML = person_text;

  // ul-Element für die Interessen-Listenpunkte erzeugen
  let person_ul_element = document.createElement('ul');
  // Array mit interessen durchlaufen
  for(let i = 0; i < person_param.interessen.length; i++){
    // Listenpunkt für einzelnes Interesse erzeugen
    let person_li_element = document.createElement('li');
    // interesse als Text in das Element einfügen
    person_li_element.textContent = person_param.interessen[i];
    // Listen-Element als Child an ul-Element anhängen
    person_ul_element.appendChild(person_li_element);
  }

  // div-Element für den Inhalt HTML-Datei identifizieren
  let html_container = document.querySelector('#container');
  // p-element als Child an div-Element anhängen
  html_container.appendChild(person_p_element);
  // ul-element als Child an div-Element anhängen
  html_container.appendChild(person_ul_element);

  /*
  Mit Urs Thöny als person erzeugt die Funktion folgenden HTML-Code:
  <p>Herr Urs Thöny ist 42 Jahre alt.<br>
    Seine Interessen sind ...</p>
  <ul>
    <li>Film</li>
    <li>Fahrrad fahren</li>
  </ul>
  */


}
