// Bresenham's line drawing algorithm
// https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
function plotLine(x0, y0, x1, y1) {
    let positions = [];

    let dx = x1 - x0;
    let dy = y1 - y0;
    let d = 2 * dy - dx;
    let y = y0;

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

// Converts the points from the plotLine function to text that can be displayed
function generateAscii(x0, y0, x1, y1) {
    const linePositions = plotLine(x0, y0, x1, y1);
    let screen = [];

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
        screen.push(lineBuffer);
    }
    return screen;
}


function displayAscii() {
    let x0 = document.getElementById('x0').value;
    let y0 = document.getElementById('y0').value;
    let x1 = document.getElementById('x1').value;
    let y1 = document.getElementById('y1').value;

    const parent = document.getElementById('screen');
    if (parent.hasChildNodes()) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const generatedAscii = generateAscii(x0, y0, x1, y1);
    
    for (let i = 0; i < generatedAscii.length; i++) {
        const ascii = document.createElement('p');
        ascii.innerHTML = generatedAscii[i];
        parent.appendChild(ascii);
    }    
}
