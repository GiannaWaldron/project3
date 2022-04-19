function imageTimeOut(){
    imgTimer = setTimeout(getRandomImage, 1000);   
}
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "image/27.png";
    randomImage[1] = "image/28.png";
    randomImage[2] = "image/29.png";
    randomImage[3] = "image/30.png";
    randomImage[4] = "image/31.png";
    randomImage[5] = "image/32.png";
    randomImage[6] = "image/33.png";
    randomImage[7] = "image/34.png";
    randomImage[8] = "image/35.png";
    randomImage[9] = "image/36.png";
    randomImage[10] = "image/37.png";
    randomImage[11] = "image/38.png";
	randomImage[12] = "image/39.png";

    for (let i = 0; i < 13; i++) {
        var number = Math.floor(Math.random() * randomImage.length);
        document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" style="margin-right=300px" />';
    }
}