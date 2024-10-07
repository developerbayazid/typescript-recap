interface RectangleOptions {
    width: number;
    length: number;
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
    return width * length;
}

let options = {
    width: 43,
    length: 22,
    height: 38,
};

drawRectangle(options);
