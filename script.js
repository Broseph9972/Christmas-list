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

// Toggle Checkboxes Visibility
function toggleCheckboxes() {
  const checkboxes = document.querySelectorAll('li input[type="checkbox"]');
  const eyeIcon = document.getElementById('toggle-eye-icon');
  const isHidden = checkboxes[0].style.display === 'none';
  checkboxes.forEach(checkbox => {
    checkbox.style.display = isHidden ? 'inline-block' : 'none';
  });
  eyeIcon.src = isHidden ? 'open-eye.png' : 'closed-eye.png';
}

// Toggle About Section Visibility
function toggleAbout() {
  const aboutBox = document.getElementById('about-box');
  aboutBox.style.display = aboutBox.style.display === 'none' ? 'block' : 'none';
}

// Populate Gift List
const gifts = [
  { name: 'Spotify Premium', priority: 9 },
  { name: 'Any Apple Watch w/ GPS and Cellular', priority: 8 },
  { name: 'Almost anything here', priority: 7 },
  { name: 'Portable Monitor', priority: 9 },
  { name: 'MicroSD cards (any pack of 3-5 32GB works great)', priority: 7 },
  { name: 'Raspberry Pi 400', priority: 5 },
  { name: 'Mark Rober Hackpack', priority: 8 },
  { name: 'Capture Card', priority: 5 },
  { name: 'Steam Deck', priority: 10 },
  { name: 'Mighty Music Player', priority: 8 },
  { name: 'Soldering Iron', priority: 6 },
  { name: 'SNES Controller', priority: 7 },
  { name: 'Flipper Zero', priority: 9 },
  { name: 'Literally anything here', priority: 7 },
  { name: '3D Printer', priority: 8 },
  { name: 'New Monitor', priority: 9 },
  { name: 'Butterfly Knife', priority: 3 },
  { name: 'AR Glasses', priority: 4 },
  { name: 'Mini Projector', priority: 5 },
  { name: 'Sayo Device', priority: 6 }
];

const giftContainer = document.getElementById('gift-container');

gifts.forEach(({ name, priority }) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div>
      ${name}
      <span class="priority-number" style="background-color: hsl(${(10 - priority) * 12}, 70%, 50%);">
        ${priority}
      </span>
    </div>
    <input type="checkbox">
  `;
  giftContainer.appendChild(li);
});
