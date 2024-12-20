// Snowflakes Effect
function createSnowflakes() {
  const container = document.getElementById('snow-container');
  for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.width = snowflake.style.height = `${Math.random() * 5 + 5}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(snowflake);
  }
}
createSnowflakes();

const gifts = [
  { name: 'Spotify Premium', priority: 9, link: 'https://support.spotify.com/us/article/gift-cards/' },
  { name: 'Any Apple Watch w/ GPS and Cellular', priority: 8 },
  { name: 'Almost anything here', priority: 7, link: 'https://coolsciencefinds.com/articles/best-science-gifts' },
  { name: 'Portable Monitor', priority: 9, link: 'https://www.amazon.com/Portable-Monitor-15-6inch-Computer-Protector/dp/B088D8JG3L?dib=eyJ2IjoiMSJ9.KshhJ3pv9cZgjcyS4YAyeS1d3g2aB3XSmaMXdGVKSZVoGEJVqNcVWsrVf2TtCB12Pg07dUqU9XH-0QXGzEeB8DCM251YGoOYqvHcWnKB9V3qXC5UzidYB_GMsMo2zHtPtpkeYfXKRBgO-CKrDSx93E0erU2M-pV57Je5cGFCBjYeOggXg1cLH9QVQ_s6avQobNLWaKP8bT8CgUyefNNuKo62cdL6sNclxsgpCJsW9gP7RcrDvKoWFw9E50NRLr31Q4EEWFJgXOhNR754fu3Cl-GS9p2YHHSBqPRNn4EVm4.CKDhkhGhGOeRLqfQ0gwcj0GOZv0HDsRpuhpsZpn3fSM&dib_tag=se&keywords=portable+monitor&qid=1733520618&rnid=23991554011&s=electronics&sr=1-1' },
  { name: 'MicroSD cards (any pack of 3-5 32GB works great)', priority: 6 },
  { name: 'Raspberry Pi 400/500', priority: 8 },
  { name: 'Raspberry Pi Monitor', priority: 8 },
  { name: 'Mark Rober Hackpack', priority: 9 },
  { name: 'Capture Card', priority: 5 },
  { name: 'Steam Deck', priority: 10 },
  { name: 'Soldering Iron', priority: 5 },
  { name: 'SNES Controller', priority: 3, link: 'https://www.amazon.com/Bluetooth-Controller-Joysticks-Vibration-Compatible-Mac/dp/B0BW3VTKHD?crid=3R0LIPS5GDAS5&dib=eyJ2IjoiMSJ9.bihQNK9N76-DUXKDvCwR_MIl2nYCMrchdlcGLt47p1Z23EyB1AidOl0Y-dubXrn-nnqghUdALd2xnbadw7348mZ8jGFw1pnBmN2BYu2a_MoEQG3KNuI2uBJWiNUhcpL7QAca5R6H5mp14HrXIFjicB32HQ1qMEOqDF_dBLzJ4CEns3NUdMb8xMQpqRCOnSQV25FleEyu7ppCyLmJGc_K_DH3h8jfZ7bW66FzkDZnKQY.EXs67LIenihNNqHNrC4zZOdZYdMTZpRX-LXZtZYkKvk&dib_tag=se&keywords=snes+controller+wireless&qid=1733445142&sprefix=snes+controller+wireless,aps,120&sr=8-16&th=1' },
  { name: 'Flipper Zero', priority: 9 },
  { name: 'Literally anything here', priority: 7, link: 'https://hak5.org' },
  { name: 'Any old CRT monitor from eBay or something and an HDMI adapter', priority: 9 },
  { name: '3D Printer', priority: 8 },
  { name: 'New Monitor', priority: 9 },
  { name: 'Butterfly Knife', priority: 5 },
  { name: 'AR Glasses', priority: 8 },
  { name: 'Mini Projector', priority: 2 },
  { name: 'Sayo Device', priority: 3 },
  { name: 'Dog Toys (for Caleb)', priority: 2 },
  { name: 'Mute Button for Esther', priority: 10 },
  { name: 'Laser', priority: 7 },
  { name: 'Any old Wii off eBay or something', priority: 9 },
  { name: 'Nintendo DS', priority: 8 },
  { name: 'This course', priority: 7, link: 'https://www.udemy.com/course/kali-linux-certification-course-hacking-with-kali-linux/?couponCode=ST21MT121624' }
];

// Sort gifts by priority in descending order
gifts.sort((a, b) => b.priority - a.priority);

// Function to color priorities
function getPriorityColor(priority) {
  if (priority >= 9) return '#ff0000'; // Red for high priority
  if (priority >= 7) return '#ffa500'; // Orange for medium priority
  if (priority >= 5) return '#ffff00'; // Yellow for low priority
  return '#00ff00'; // Green for very low priority
}

// Function to display gifts
function displayGifts() {
  const giftContainer = document.getElementById('gift-container');
  gifts.forEach(gift => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div>${gift.name}${gift.link ? ` <a href="${gift.link}" class="gift-link">(Link)</a>` : ''}</div>
      <div class="priority-number" style="background-color: ${getPriorityColor(gift.priority)}">${gift.priority}</div>
    `;
    giftContainer.appendChild(listItem);
  });
}

// Function to create help icon
function createHelpIcon() {
  const helpIcon = document.createElement('div');
  helpIcon.className = 'help-icon';
  helpIcon.innerHTML = '?';
  helpIcon.title = 'Click to understand priority icons';
  helpIcon.onclick = () => {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <div class="popup-content">
        <p>Priority Icons:<br>Red: High priority (9-10)<br>Orange: Medium priority (7-8)<br>Yellow: Low priority (5-6)<br>Green: Very low priority (below 5)<br><br>I can make one of these for cousins on request :)</p>
        <button class="close-popup">Close</button>
      </div>
    `;
    popup.style.position = 'fixed';
    popup.style.top = '10px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.zIndex = '1000';
    document.body.appendChild(popup);

    const closeButton = popup.querySelector('.close-popup');
    closeButton.onclick = () => {
      popup.remove();
    };
  };
  document.body.appendChild(helpIcon);
}

displayGifts();
createHelpIcon();