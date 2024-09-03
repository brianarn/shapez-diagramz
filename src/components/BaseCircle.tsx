function BaseCircle({ size = 100 }) {
    const sizeHalf = size / 2;
    const arcSize = size * 0.98;
    const arcSizeHalf = arcSize / 2;

    const backgroundCircle = (
        <circle fill="gray" cx={sizeHalf} cy={sizeHalf} r={sizeHalf} />
    );

    const highlightPathDef = `
        M ${sizeHalf} ${arcSize}
        A ${arcSizeHalf} ${arcSizeHalf}
            0 0 0
            ${arcSize} ${sizeHalf}
        A ${arcSizeHalf} ${arcSizeHalf}
            0 0 1
            ${sizeHalf} ${arcSize}
    `.trim();
    const highlightPath = (
        <path
            d={highlightPathDef}
            stroke="url(#circleHighlight)"
            stroke-color="white"
            stroke-width={size - arcSize}
            stroke-linecap="round"
        />
    );

    const highlightFallout = 10;
    const highlightColor = "white";
    const highlightOpacity = 0.25;
    const baseCircleDefs = (
        <defs>
            <linearGradient
                id="circleHighlight"
                gradient-transform="rotate(-45)"
            >
                <stop
                    offset="0%"
                    stop-opacity="0"
                    stop-color={highlightColor}
                />
                <stop
                    offset={`${highlightFallout}%`}
                    stop-opacity={highlightOpacity}
                    stop-color={highlightColor}
                />
                <stop
                    offset={`${100 - highlightFallout}%`}
                    stop-opacity={highlightOpacity}
                    stop-color={highlightColor}
                />
                <stop
                    offset="100%"
                    stop-opacity="0"
                    stop-color={highlightColor}
                />
            </linearGradient>
        </defs>
    );

    return (
        <>
            {baseCircleDefs}
            {backgroundCircle}
            {highlightPath}
        </>
    );
}

export default BaseCircle;
