var name1 = prompt("Enter the name of First player : ");
var name2 = prompt("Enter the name of second player :");
document.querySelector(".player1").innerHTML = name1;
document.querySelector(".player2").innerHTML = name2;


function menu() {
    var n1 = Math.random() * 6;
    n1 = Math.floor(n1) + 1;
    var n2 = Math.random() * 6;
    n2 = Math.floor(n2) + 1;
    randomnumber1 = n1;
    randomnumber2 = n2;
    // function player1(randomnumber1){
    if (randomnumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }
    else if (randomnumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }
    else if (randomnumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }
    else if (randomnumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }
    else if (randomnumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }
    else {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
    //  }
    // function player2(randomnumber2){

    if (randomnumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }
    else if (randomnumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }
    else if (randomnumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }
    else if (randomnumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }
    else if (randomnumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }
    else {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
    //  }


     if(randomnumber1 > randomnumber2){
        document.querySelector(".container h1").style.fontSize = "60px";
        document.querySelector(".container h1").innerHTML = name1+" Win ❤️";

    }else if(randomnumber1 < randomnumber2){
        document.querySelector(".container h1").style.fontSize = "60px";
        document.querySelector(".container h1").innerHTML = name2+" Win ❤️";

    }
    else{
       document.querySelector(".container h1").innerHTML = "Draw!";

    }


}



// var msg = prompt("do you want to start : (1/0)");

// if(msg === '1'){
// var n1 = Math.random() * 7;
// n1 = Math.floor(n1);
// var n2 = Math.random() * 7;
// n2 = Math.floor(n2);
// menu(n1,n2);

// }
// else{
//     alert("Thank you...!");
// }


function myfunction() {
    var mycollection = document.getElementsByTagName("p");
    for (var i = 0; i < mycollection.length; i++) {
        mycollection[i].style.color = "green";
    }
    document.querySelector("#about").style.color = "grey";
    document.querySelector("#about").style.fontSize = "25px";

}