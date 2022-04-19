function imageTimeOut(){
    imgTimer = setTimeout(getRandomImage, 1000);   
}
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "image/40.png";
    randomImage[1] = "image/41.png";
    randomImage[2] = "image/42.png";
    randomImage[3] = "image/43.png";
    randomImage[4] = "image/44.png";
    randomImage[5] = "image/45.png";
    randomImage[6] = "image/46.png";
    randomImage[7] = "image/47.png";
    randomImage[8] = "image/48.png";
    randomImage[9] = "image/49.png";
    randomImage[10] = "image/50.png";
    randomImage[11] = "image/51.png";
	randomImage[12] = "image/52.png";

    for (let i = 0; i < 13; i++) {
        var number = Math.floor(Math.random() * randomImage.length);
        document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" style="margin-right=300px" />';
    }
}