var imgTimer;

function imageTimeOut(){
    imgTimer = setTimeout(getRandomImage, 1000);   
}
function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "image/84.png";
    randomImage[1] = "image/85.png";
    randomImage[2] = "image/86.png";
    randomImage[3] = "image/87.png";
    randomImage[4] = "image/88.png";
    randomImage[5] = "image/89.png";
    randomImage[6] = "image/90.png";
    randomImage[7] = "image/91.png";
    randomImage[8] = "image/92.png";
    randomImage[9] = "image/93.png";
    randomImage[10] = "image/94.png";
    randomImage[11] = "image/95.png";
	randomImage[12] = "image/96.png";

    for (let i = 0; i < 13; i++) {
        var number = Math.floor(Math.random() * randomImage.length);
        document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" style="margin-right=300px" />';
    }
}