export function calcDropShadow(size: number, location: string) {
    const scaledSize = size * 2;
    let dropShadow;

    switch (location) {
        case "upperLeft":
            dropShadow = `-${scaledSize}px 0`;
            break;
        case "lowerLeft":
            dropShadow = `0 -${scaledSize}px`;
            break;
        case "upperRight":
            dropShadow = `0 ${scaledSize}px`;
            break;
        case "lowerRight":
            dropShadow = `${scaledSize}px 0`;
            break;
        default:
            throw new Error(
                `calcDropShadow: Unknown location ${location} provided`
            );
            break;
    }

    return `drop-shadow(${dropShadow} 0px rgba(0, 0, 0, 1))`;
}
