# Implementation Tasks: Erythrai Mystical Journey

This document serves as the step-by-step implementation blueprint for the "Erythrai Mystical Journey" mobile-first web application.

## Phase 1: Project Setup & HTML Structure (`index.html`)
- [x] 1.1. Create basic HTML5 boilerplate with a mobile-optimized viewport meta tag.
- [x] 1.2. Include necessary Google Fonts (e.g., 'Cinzel' for headings, 'Lora' for body text) in the `<head>`.
- [x] 1.3. Link external `style.css` and `app.js` files.
- [x] 1.4. Create the main `<main>` container for the application layout.
- [x] 1.5. Create an empty container div (e.g., `<div id="sections-container"></div>`) where the JavaScript will dynamically inject the section cards.
- [x] 1.6. Create the HTML structure for the Prophecy Modal/Pop-up (hidden by default), including a content area for the prophecy text and a close button.

## Phase 2: Theming & Styling (`style.css`)
- [x] 2.1. Define CSS custom properties (variables) for the mystical color palette: Erythros red, Silver-olive green, warm stone grays, and sand tones.
- [x] 2.2. Apply global reset, box-sizing, and set the default body font, background color, and text color using the defined CSS variables.
- [x] 2.3. Style the main container for a vertical scrolling layout with appropriate padding for mobile devices.
- [x] 2.4. Style the base "Section Card" layout (borders, background, padding, margin, heading/body typography).
- [x] 2.5. Create the `.locked` class: Apply opacity (e.g., 0.5), disable pointer events (`pointer-events: none`), and position a lock icon overlay. Ensure text content is hidden within this state.
- [x] 2.6. Create the `.unlocked` class: Full opacity, active pointer events, and visible text content. Add a subtle transition effect for when a section changes from locked to unlocked.
- [x] 2.7. Style the Section 5 specific elements: The `<video>` container to make it responsive (max-width 100%).
- [x] 2.8. Style the "Receive Your Prophecy" button: Mystical appearance (colors, borders) and initial hidden state (`display: none` or `opacity: 0`). Add a smooth fade-in CSS class.
- [x] 2.9. Style the Prophecy Modal: Fixed positioning, semi-transparent overlay background, centered mystical card, readable typography, and smooth enter/exit transitions.

## Phase 3: JavaScript Initialization & Data (`app.js`)
- [x] 3.1. Define the `sectionsData` array containing the 5 section objects (id, title, content) as specified in the PRD.
- [x] 3.2. Define the `prophecies` array containing the 4 mystical string responses.
- [x] 3.3. Write a function to parse the current URL and extract the `step` query parameter (`?step=N`).
- [x] 3.4. Implement `localStorage` state management logic on app initialization:
    - Read `activeStep` from `localStorage` (default to 1 if empty).
    - Compare the URL `step` parameter with the `localStorage` value.
    - If URL `step` > `localStorage` step, update `localStorage` with the URL's value.
    - Determine the final, effective `activeStep` to be used for rendering.

## Phase 4: Dynamic DOM Rendering (`app.js`)
- [x] 4.1. Select the `#sections-container` DOM element.
- [x] 4.2. Create a function `renderSections(activeStep)` that iterates over the `sectionsData` array.
- [x] 4.3. Within the loop, generate the HTML string or DOM elements for each section card.
- [x] 4.4. Apply conditional rendering logic during generation:
    - If `section.id <= activeStep`: Apply `.unlocked` class, display the full `title` and `content`.
    - If `section.id > activeStep`: Apply `.locked` class, display the `title`, but hide `content` and show a lock icon/message instead.
- [x] 4.5. For Section 5 (id: 5), if it is unlocked, inject the `<video>` element with a placeholder source and the hidden "Receive Your Prophecy" button into the card's HTML.
- [x] 4.6. Append the generated cards to the `#sections-container`.

## Phase 5: Interactive Elements & Prophecy Logic (`app.js`)
- [x] 5.1. Create an initialization function that runs after `renderSections` to attach event listeners to dynamically created elements.
- [x] 5.2. Select the Section 5 `<video>` element (if it exists in the DOM) and attach an `ended` event listener.
- [x] 5.3. In the video `ended` callback, trigger the fade-in animation/display toggle for the "Receive Your Prophecy" button.
- [x] 5.4. Attach a `click` event listener to the "Receive Your Prophecy" button.
- [x] 5.5. In the button click callback, use `Math.random()` to pick a random index and select a prophecy from the `prophecies` array.
- [x] 5.6. Inject the selected prophecy text into the Prophecy Modal's content area.
- [x] 5.7. Display the Prophecy Modal by modifying its CSS classes/styles.
- [x] 5.8. Attach a `click` event listener to the modal's close button and/or background overlay to hide the modal and clear its content.

## Phase 6: Final Review & Testing
- [ ] 6.1. Verify initial load state: Visiting the base URL without parameters should load the step saved in `localStorage` (or step 1).
- [ ] 6.2. Test the unlocking progression: Manually append `?step=3` and then `?step=5` to the URL and verify the correct sections unlock seamlessly.
- [ ] 6.3. Test the Section 5 video logic: Ensure the video plays, the button remains hidden until the end, and appears correctly.
- [ ] 6.4. Test the Prophecy generator: Verify the modal appears, displays a random message, and can be closed.
- [ ] 6.5. Perform visual review against PRD theme requirements (colors, fonts, mobile responsiveness).
