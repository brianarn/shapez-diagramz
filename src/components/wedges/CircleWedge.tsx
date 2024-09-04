import { calcDropShadow } from "../../utils";
import { WedgeOptions } from "./wedgeTypes";

function CircleWedge(opts: WedgeOptions) {
    const {
        size = 100,
        location,
        color = "white",
        scale = 0.5,
        transform,
    } = opts;
    const spaceSize = size * 0.02;
    const sideSize = size - spaceSize * 2;

    const classNames = ["wedge"];
    if (location) {
        classNames.push(`wedge-${location}`);
    }

    // const startPt = `${sideSize - spaceSize / 2} ${sideSize}`;
    // const endPt = `${spaceSize} ${spaceSize}`;
    // const wedgePathDef = `
    //     M ${startPt}
    //     L ${spaceSize} ${sideSize}
    //     Q ${spaceSize} ${sideSize} ${spaceSize} ${sideSize - spaceSize}
    //     L ${endPt}
    //     Q ${spaceSize} ${spaceSize} ${spaceSize} ${spaceSize}
    //     Q ${(sideSize - spaceSize) * 0.8} ${spaceSize * 0.8} ${sideSize} ${sideSize - spaceSize}
    //     Q ${sideSize} ${sideSize + spaceSize}
    //     A ${sideSize} ${sideSize} 0 0 1 ${startPt}
    //     Z
    // `.trim();
    const wedgePathDef = `
        M ${spaceSize} ${spaceSize * 2}
        L ${spaceSize} ${sideSize}
        Q ${spaceSize} ${sideSize + spaceSize} ${spaceSize * 2} ${sideSize + spaceSize}
        L ${sideSize} ${sideSize + spaceSize}
        Q ${sideSize + spaceSize} ${sideSize + spaceSize} ${sideSize + spaceSize} ${sideSize}
        A ${sideSize } ${sideSize } 0 0 0 ${spaceSize * 2} ${spaceSize}
        Q ${spaceSize} ${spaceSize} ${spaceSize} ${spaceSize * 2}
    `.trim();

    const wedgePath = (
        <path
            className={classNames.join(" ")}
            d={wedgePathDef}
            fill={color}
            filter={calcDropShadow(spaceSize, location)}
            stroke="#222"
            strokeLinecap="round"
            strokeWidth={spaceSize * 2}
            transform={`scale(${scale}) ${transform}`}
        />
    );

    return wedgePath;
}

export default CircleWedge;
