let Nombres = [3,8,12,5,10,7]
//on déclare la variable

for(let i=0; i<Nombres.length; i++){
    //Boucle: On récupère chaque variable pour les analyser une par une de la prmeière à la dernière
    //On utilise une itération qui s'appelle i et qui commence toujours par 0
    //Let: exprimer d'où on part, jusqu'où aller, et on incrémente de un en un de la première à la dernière variable

    if(Nombres[i] %2 === 0){
        //"Le nombre est pair"
        console.log("Le nombre " + Nombres[i] + " est pair");
    }else{
        //"Le nombre est impair"
        console.log("Le nombre " + Nombres[i] + " est impair");
    }
    }
