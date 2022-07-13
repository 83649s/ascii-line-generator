// Bresenham's line drawing algorithm
// https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
function plotLine(x0, y0, x1, y1) {
    let positions = [];

    let dx = x1 - x0;
    let dy = y1 - y0;
    let d = 2 * dy - dx;
    let y = y0

    for (let x = x0; x < x1; ++x) {
        // Adds the the position to the array of positions in the form of a sub array
        positions.push([x, y]);
        if (d > 0) {
            y++;
            d = d - 2 * dx;
        }
        d = d + 2 * dy;
    }
    return positions;
}

// Line coordinates
let x0 = 0;
let y0 = 1;

let x1 = 6;
let y1 = 4;

const linePositions = plotLine(x0, y0, x1, y1);

// Draw the line screen
for (let y = y0; y < y1; ++y) {
    let lineBuffer = "";
    let lineEnded = true;
    for (let x = x0; x < x1; ++x) {
        if (linePositions[x - x0][1] == y) {
            lineBuffer += "#";
            lineEnded = false;
        }
        else {
            lineBuffer += ".";
        }
    }
    if (lineEnded == true) {
        break;
    }
    console.log(lineBuffer);
}