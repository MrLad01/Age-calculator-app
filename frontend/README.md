# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Solution URL: [Add solution URL here](https://github.com/MrLad01/Age-calculator-app/tree/main/frontend)
- Live Site URL: [Add live site URL here](https://mrlad01-age-calculator.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I upgraded myself on my knowledge on how to write a condition statement and also a bit on resposiveness.

To see how you can add code snippets, see below:


```js
   const ageDate = new Date(
      currentDate.getTime() - new Date(year, month - 1, day).getTime()
   );

   const ageYears = ageDate.getUTCFullYear() - 1970;
   const ageMonths = ageDate.getUTCMonth();
   const ageDays = ageDate.getUTCDate() - 1;
```


### Continued development

I want to get better on the arithmetic part of an if condition and also my page responsiveness



## Author

- Frontend Mentor - [@MrLad01](https://www.frontendmentor.io/profile/MrLad01)
- Twitter - [@MrLad01](https://www.twitter.com/MrLad01)
=

=