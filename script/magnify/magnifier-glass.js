// magnify.js

export function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  // Create magnifier glass:
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  // Insert magnifier glass:
  img.parentElement.insertBefore(glass, img);

  // Set background properties for the magnifier glass:
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize =
    img.width * zoom + "px " + img.height * zoom + "px";

  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  // Hide the magnifier when the cursor is outside the image
  glass.style.display = "none"; // Initially hidden

  // Function for mouse movement over the image:
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  // Also handle touch events:
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  // Function to move the magnifier
  function moveMagnifier(e) {
    var pos, x, y;

    // Prevent other actions that might occur when moving over the image
    e.preventDefault();

    // Get the cursor's x and y positions
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    // Check if the cursor is inside the image container
    if (x > 0 && x < img.width && y > 0 && y < img.height) {
      // If inside, show the magnifier
      glass.style.display = "block";

      // Prevent the magnifier glass from being positioned outside the image
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }

      // Set the position of the magnifier glass
      glass.style.left = x - w + "px";
      glass.style.top = y - h + "px";

      // Display the magnified portion of the image in the magnifier glass
      glass.style.backgroundPosition =
        "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    } else {
      // If outside, hide the magnifier
      glass.style.display = "none";
    }
  }

  // Function to get the cursor position
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;

    // Get the x and y positions of the image
    a = img.getBoundingClientRect();

    // Calculate the cursor's x and y coordinates, relative to the image
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    // Consider any page scrolling
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    return { x: x, y: y };
  }
}
