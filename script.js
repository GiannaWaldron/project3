var imgTimer;

function imageTimeOut(){
    imgTimer = setTimeout(getRandomImage, 1000);   
}
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "image/1.png";
    randomImage[1] = "image/2.png";
    randomImage[2] = "image/3.png";
    randomImage[3] = "image/4.png";
    randomImage[4] = "image/5.png";
    randomImage[5] = "image/6.png";
    randomImage[6] = "image/7.png";
    randomImage[7] = "image/8.png";
    randomImage[8] = "image/9.png";
    randomImage[9] = "image/10.png";
    randomImage[10] = "image/11.png";
    randomImage[11] = "image/12.png";
	randomImage[11] = "image/13.png";

    for (let i = 0; i < 13; i++) {
        var number = Math.floor(Math.random() * randomImage.length);
        document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" style="margin-right=300px" />';
    }
}