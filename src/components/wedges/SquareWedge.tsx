import { calcDropShadow } from "../../utils";
import { WedgeOptions } from "./wedgeTypes";

function SquareWedge(opts: WedgeOptions) {
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

    const squareNode = (
        <rect
            className={classNames.join(" ")}
            x={spaceSize}
            y={spaceSize}
            rx={spaceSize * 2}
            width={sideSize}
            height={sideSize}
            fill={color}
            filter={calcDropShadow(spaceSize, location)}
            stroke="black"
            strokeWidth={spaceSize * 2}
            transform={`scale(${scale}) ${transform}`}
        />
    );

    return squareNode;
}

export default SquareWedge;
