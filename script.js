const gallery = document.querySelector('.gallery');
console.log(gallery);
const overlay = document.querySelector(".overlay");
const overlayClose = overlay.querySelector(".close");
console.log(overlayClose);
const overlayImage = overlay.querySelector("img");

const generateHTMl = ([h,v]) => `
    <div class="item h${h} v${v}">
        <img src="./Marvel_Images/${randomNumber(12)}.jpg"/>
        <div class="item__overlay">
            <button>View >></button>
        </div>
    </div>
`;

const handleClick = e => {
    overlayImage.src = e.currentTarget.querySelector('img').src;
    overlay.classList.add('open');
}

const randomNumber = limit => Math.floor(Math.random()*limit) + 1;

const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);

gallery.innerHTML = digits.map(generateHTMl).join('');

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', ()=> {overlay.classList.remove('open')});