function validerNom() {
    let nom = document.getElementById("nom_animal").value;
    let erreurNom = document.getElementById("erreur-nom");

    if (nom.trim().length === 0) {
        erreurNom.innerHTML = "Veuillez indiquer le nom de votre animal avant de soumettre le formulaire!";
        return false;
    } 
    else if (nom.trim().length< 3 ||nom.trim().length >20)  {
        erreurNom.innerHTML = "Le nom de votre animal de votre animal doit être entre 3 et 20 caractère de long";
        return false;
    }else {
        erreurNom.innerHTML = "";
        return true;
    }
}
function validerAge(){
    let age = document.getElementById("animal_age").value.trim(); 
    let erreurAge= document.getElementById("erreur-age");

    if( age.length ===0){
        erreurAge.style.display = 'block'
        erreurAge.innerHTML= 'Veuillez entrer l\'age';
        return false;
    }else if( isNaN(age)){
        erreurAge.style.display = "block";
        erreurAge.innerHTML= 'Veuillez entrer un nombre valide';
        return false;
    }else if(age <0 || age>30){
        erreurAge.style.display = "block";
        erreurAge.innerHTML= 'L\'age de votre animal doit être en 0 et 30. Veuillez inscrire une valeur valdie';
        return false;
    }
    erreurAge.style.display = "none";
    erreurAge.innerHTML= "";
    return true;
}
function validerRace(){
    let race = document.getElementById('race');
    let erreurRace = document.getElementById('erreur-race');
    if(race.value.trim().length === 0){
        erreurRace.style.display = "block";
        erreurRace.innerHTML = "Ce champ ne peut être vide. Veuillez ajouter une race.";
        return false;
    }
    erreurRace.style.display = "none";
    erreurRace.innerHTML = "";
    return true;
}
function validerEspece(){
    let espece = document.getElementById('espece');
    let erreurEspece = document.getElementById('erreur-espece');
    if(espece.value.trim().length === 0){
        erreurEspece.style.display = "block";
        erreurEspece.innerHTML = "Ce champ ne peut être vide. Veuillez ajouter une espèce.";
        return false;
    }
    erreurEspece.style.display = "none";
    erreurEspece.innerHTML = "";
    return true;
}


function validerEmail(){ 
    let format= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    let email = document.getElementById("email_naissance").value.trim(); 
    let erreurEmail = document.getElementById("erreur-email");

    if( email.length ===0 || email === null){
        erreurEmail.style.display = 'block'
        erreurEmail.innerHTML= 'Ce champ est obligatoire. Veuillez entrer votre adresse courriel';
        return false;
    }else if( !format.test(email)){
        erreurEmail.style.display = "block";
        erreurEmail.innerHTML= 'Veuillez entrer une adresse courriel valide';
        return false;
    }
    erreurEmail.style.display = "none";
    erreurEmail.innerHTML= "";
    return true;

}
function validerAdresse() {
    let no_civique = document.getElementsByName("addresse");
    let ville = document.getElementsByName("ville");
    let code_postal= document.getElementById("code_postal");
    let format= /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/ 
    let erreurAddresse =document.getElementById("erreur-adresse");
    let erreurVille =document.getElementById("erreur-ville");
    let erreurCodePostal =document.getElementById("erreur-code_postal");

    if(no_civique.trim().length === 0){
        erreurAddresse.style.display = "block";
        erreurAddresse.innerHTML= "Ce champ ne  peut être vide. Veuillez entre le numéro civique de l'addresse.\n";
        return false;
    }else if(isNaN(no_civique)){
        erreurAddresse.style.display = "block";
        erreurAddresse.innerHTML= "Le numéro civique est invalide. Veuillez entre une valeur  qui ne contient que des chiffres.\n";
        return false;
    }
    if(ville.trim().length === 0){
        erreurVille.style.display = "block";
        erreurVille.innerHTML= "Ce champ ne  peut être vide. Veuillez le nom de la ville.\n";
        return false;
    }else if(!isNaN(ville)){
        erreurVille.style.display = "block";
        erreurVille.innerHTML= "La ville est invalide. Veuillez entre une valeur  qui ne contient que des lettres.\n";
        return false;
    }
    if(code_postal.trim().length === 0){
        erreurCodePostal.style.display = "block";
        erreurCodePostal.innerHTML= "Ce champ ne  peut être vide. Veuillez entre le code postal.";
        return false;
    }else if(!format.test(code_postal)){
        erreurCodePostal.style.display = "block";
        erreurCodePostal= "Le code postal est invalide. Veuillez entrer un code postal sous le format A1A2B2";
        return false;
    }
    erreurAddresse.style.display = "none";
    erreurAddresse.innerHTML= "";

    erreurVille.style.display = "none";
    erreurVille.innerHTML= "";

    erreurCodePostal.style.display = "none";
    erreurCodePostal.innerHTML= "";
    return true;
  
}
function validerDescription(){
    let description = document.getElementById('description');
    let erreurDescription = document.getElementById('erreur-description');
    if(description.trim().length ===0){
        erreurDescription.style.display="block";
        erreurDescription.innerHTML="Ce champ ne peut être vide. Veuillez ajouter une description.";
        return false;
    }
    erreurDescription.style.display="none";
    erreurDescription.innerHTML="";
    return true;
}
function validerFormulaire() {
    document.getElementById('nom_animal').addEventListener('input', () => {validerNom();});
    document.getElementById('animal_age').addEventListener( 'input', ()=>{validerAge();});
    document.getElementById('espece').addEventListener('input', () =>{validerEspece();});
    document.getElementById('race').addEventListener('input', () =>{validerRace();});
    document.getElementById('email').addEventListener('input', () =>{validerEmail();} );
    document.getElementById('addresse').addEventListener('input', () =>{validerAdresse();});
    document.getElementById('description').addEventListener('input', () =>{validerDescription();});
        
}
function validerSoumission() {
    form.addEventListener('submit', e => {
        e.preventDefault();
        validerNom();
        validerAge();
        validerEspece();
        validerRace();
        validerEmail();
        validerAdresse();
        validerDescription();
    });
}
validerFormulaire();
validerSoumission();