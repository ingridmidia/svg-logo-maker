class SVG {
    setText(text, textColor) {
        if(text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textColor = textColor;
    }
    setShape(shape) {
        this.shape = shape;
    }
    render() {
        if (this.shape === undefined && this.text === undefined && this.textColor === undefined) {
            return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
        }
        if (this.shape === undefined && this.text !== undefined && this.textColor !== undefined) {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

module.exports = SVG;