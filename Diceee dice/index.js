var rand1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + rand1 + ".png";

var randImageSource1 = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randImageSource1);

var rand2 = Math.floor(Math.random() * 6) + 1;

var randImageSource2 = "images/dice" + rand2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randImageSource2);

if(rand1>rand2)
{
    document.querySelector("h1").innerHTML= "🚩 Play 1 Wins!";
}
else if(rand2>rand1)
{
    document.querySelector("h1").innerHTML= "🚩 Play 2 Wins!";
}
else{

    document.querySelector("h1").innerHTML= "🚩Draw";
}


