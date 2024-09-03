import "./Widget.scss";
import BaseCircle from "./BaseCircle";
import CircleWedge from "./wedges/CircleWedge";

function Widget({ size = 100, viewBoxSize = 100 }) {
    const viewBox = `0 0 ${viewBoxSize} ${viewBoxSize}`;

    return (
        <svg
            className="widget"
            width={size}
            height={size}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
        >
            <BaseCircle size={viewBoxSize} />
            <CircleWedge size={viewBoxSize} transform="scale(0.5 0.5) translate(0 100) rotate(-90)" />
            <CircleWedge size={viewBoxSize} transform="scale(0.5 0.5) translate(100 0)" />
            <CircleWedge size={viewBoxSize} transform="scale(0.5 0.5) translate(200 100) rotate(90)" />
            <CircleWedge size={viewBoxSize} transform="scale(0.5 0.5) translate(100 200) rotate(180)" />
        </svg>
    );
}

export default Widget;
