//Get all the images
image_array = [
    '1.png',
    '2.png',
    '3.png',
    '4.png'
]
function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);

    //Get an image at the random_index
    selected_image = image_array[random_index]

    // Display the image 
    document.getElementById('image_shower').src = './image/${selected_image}'
}