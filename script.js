var imageArray = new Array(); 
imageArray[0] = "1.png"; 
imageArray[1] = "2.png"; 
imageArray[2] = "3.png"; 
 
document.getElementById("myButton").addEventListener("click", onClick); 
 
function onClick() 
{ 
	console.log(Math.floor(Math.random() * imageArray.length)); 
} 