var hotel1 = {
    name: "Riu Chiclana",
    location: "Chiclana - Cádiz",
    photo:"https://www.marcapital.es/sites/default/files/imagenes/proyectos/galeria/Chiclana%20%281%29.jpg",
    score: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    review: "Precioso Hotel en la costa de Chicala",
    privateReview: false
}

//Mostrando datos en el HTML del Hotel1
document.getElementById('name-hotel1').innerHTML = hotel1.name;
document.getElementById('location-hotel1').innerHTML = hotel1.location;
document.getElementById('img-hotel1').src = hotel1.photo;
document.getElementById('review-rating-hotel1').innerHTML = hotel1.score;
document.getElementById('review-hotel1').innerHTML = hotel1.review;
document.getElementById('privateReview-hotel1').checked  = hotel1.privateReview;

var hotel2 = {
    name: "",
    location: "",
    photo:"",
    score: {
        cero: "<span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
        uno: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
        dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
        tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
        cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
        cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>"
    },
    review: "",
    privateReview: ""
}

var scoretemp;

//Solicitud de Datos al usuario
hotel2.name = prompt("Cual es el nombre del Hotel 2");
hotel2.location = prompt("Cual es la localización del Hotel " + hotel2.name);
hotel2.photo = prompt("Introduzca una URL para la foto del Hotel " + hotel2.name);
scoretemp = prompt("Del cero al cinco como puntuas al Hotel " + hotel2.name);
hotel2.review = prompt("Deja una reseña al Hotel " + hotel2.name);
hotel2.privateReview = confirm("¿Quiere que la reseña al Hotel " + hotel2.name + " sea anónima?")

//Mostrando datos en el HTML del Hotel 2
document.getElementById('name-hotel2').innerHTML = hotel2.name;
document.getElementById('location-hotel2').innerHTML = hotel2.location;
document.getElementById('img-hotel2').src = hotel2.photo;
document.getElementById('review-rating-hotel2').innerHTML = hotel2.score[scoretemp];
document.getElementById('review-hotel2').innerHTML = hotel2.review;
document.getElementById('privateReview-hotel2').checked  = hotel2.privateReview;