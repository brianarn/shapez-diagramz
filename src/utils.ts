export function calcDropShadow(size: number, location: string) {
    let dropShadow;

    switch (location) {
        case "upperLeft":
            dropShadow = `${size}px 0`;
            break;
        case "lowerLeft":
            dropShadow = `0 ${size}px`;
            break;
        case "upperRight":
            dropShadow = `0 -${size}px`;
            break;
        case "lowerRight":
            dropShadow = `-${size}px 0`;
            break;
        default:
            throw new Error(
                `calcDropShadow: Unknown location ${location} provided`
            );
            break;
    }

    return `drop-shadow(${dropShadow} 2px rgba(0, 0, 0, 0.6))`;
}
