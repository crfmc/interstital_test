import {carSVG} from "./carSVG.js"; // import car icon

// Add listener for click event onn a color option and show modal 
// corresponding ot it
const color_opts = document.querySelector('.container--options');
color_opts.addEventListener('click', e => {
  if (e.target.classList.contains("container--option")) {
    const chosen = e.target;
    showModal(chosen);
  }
});

/**
 * [setImage(color)] injects the carSVG with a color [color] into the 
 * 'div.modal--img' element in the DOM
 */
function setImageColor(color) {
  const icon = document.querySelector('.modal--img');
  icon.innerHTML = carSVG(color);
  
}

/**
 * [getUrl(color)] gets the url that corresponds with the color choice
 */
function getUrl(color) {
  switch(color) {
    case "black":
      return "https://duckduckgo.com/?q=black+car&t=brave&iax=images&ia=images";
    case "red":
      return "https://duckduckgo.com/?q=Red+car&t=brave&iar=images&iax=images&ia=images";
    case "blue":
      return "https://duckduckgo.com/?q=Blue+Car&t=brave&iar=images&iax=images&ia=images";
    default:
      break;
  }
}

/**
 * [setconfirmationButtons] adds and event listener to the modal confirmation
 * buttons. It sets the button with id of 'yes' to the url corresponding
 * to the choice of color [color], and the button with the id of 'no' to
 * redirect to the home page, closing the modal.
 */
function setConfirmationButtons(color) {

  let url = getUrl(color);

  // Add listener for click event on modal confirmation button (aka YES/NO)
  let confirmation_opts = document.querySelector('.modal--buttons');

  confirmation_opts.addEventListener('click', e => {
    if (e.target.classList.contains("modal--button")) {
      let chosen = e.target.getAttribute('id')
      switch (chosen) {
        case "yes":
          window.open(url); // Open new tab with the corresponding url
        case "no":
          window.location.href = "./"; // Redirects user to the primary page
        default:
          break;
      }
    }
  })
}

/**
 * [showModal(node)] displays a modal with information dependent on
 * which node has been clicked.
 */
function showModal(node) {

  // Get the color stored in the id of the node
  const color = node.getAttribute('id');

  // Set the confirmation buttons to redirect to the correct pages
  setConfirmationButtons(color);

  // Set modal subtext to corresponding color [color]
  const subtext = document.querySelector('#carColor');
  subtext.innerText = color;

  // Set car icon to corresponding color
  setImageColor(color);

  // Display modal
  const modal = document.querySelector('.modal');
  modal.classList.remove('hidden');
}
