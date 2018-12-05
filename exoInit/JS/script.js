var listeFilms = [
  {
    titre: "Flash",
    annee: 2018,
    realisateur : "Bebert"
  },
  {
    titre: "Thor",
    annee: 2015,
    realisateur : "Morice"
  },
  {
    titre: "Les gendarmes",
    annee: 1985,
    realisateur : "Albert"
  },
  {
    titre: "Bidasse",
    annee: 1996,
    realisateur : "Robert"
  }
];

var tbodyElt = document.querySelector('tbody');
var divInfo = document.getElementById('infoAjout');

// affichier les films dans le tableau
  // Parcourir la listefilm
  for (var i = 0; i < listeFilms.length; i++){
    //crée les elements pour mon tableau
    let trElt = document.createElement('tr');   //<tr></tr>
    let tdEltTitre = document.createElement('td'); //<td></td>
    let tdEltAnnee = document.createElement('td'); //<td></td>
    let tdEltReal = document.createElement('td'); //<td></td>

    //affecté les valeur de ma liste dans mon tableau
    tdEltTitre.textContent = listeFilms[i].titre;
    tdEltAnnee.textContent = listeFilms[i].annee;
    tdEltReal.textContent = listeFilms[i].realisateur;

    trElt.appendChild(tdEltTitre);
    trElt.appendChild(tdEltAnnee);
    trElt.appendChild(tdEltReal);

    tbodyElt.appendChild(trElt); //<tbody> <tr> 3<td></tr></tbody>
  }




  //Ajouter le formulaire d'ajout
  // Recuperer la div d'ajout
  var divAjout = document.getElementById('ajout');

  //crée un bouton Ajouter
let btnAjouter = document.createElement('button');
btnAjouter.classList.add("btn");
btnAjouter.classList.add("btn-primary");
btnAjouter.textContent = 'Ajouter';


// Crée un  évenement sur le click
btnAjouter.addEventListener('click', function(){
//Afficher un formulaire pour ajouter un film
  //Crée un formulaire
  let formElt = document.createElement('form');
  //Crée 3 input et un bouton submit
  let txtTitreElt = document.createElement('input');
  txtTitreElt.placeholder = 'Entrer un titre';
  txtTitreElt.required = 'true';

  let txtAnneeElt = document.createElement('input');
  txtAnneeElt.placeholder = 'Entrer un Année';
  txtAnneeElt.required = 'true';

  let txtRealElt = document.createElement('input')
  txtRealElt.placeholder = 'Entrer un Réalisateur';
  txtRealElt.required = 'true';

  let btnEnvoyerElt = document.createElement('input');
  btnEnvoyerElt.type = 'submit';
  btnEnvoyerElt.value = 'Envoyer';


  //Evement sur le formulaire submit
  formElt.addEventListener('submit', function(e){
  //Récupere les valeurs saisi
  let titre = txtTitreElt.value;
  let annee = txtAnneeElt.value;
  let realisateur = txtRealElt.value;

  //Définition d'une regex pour le format de la date 
   let regex = /^[0-9]{4}$/; //1999 2000

    //Verifier l'année par rapport a la regex
     //Si  date = ok
    if(regex.test(annee)){
      // Ajouter le film dans le tableau
      listeFilms.push({titre, annee, realisateur });
      //affichier un message d'ajout
      divInfo.textContent = "Film " + titre + " a bien été ajouter" ;

       //Ré-affiche le bouton d'ajout
       divAjout.replaceChild(btnAjouter, formElt);
    }
     //Sinon
      else{
        //Afficher un message d'erreur
       divInfo.textContent = "Erreur : Format de date incorrect";

      }

        // Cache l'info bulle au bout de 3 seconde
     // setTimeOut(function(){ divInfo.textContent = '';}, 3000);


      //Anuler l'événement submit
      e.preventDefault();
    });

  //Affecter nos élement enfants a notre formElt
  formElt.appendChild(txtTitreElt);
  formElt.appendChild(txtAnneeElt);
  formElt.appendChild(txtRealElt);
  formElt.appendChild(btnEnvoyerElt);


  divAjout.replaceChild(formElt, btnAjouter);
})


//Ajouter les balises enfant  aux parents
divAjout.appendChild(btnAjouter);
