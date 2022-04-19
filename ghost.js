var imgTimer;

function imageTimeOut(){
    imgTimer = setTimeout(getRandomImage, 1000);   
}
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "image/97.png";
    randomImage[1] = "image/98.png";
    randomImage[2] = "image/99.png";
    randomImage[3] = "image/100.png";
    randomImage[4] = "image/101.png";
    randomImage[5] = "image/102.png";
    randomImage[6] = "image/103.png";
    randomImage[7] = "image/104.png";
    randomImage[8] = "image/105.png";
    randomImage[9] = "image/106.png";
    randomImage[10] = "image/107.png";
    randomImage[11] = "image/108.png";
	randomImage[12] = "image/109.png";

    for (let i = 0; i < 13; i++) {
        var number = Math.floor(Math.random() * randomImage.length);
        document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" style="margin-right=300px" />';
    }
}