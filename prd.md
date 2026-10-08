# PRD: Erythrai Mystical Journey (Gizemli Yolculuk)

## 1. Project Overview & Vision
**Project Name:** Erythrai: Mystical Journey
**Platform:** Mobile-First Web Application (Single Page Application layout)
**Purpose:** To create a gamified, mystic-themed interactive tour guide for tourists visiting the ancient city of Erythrai (Ildırı, Çeşme). The experience unlocks progressively via physical QR codes placed along the climbing route.
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript. *No backend, no database, no complex frameworks (like React/Vue) or build tools.* All textual and architectural data will be stored as mock data (JSON) directly in the frontend script. State management will be handled purely via browser `localStorage`. The architecture must be simple, zero-dependency, and ready for instant deployment via Netlify.

## 2. Core User Experience (User Flow)
1. The visitor scans the QR code on the first physical sign at the starting point.
2. The QR code redirects the visitor to `site.com/?step=1`. Only Section 1 details are visible on the screen; subsequent sections are locked.
3. As the visitor climbs the ancient site and scans new QR codes (e.g., `site.com/?step=3`), the system registers the progress, unlocking sections 1, 2, and 3. Sections 4 and 5 remain locked.
4. When the visitor reaches the summit and scans the 5th QR code (`?step=5`), the finale is unlocked.
5. In the final section, a video of the ancient oracle, Sibyl, is presented.
6. Once the video playback ends, a hidden "Receive Your Prophecy" button appears.
7. Clicking the button reveals a randomly generated prophecy text (similar to a fortune cookie interaction).

## 3. Architecture and Technical Requirements

### 3.1. URL Parameters and LocalStorage (State Management)
* On application load, the script must parse the `?step=` query parameter from the URL.
* The retrieved step number must be saved to the browser's `localStorage` (e.g., `localStorage.setItem('activeStep', 3)`).
* If the user refreshes the page or visits the base URL without query parameters, the application must read the state from `localStorage` and render the locked/unlocked sections accordingly.
* If the incoming `step` parameter in the URL is greater than the currently saved step in `localStorage`, the application must update `localStorage` with the new, higher value and unlock the UI up to that step.

### 3.2. UI Behaviors (UI States)
* **Locked State:** Sections with an `id` greater than the user's current active step must appear visually faded (e.g., `opacity: 0.5; pointer-events: none;`) with a prominent lock icon overlay. The actual `content` text must remain hidden to maintain the mystery.
* **Unlocked State:** Sections the user has reached or passed (`id <= activeStep`) must be fully opaque, colored, and readable.

### 3.3. Final Interaction: Sibyl Video and Prophecy Generator
* When `activeStep >= 5` is triggered, an HTML5 `<video>` element must be rendered inside Section 5. (Use a placeholder video URL for now).
* Add an `ended` (or `onEnded`) event listener to this video element.
* A "Receive Your Prophecy" button must exist in the DOM but remain hidden (`display: none` or `opacity: 0`) until the video finishes playing.
* Once the video triggers the `ended` event, the button must appear (a smooth fade-in animation is preferred).
* On click, the application must randomly select a string from the mock `prophecies` array using `Math.random()` and display it inside a mystic pop-up modal or an animated card.

### 3.4. Content and Mock Data Structure
The application content should be dynamically rendered using the following mock data objects in JavaScript:

**Section Data:**
```javascript
const sectionsData = [
  { 
    id: 1, 
    title: "Cennet Tepe (Paradise Hill)", 
    content: "The magnificent view of Erythrai is beneath your feet. This hill carries the whispers of the wind and history." 
  },
  { 
    id: 2, 
    title: "Local Harvest", 
    content: "The bounty of the crimson soil: Artichokes, olive oil, and a wine culture extending from antiquity to the present." 
  },
  { 
    id: 3, 
    title: "The Heroon Tomb", 
    content: "The secret of the unknown sleeper... This monumental tomb houses one of the respected figures of the past." 
  },
  { 
    id: 4, 
    title: "Ancient Theater", 
    content: "The audience's focus is not just the stage, but nature itself. Listen to the silence." 
  },
  { 
    id: 5, 
    title: "Church of Virgin Mary & The Sibyl", 
    content: "You are at the summit. The echo of the Erythraean Sibyl awaits you here." 
  }
];

const prophecies = [
  "The leaves carried by the wind say the answer you seek is very close.",
  "The crimson soil gives you strength; it is time to unleash that unrestricted voice within you.",
  "Like the olive tree you planted, your roots will deepen, and you will reap the fruits of your patience.",
  "While wandering among the ruins of the past, you are actually laying the foundations of your own future."
];

4. Design and Theme (UI/UX Guidelines)
Color Palette: Use natural, historical, and earthy tones.

Primary: Erythros red (terracotta/crimson soil).

Secondary: Silver-olive green (olive trees).

Background/Accents: Warm stone grays and sand tones.

Avoid modern, neon, or bright UI colors.

Typography: Use mystical, historical serif fonts for headings (e.g., Google Fonts: 'Playfair Display', 'Cinzel', or 'Merriweather'). Use clean, legible fonts for body text (e.g., 'Lora' or a simple sans-serif).

Layout: Vertical scrolling layout. Each section should be rendered as a vertical "card" or block. The UI must be perfectly responsive and optimized for mobile screens (Mobile-First approach), as tourists will be using this on their phones while walking. Add subtle transitions for unlocking steps.