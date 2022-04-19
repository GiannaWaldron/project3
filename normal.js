var imgTimer;

function imageTimeOut(){
    imgTimer = setTimeout(getRandomImage, 1000);   
}
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "image/71.png";
    randomImage[1] = "image/72.png";
    randomImage[2] = "image/73.png";
    randomImage[3] = "image/74.png";
    randomImage[4] = "image/75.png";
    randomImage[5] = "image/76.png";
    randomImage[6] = "image/77.png";
    randomImage[7] = "image/78.png";
    randomImage[8] = "image/79.png";
    randomImage[9] = "image/80.png";
    randomImage[10] = "image/81.png";
    randomImage[11] = "image/82.png";
	randomImage[12] = "image/83.png";

    for (let i = 0; i < 13; i++) {
        var number = Math.floor(Math.random() * randomImage.length);
        document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" style="margin-right=300px" />';
    }
}