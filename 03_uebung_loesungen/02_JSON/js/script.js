let gutesBeispiel = {
  ganzzahl : 42,
  fliesskommazahl : 13.37,
  zeichenkette : 'Hallo Welt',
  unterobjekt : {
    vorname : 'Urs',
    nachname : 'Thöny'
  },
  einArray : ['foo', 'bar'],
  undefinierbar : undefined,
  nix : null,
  entwederOder : true
}

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

function person_anzeigen(person_param){
  let person_text = person_param.anrede + " ";
  person_text += person_param.name.vorname + " ";
  person_text += person_param.name.nachname + " ";
  person_text += "ist " + person_param.alter + " Jahre alt.<br>";
  person_text += "Seine Interessen sind ...";
  let person_p_element = document.createElement('p');
  person_p_element.innerHTML = person_text;

  let person_ul_element = document.createElement('ul');
  for(let i = 0; i < person_param.interessen.length; i++){
    let person_li_element = document.createElement('li');
    person_li_element.textContent = person_param.interessen[i];
    person_ul_element.appendChild(person_li_element);
  }

  let html_container = document.querySelector('#container');
  html_container.appendChild(person_p_element);
  html_container.appendChild(person_ul_element);
}
