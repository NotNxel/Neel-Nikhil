const innerCursor = document.querySelector('.inner-cursor');
const outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Move both cursors to follow the mouse
    innerCursor.style.left = `${mouseX}px`;
    innerCursor.style.top = `${mouseY}px`;

    outerCursor.style.left = `${mouseX}px`;
    outerCursor.style.top = `${mouseY}px`;
});
