let n = 0;

function slide() {
  const images = document.getElementsByClassName("img");
  const button = document.getElementsByClassName("button");

  for (let i = 0; i < images.length; i++) {
    images[i].style = "display:none";
  }
  for (let i = 0; i < button.length; i++) {
    button[i].className = button[i].className.replace(" active", "");
  }

  n++;
  if (n > images.length) {
    n = 1;
  }

  images[n - 1].style = "display:block";
  button[n - 1].className += " active";

  setTimeout(slide, 3000);
}

slide();

let cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        cards.forEach((card, i) => {
            if (i !== index) {
                card.style.transition = 'box-shadow 1.5s cubic-bezier(0.215, 0.61, 0.355, 1)';
                card.style.boxShadow = '0 0 0px rgba(0, 0, 0, 0.06)';
            }
        });
    }
    );

    card.addEventListener('mouseleave', () => {
        cards.forEach((card, i) => {
            if (i !== index) {
                card.style.transition = 'box-shadow 0.9s ease-in-out';
                card.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.06)';
            }
        });
    });
});

