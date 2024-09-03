import "./Widget.scss";
import BaseCircle from "./BaseCircle";

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
        </svg>
    );
}

export default Widget;
