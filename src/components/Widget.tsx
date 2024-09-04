import "./Widget.scss";
import BaseCircle from "./BaseCircle";
import CircleWedge from "./wedges/CircleWedge";

function Widget({ size = 100, viewBoxSize = 100 }) {
    const halfViewSize = viewBoxSize / 2;
    const viewBox = `0 0 ${viewBoxSize} ${viewBoxSize}`;

    const innerScale = 95;
    const innerTranslate = (100 - innerScale) / 2;

    const quarterTransforms = [
        // Upper Left
        `rotate(-90 ${halfViewSize} ${halfViewSize})`,
        // Upper Right
        `translate(100 0)`,
        // Lower Right
        `rotate(90 ${halfViewSize} ${halfViewSize}) translate(100 -100)`,
        // Lower Left
        `rotate(180 ${halfViewSize} ${halfViewSize}) translate(0 -100)`,
    ];

    return (
        <svg
            className="widget"
            width={size}
            height={size}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
        >
            <BaseCircle size={viewBoxSize} />
            <g
                transform={`scale(${innerScale / 100}) translate(${innerTranslate} ${innerTranslate})`}
            >
                {quarterTransforms.map((transform) => {
                    return (
                        <CircleWedge transform={`scale(0.5) ${transform}`} />
                    );
                })}
            </g>
        </svg>
    );
}

export default Widget;
