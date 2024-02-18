class Circle {
    constructor(fill, text, textColor) {
      this.fill = fill;
      this.text = text;
      this.textColor = textColor;
    }
  
    getSVG() {
      return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" stroke="black" stroke-width="3" fill="${this.fill}" />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  class Triangle {
    constructor(fill, text, textColor) {
      this.fill = fill;
      this.text = text;
      this.textColor = textColor;
    }
  
    getSVG() {
      return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,5 95,90 5,90" stroke="black" stroke-width="3" fill="${this.fill}" />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  class Square {
    constructor(fill, text, textColor) {
      this.fill = fill;
      this.text = text;
      this.textColor = textColor;
    }
  
    getSVG() {
      return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="90" height="90" stroke="black" stroke-width="3" fill="${this.fill}" />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };  