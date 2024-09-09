## ld-dropdown

JS module for easy implementation of dropdowns in HTML.  
Developed by [Leandecks](https://github.com/Leandecks) (rigel1631).

### Installation

```
npm i -D ld-dropdown
```

You need to have npm in your project. If you don't: `npm init`.

### Usage

- `base`: element from which the dropdown drops
- `elementsContainer`: element that wraps the dropdown elements
- `display`: sets the display of the dropdown (`block`, `flex`...). Default: `block`.
- `clickHover`: set if the dropdown is toggled on `click`, `hover`, or both (`clickhover` / `hoverclick`). Default: `hover`.

There's no styling applied to the dropdown so that you can style it for your own needs.

```js
function createDropdown(base, elementsContainer, display, clickHover)
```

### Implementation Example

HTML:

```html
<button class="base">Click to display dropdown</button>
<div class="dropdown">
  <div>Element 1</div>
  <div>Element 1</div>
  <div>Element 1</div>
  <div>Element 1</div>
</div>
```

JS:

```js
import createDropdown from "ld-dropdown";

const baseElement = document.querySelector(".base");
const containerElement = document.querySelector(...);

createDropdown(baseElement, containerElement, "flex", "click");
```
