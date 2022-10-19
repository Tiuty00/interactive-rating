# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
desktop view (vote page and thanks page):
<img src=https://github.com/Tiuty00/interactive-rating/blob/main/images/desktop-screenshot.png/>
<img src=https://github.com/Tiuty00/interactive-rating/blob/main/images/desktop-thanks-screenshot.png/>

mobile view:
<img src=https://github.com/Tiuty00/interactive-rating/blob/main/images/mobile-screenshot.png/ width="400"/>

### Links

- Solution URL: [GitHub Reposiatoey](https://github.com/Tiuty00/interactive-rating)
- Live Site URL: [Live Page](https://tiuty00.github.io/interactive-rating/)

## My process

I started to create a normal HTML and CSS page. After that i added js and animation on transition.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript


### What I learned

This is my first challenge with JS inside, and i learned few more things about using JS on website. 
In particular i'm glad about this code: I learned about the '=>' arrow functions.

```js
rates.forEach(circle => {
      circle.addEventListener("click", () => {
            let x = circle.innerHTML;
            value.innerHTML = x;
      })
})
```

### Continued development

Of course i want to continue learning Javascript. This is a simple code, but at first time i put a more time than i expected.

## Author

- Website - Tommaso / Tiuty00 (https://github.com/Tiuty00)
- Frontend Mentor - [@Tiuty00](https://www.frontendmentor.io/profile/Tiuty00)

------------------------------------------------

Thank you all of you and enjoy the website!
