// Implemented classes based on test cases
class Shape {
    setColor(color) {
        this.color = color;
    }
    render() {
        return "";
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

// Exports logo shapes
module.exports.Square = Square;
module.exports.Triangle = Triangle;
module.exports.Circle = Circle;

