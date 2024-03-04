const shuffle = (list) => {
    templist = list

    let currentIndex = templist.length
    let randomIndex

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        const temp = templist[currentIndex]
        templist[currentIndex] = templist[randomIndex]
        templist[randomIndex] = temp 
    }
    return templist
}
/*
    Step 1:
    - Create an array named 'urls' of eight strings containing the following values:

    https://i.ibb.co/sjvVrG3/fruit-plyh.jpg
    https://i.ibb.co/g3tqj4w/fruit-zxcv.jpg
    https://i.ibb.co/88Hy4rD/fruit-wert.jpg
    https://i.ibb.co/NmNMLKF/fruit-astt.jpg
    https://i.ibb.co/qp8Q1G6/fruit-dfgh.jpg
    https://i.ibb.co/9thfVhB/fruit-hjkl.jpg
    https://i.ibb.co/YtTfqvD/fruit-dcnj.jpg
    https://i.ibb.co/CVwKM8Z/fruit-ecuh.jpg
    https://i.ibb.co/ccNyKX0/fruit-uzxc.jpg
    
    - Pass the array to the provided shuffle() function and save the returned (randomized) array into a new variable
    named 'randomUrls'


    Step 2:
    - Get all image elements (but only the ones inside elements with class 'card') from the DOM using any available DOM methods and store them in a variable named 'images'


    Step 3:
    - Loop through the array of image elements and assign a string (in order) from your 'randomSources' array to the src attribute of the current image. For example, if your randomized array looks like the following:

    https://i.ibb.co/sjvVrG3/fruit-plyh.jpg
    https://i.ibb.co/ccNyKX0/fruit-uzxc.jpg
    https://i.ibb.co/NmNMLKF/fruit-astt.jpg
    https://i.ibb.co/g3tqj4w/fruit-zxcv.jpg
    https://i.ibb.co/YtTfqvD/fruit-dcnj.jpg
    https://i.ibb.co/88Hy4rD/fruit-wert.jpg
    https://i.ibb.co/9thfVhB/fruit-hjkl.jpg
    https://i.ibb.co/qp8Q1G6/fruit-dfgh.jpg
    https://i.ibb.co/CVwKM8Z/fruit-ecuh.jpg

    then the images must appear *in that order* in the HTML


    Step 4:
    - Append an exclamation point (!) to the .textContent property of the h1 on the page

*/
const urls = [
    "https://i.ibb.co/sjvVrG3/fruit-plyh.jpg",
    "https://i.ibb.co/g3tqj4w/fruit-zxcv.jpg",
    "https://i.ibb.co/88Hy4rD/fruit-wert.jpg",
    "https://i.ibb.co/NmNMLKF/fruit-astt.jpg",
    "https://i.ibb.co/qp8Q1G6/fruit-dfgh.jpg",
    "https://i.ibb.co/9thfVhB/fruit-hjkl.jpg",
    "https://i.ibb.co/YtTfqvD/fruit-dcnj.jpg",
    "https://i.ibb.co/CVwKM8Z/fruit-ecuh.jpg",
    "https://i.ibb.co/ccNyKX0/fruit-uzxc.jpg"
];


const randomUrls = shuffle(urls);

// Step 2:
const images = document.querySelectorAll('.card img');

// Step 3:
images.forEach((image, index) => {
    image.src = randomUrls[index];
});

// Step 4:
const h1 = document.querySelector('h1');
h1.textContent += '!';
