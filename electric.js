
function imageTimeOut(){
    imgTimer = setTimeout(getRandomImage, 1000);   
}
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "image/14.png";
    randomImage[1] = "image/15.png";
    randomImage[2] = "image/16.png";
    randomImage[3] = "image/17.png";
    randomImage[4] = "image/18.png";
    randomImage[5] = "image/19.png";
    randomImage[6] = "image/20.png";
    randomImage[7] = "image/21.png";
    randomImage[8] = "image/22.png";
    randomImage[9] = "image/23.png";
    randomImage[10] = "image/24.png";
    randomImage[11] = "image/25.png";
	randomImage[12] = "image/26.png";

    for (let i = 0; i < 13; i++) {
        var number = Math.floor(Math.random() * randomImage.length);
        document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" style="margin-right=300px" />';
    }
}