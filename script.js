const slider = document.getElementById("slider");
const images = document.querySelectorAll(".image-div");

let count = 0;

const slides = [
        { img: "./images/img_1.jpeg" },
        { img: "./images/img_2.jpeg" },
        { img: "./images/img_3.jpeg" },
        { img: "./images/img_4.jpeg" },
        { img: "./images/img_5.jpg" },
        { img: "./images/img_6.jpeg" },
        { img: "./images/img_7.jpeg" },
        { img: "./images/img_8.jpeg" },
]

for (let i = 0; i < slides.length; i++) {
        const element = slides[i];
        // Images div
        const image_div = document.createElement("div");
        image_div.classList.add("image-div")
        slider.appendChild(image_div);

        // Images
        const image = document.createElement("img");
        image.classList.add("image")
        image_div.appendChild(image);
        image.src = element.img
}

setInterval(() => {
        count++;

        if (count >= slides.length) {
                count = 0;
                slider.style.transform = `translateX(0px)`;
        }
        else {
                slider.style.transition = "transform 0.5s ease-in-out";
                slider.style.transform = `translateX(-${count * 600}px)`;
        }
}, 3000);