function CircleWedge({ size = 100, transform = "" }) {
    const sizeEdge = size * 0.02;
    const sizeEdgeDiff = size - sizeEdge;

    const startPt = `${sizeEdgeDiff} ${sizeEdgeDiff}`;
    const cornerPt = `${sizeEdge} ${sizeEdgeDiff}`;
    const endPt = `${sizeEdge} ${sizeEdge}`;
    const wedgePathDef = `
        M ${startPt}
        L ${cornerPt}
        L ${endPt}
        A ${sizeEdgeDiff} ${sizeEdgeDiff} 0 0 1 ${startPt}
        Z
    `;

    const wedgePath = (
        <path
            d={wedgePathDef}
            fill="white"
            stroke="black"
            strokeLinecap="round"
            strokeWidth={sizeEdge}
            transform={transform}
        />
    );

    return wedgePath;
}

export default CircleWedge;
