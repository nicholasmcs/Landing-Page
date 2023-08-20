/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// Build the nav

// Get all sections with data-nav attribute
const sections = document.querySelectorAll('section[data-nav]');
const menuLinks = document.querySelectorAll('.navbar__menu .menu__link');

// Navigation menu
const navbarList = document.getElementById('navbar__list');
sections.forEach(section => {
  const navItem = document.createElement('li');
  const anchor = document.createElement('a');
  
  // Anchor text and href to link to the section
  anchor.textContent = section.getAttribute('data-nav');
  anchor.href = `#${section.id}`;
  
  // Click event to scroll to the section smoothly
  anchor.addEventListener('click', event => {
    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Append the anchor to the list item and the list item to the navigation menu
  navItem.appendChild(anchor);
  navbarList.appendChild(navItem);
});

// Active section and navigation menu item on scroll
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const boundingBox = section.getBoundingClientRect();
    if (boundingBox.top <= 150 && boundingBox.bottom >= 150) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  });
});
