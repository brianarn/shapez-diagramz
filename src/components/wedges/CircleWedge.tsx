import { calcDropShadow } from "../../utils";

interface WedgeOptions {
    size: number | undefined;
    location: string;
    scale: number;
    transform: string | undefined;
}

function CircleWedge({
    size = 100,
    location,
    scale = 0.5,
    transform,
}: WedgeOptions) {
    const sizeEdge = size * 0.02;
    const sizeEdgeDiff = size - sizeEdge;

    const classNames = ["wedge"];
    if (location) {
        classNames.push(`wedge-${location}`);
    }

    const startPt = `${sizeEdgeDiff} ${sizeEdgeDiff}`;
    const cornerPt = `${sizeEdge} ${sizeEdgeDiff}`;
    const endPt = `${sizeEdge} ${sizeEdge}`;
    const wedgePathDef = `
        M ${startPt}
        L ${cornerPt}
        L ${endPt}
        A ${sizeEdgeDiff} ${sizeEdgeDiff} 0 0 1 ${startPt}
        Z
    `.trim();

    const wedgePath = (
        <path
            className={classNames.join(" ")}
            d={wedgePathDef}
            fill="white"
            //filter="drop-shadow(-3px 0px 1px rgba(0, 0, 0, 0.6))"
            filter={calcDropShadow(sizeEdge, location)}
            stroke="black"
            strokeLinecap="round"
            strokeWidth={sizeEdge}
            transform={`scale(${scale}) ${transform}`}
        />
    );

    return wedgePath;
}

export default CircleWedge;
