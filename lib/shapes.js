class Circle {
  constructor(Fill, Text, TextColor) {
    this.fill = Fill;
    this.text = Text;
    this.textColor = TextColor;

  }

  getSVG() {
    return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    <circle r="45" cx="50" cy="50" stroke="black" stroke-width="3" fill= "${this.fill}" />
    <text x="0" y="15" fill="${this.textColor}">${this.text}!</text>
  </svg>`
  }
}

class Triangle {
  constructor(Fill, Text, TextColor) {
    this.fill = Fill;
    this.text = Text;
    this.textColor = TextColor;
  }
  getSVG() {
    return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    <triangle r="45" cx="50" cy="50" stroke="black" stroke-width="3" fill= "${this.fill}" />
    <text x="0" y="15" fill="${this.textColor}">${this.text}!</text>
  </svg>`
  }
}

class Square {
  constructor(Fill, Text, TextColor) {
    this.fill = Fill;
    this.text = Text;
    this.textColor = TextColor;
  }
  getSVG() {
    return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    <square r="45" cx="50" cy="50" stroke="black" stroke-width="3" fill= "${this.fill}" />
    <text x="0" y="15" fill="${this.textColor}">${this.text}!</text>
  </svg>`
  }
}


module.exports = { Circle, Triangle, Square };