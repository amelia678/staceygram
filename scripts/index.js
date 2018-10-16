// Instaclone!

const IMAGES = [

{url:"https://images.pexels.com/photos/1287365/pexels-photo-1287365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
alt: "beauiful princess angel"
},
{url:"https://images.pexels.com/photos/881142/pexels-photo-881142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
alt: "beautiful princess angel"
},
{url:"https://images.pexels.com/photos/1307503/pexels-photo-1307503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
alt: "beautiful princess angel"
},
{url:"images/IMG_3520.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3530.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3553.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3562.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3572.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3594.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3609.jpg",
alt: "Stacey's friends"
},
{url:"images/2018-10-06 21:30:58.814.jpg", 
alt: "Stacey's friends"
},
{url:"images/2018-08-05 20_00_41.993.jpg",
alt: "Stacey's friends"
},

];

function getCurrentIndex(currentURL) {
    let index = IMAGES.map(function (i) {
        return i.url;
    }).indexOf(currentURL);
    return index;
}
// Array navigation functions//
function getNextImage(currentURL) {
    // find the currentURL's index in the IMAGES array
    let index = getCurrentIndex(currentURL)
    // increment the index
    index++;
    // check if it's within bounds, reset if necessary
    if (index === IMAGES.length) {
        index = 0;
    }
    // then return the img URL at the new index
    return IMAGES[index].url;
}

function getPrevImage(currentURL) {
    let index = getCurrentIndex(currentURL);

    index--;

    if (index < 0) {
        index = IMAGES.length - 1;

    }

    return IMAGES[index].url;
}

// function that generates an img element

function createImage(imageInfo) {
    const theImage = document.createElement('img');

    // theImage.src = imageURL;
    theImage.setAttribute('src', imageInfo.url);
    theImage.setAttribute('alt', imageInfo.alt);
    theImage.setAttribute('title', imageInfo.alt);

    // add an event listener to the image
    theImage.addEventListener('click', function (event) {
       console.log('hello!');
    //    the element that got clicked is accessible
    // as 'event.target'
    // And, I can read the 'src' attribute!
       console.log(event.target.src);
       
    // I can now set the output image's src to event.target.src
       outputElement.setAttribute('src', event.target.src );
    //    modalElement.classList.toggle('modal-hidden');
    // the remove is more specifiic, so we'll do that
       modalElement.classList.remove('modal-hidden');
   });

    return theImage;
};

function createThumbnail(imageInfo){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageInfo);
    theContainer.appendChild(image);

    return theContainer;
};

// let firstImageURL = IMAGES[0];
const thumbnailContainer = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');
const modalElement = document.querySelector('[data-modal]');
// console.log(modalElement);
// loop through the IMAGES array.
// for each image, call the anonymous function
// the anon func should expect to receive an image url
IMAGES.forEach(function (singleImageInfo) {
    // we pass that image URL to our creatThumbnail func
    let aThumbnail = createThumbnail(singleImageInfo);

    // then append that thumbnail to the page.
    thumbnailContainer.appendChild(aThumbnail);
} );

window.addEventListener('keydown', function (event){
    console.log('you pressed a key');
    console.log(event);
    // key: "Escape"
    // keyCode: 27

    if (event.keyCode === 27) {
        console.log('I want to hide the modal!');
        modalElement.classList.add('modal-hidden');

    }
    
    
});

modalElement.addEventListener('click', function (event) {
    // console.log('you clicked the window');
    // console.log(event);
    modalElement.classList.add('modal-hidden');
});

// Add global previous/next listeners
// keydown is faster than keypress
window.addEventListener('keydown', function (event) {
// Key: "ArrowRight"
    // keyCode: 39
    // Key: "ArrowLeft"
    // keyCode: 37
    if (event.keyCode === 37) {
        console.log('go to previous image');
        let curr = outputElement.getAttribute('src');
        let prev = getPrevImage(curr);
        outputElement.setAttribute('src', prev );

    } else if (event.keyCode === 39) {
        console.log('go to the next image');
        let curr = outputElement.getAttribute('src');
        let next = getNextImage(curr);
        outputElement.setAttribute('src', next);
    }
});






