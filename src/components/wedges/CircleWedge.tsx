function CircleWedge({ size = 100, transform }) {
    const sizeEdge = size * 0.02;
    const sizeEdgeDiff = size - sizeEdge;
    const startPt = `${sizeEdge} ${sizeEdge}`
    const cornerPt = `${sizeEdge} ${sizeEdgeDiff}`
    const endPt = `${sizeEdgeDiff} ${sizeEdgeDiff}`
    const wedgePathDef = `
        M ${startPt}
        L ${cornerPt}
        L ${endPt}
        A ${sizeEdgeDiff} ${sizeEdgeDiff} 0 0 0 ${startPt}
        Z
    `;
    const wedgePath = (
        <path
            d={wedgePathDef}
            fill="white"
            stroke="black"
            stroke-width={sizeEdge}
            transform={transform}
        />
    );

    return wedgePath;
}

export default CircleWedge;
