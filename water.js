var imgTimer;

function imageTimeOut(){
    imgTimer = setTimeout(getRandomImage, 1000);   
}
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "image/53.png";
    randomImage[1] = "image/54.png";
    randomImage[2] = "image/55.png";
    randomImage[3] = "image/56.png";
    randomImage[4] = "image/57.png";
    randomImage[5] = "image/58.png";
    randomImage[6] = "image/59.png";
    randomImage[7] = "image/60.png";
    randomImage[8] = "image/61.png";
    randomImage[9] = "image/62.png";
    randomImage[10] = "image/63.png";
    randomImage[11] = "image/64.png";
	randomImage[12] = "image/65.png";
    randomImage[13] = "image/66.png";
    randomImage[14] = "image/67.png";
    randomImage[15] = "image/68.png";
    randomImage[16] = "image/69.png";
	randomImage[17] = "image/70.png";


    for (let i = 0; i < 18; i++) {
        var number = Math.floor(Math.random() * randomImage.length);
        document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" style="margin-right=300px" />';
    }
}