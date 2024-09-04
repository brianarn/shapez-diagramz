import { calcDropShadow } from "../../utils";
import { WedgeOptions } from "./wedgeTypes";

function CircleWedge(opts: WedgeOptions) {
    const { size = 100, location, scale = 0.5, transform } = opts;
    const spaceSize = size * 0.02;
    const sideSize = size - spaceSize;

    const classNames = ["wedge"];
    if (location) {
        classNames.push(`wedge-${location}`);
    }

    const startPt = `${sideSize} ${sideSize}`;
    const cornerPt = `${spaceSize} ${sideSize}`;
    const endPt = `${spaceSize} ${spaceSize}`;
    const wedgePathDef = `
        M ${startPt}
        L ${cornerPt}
        L ${endPt}
        A ${sideSize} ${sideSize} 0 0 1 ${startPt}
        Z
    `.trim();

    const wedgePath = (
        <path
            className={classNames.join(" ")}
            d={wedgePathDef}
            fill="white"
            filter={calcDropShadow(spaceSize, location)}
            stroke="black"
            strokeLinecap="round"
            strokeWidth={spaceSize * 2}
            transform={`scale(${scale}) ${transform}`}
        />
    );

    return wedgePath;
}

export default CircleWedge;
