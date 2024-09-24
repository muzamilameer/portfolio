document.getElementById('portfolioBox').onclick = function () {
    document.getElementById('popupModal').style.display = "block";
};

document.getElementsByClassName('close')[0].onclick = function () {
    document.getElementById('popupModal').style.display = "none";
};

window.onclick = function (event) {
    if (event.target == document.getElementById('popupModal')) {
        document.getElementById('popupModal').style.display = "none";
    }
};

let images = [];
let currentImageIndex = 0;

function showImages(type) {
    var imagesList = document.getElementById('imagesList');
    imagesList.innerHTML = ''; // Clear previous images

    if (type === 'wordpress') {
        images = [
            'wordpress-Portfolios/wordpress-1.jpg',
            'wordpress-Portfolios/wordpress-2.jpg',
            'wordpress-Portfolios/wordpress-3.jpg',
            'wordpress-Portfolios/wordpress-4.jpg',
            'wordpress-Portfolios/wordpress-5.jpg',
            'wordpress-Portfolios/wordpress-6.jpg',
            'wordpress-Portfolios/wordpress-7.jpg',
            'wordpress-Portfolios/wordpress-8.jpg',
            'wordpress-Portfolios/wordpress-9.jpg',
            'wordpress-Portfolios/wordpress-10.jpg',
            'wordpress-Portfolios/wordpress-11.jpg',
            'wordpress-Portfolios/wordpress-12.jpg',
            'wordpress-Portfolios/wordpress-13.jpg',
        ];
    } else if (type === 'frontend') {
        images = [
            'font-end-portfolios/front-end-1.jpg',
            'font-end-portfolios/front-end-2.jpg',
            'font-end-portfolios/front-end-3.jpg',
            'font-end-portfolios/front-end-4.jpg',
            'font-end-portfolios/front-end-5.jpg',
            'font-end-portfolios/front-end-6.jpg',
            'font-end-portfolios/front-end-7.jpg',
            'font-end-portfolios/front-end-8.jpg',
            'font-end-portfolios/front-end-9.jpg',
            'font-end-portfolios/front-end-10.jpg',
            'font-end-portfolios/front-end-11.jpg',
            'font-end-portfolios/front-end-13.jpg',
            'font-end-portfolios/front-end-13.jpg',
            'font-end-portfolios/front-end-14.jpg',
            'font-end-portfolios/front-end-15.jpg',
            'font-end-portfolios/front-end-16.jpg',
            'font-end-portfolios/front-end-17.jpg',
            

        ];
    }

    images.forEach(function (src, index) {
        var img = document.createElement('img');
        img.src = src;
        img.onclick = function () { openImageViewer(index); };
        imagesList.appendChild(img);
    });
}

function openImageViewer(index) {
    currentImageIndex = index;
    document.getElementById('fullImage').src = images[currentImageIndex];
    document.getElementById('imageViewerModal').style.display = "block";
}

document.getElementById('closeImageViewer').onclick = function () {
    document.getElementById('imageViewerModal').style.display = "none";
};

document.getElementById('prevImage').onclick = function () {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    document.getElementById('fullImage').src = images[currentImageIndex];
};

document.getElementById('nextImage').onclick = function () {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    document.getElementById('fullImage').src = images[currentImageIndex];
};

window.onclick = function (event) {
    if (event.target == document.getElementById('imageViewerModal')) {
        document.getElementById('imageViewerModal').style.display = "none";
    }
};

// -----------counters-------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});
// ---- menu----

