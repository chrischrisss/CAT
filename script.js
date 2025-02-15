let preloader = document.getElementById('preloader');
const yesBtn = document.querySelector('.yes-btn');
const question = document.querySelector('.question');

window.addEventListener('load', function() {

    setTimeout(function() {
        preloader.style.opacity = '0';

        setTimeout(function() {
            preloader.style.display = 'none';
        }, 3000);
    }, 7000);
   
});

document.addEventListener('DOMContentLoaded', function () {
    let progress = document.getElementById('progress');
    let loader = document.getElementById('loader');
    let width = 0;

    // Simulate loading progress
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval); // Stop the animation when complete
            
            setTimeout(function () {
                loader.style.opacity = '0'; // Start fade-out
                setTimeout(function () {
                    loader.style.display = 'none'; // Hide loader after fade-out
                }, 500); // Match this to the CSS transition duration (0.5s = 500ms)
            }, 4000); // Keep bar complete for 2 seconds
        } else {
            width++; // Increment width
            progress.style.width = width + '%'; // Update progress bar
        }
    }, 30); // Adjust the speed (50ms for smoother animation)
});



//CAT FALLING

// document.addEventListener('DOMContentLoaded', function () {
//     const yesButton = document.getElementById('yes_btn');

//     yesButton.addEventListener('click', function () {
//         createFallingImage();
//     });

//     function createFallingImage() {
//         // Create a new image element
//         const img = document.createElement('img');
//         img.src = '/images/pngimg.com - cat_PNG50513.png'; // Change this URL to your desired image
//         img.className = 'falling-image';

//         // Set random horizontal position
//         img.style.left = Math.random() * window.innerWidth + 'px';

//         // Append image to body
//         document.body.appendChild(img);

//         // Trigger the falling animation
//         setTimeout(() => {
//             img.style.top = window.innerHeight + 'px';
//         }, 100);

//         // Remove image after animation ends
//         setTimeout(() => {
//             img.remove();
//         }, 5000);
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const yesButton = document.getElementById('yes_btn');

    yesButton.addEventListener('click', function () {
        createTossableImage();
    });

    function createTossableImage() {
        const img = document.createElement('img');
        img.src = './images/IMG_1200-removebg-preview.png';
        img.className = 'bouncing-cat';

        img.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        img.style.top = Math.random() * (window.innerHeight - 100) + 'px';

        document.body.appendChild(img);

        let xVelocity = 0;
        let yVelocity = 0;
        let gravity = 0.5;
        let isDragging = false;
        let lastX, lastY, currentX, currentY;

        // Drag and Toss Mechanics
        img.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevents image selection
            isDragging = true;
            lastX = e.clientX;
            lastY = e.clientY;
            xVelocity = 0;
            yVelocity = 0;
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault(); // Prevents text selection while dragging
                currentX = e.clientX;
                currentY = e.clientY;
                img.style.left = currentX - img.width / 2 + 'px';
                img.style.top = currentY - img.height / 2 + 'px';

                xVelocity = currentX - lastX;
                yVelocity = currentY - lastY;
                lastX = currentX;
                lastY = currentY;
            }
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Animation Loop
        function animate() {
            if (!isDragging) {
                let xPos = img.offsetLeft;
                let yPos = img.offsetTop;

                xPos += xVelocity;
                yPos += yVelocity;
                yVelocity += gravity;

                // Bounce off walls
                if (xPos <= 0 || xPos + img.width >= window.innerWidth) {
                    xVelocity *= -0.8;
                }

                if (yPos + img.height >= window.innerHeight) {
                    yPos = window.innerHeight - img.height;
                    yVelocity *= -0.8;
                }

                img.style.left = xPos + 'px';
                img.style.top = yPos + 'px';
            }
            requestAnimationFrame(animate);
        }
        animate();
    }
});


yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Thank You :)';
})
