function BaseCircle({ size = 100 }) {
    const sizeHalf = size / 2;
    const arcSize = size * 0.98;
    const arcSizeHalf = arcSize / 2;

    const backgroundCircle = (
        <circle fill="#333" cx={sizeHalf} cy={sizeHalf} r={sizeHalf} />
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
            color="white"
            strokeWidth={size - arcSize}
            strokeLinecap="round"
        />
    );

    const highlightFalloff = 25;
    const highlightColor = "white";
    const highlightOpacity = 0.25;
    const baseCircleDefs = (
        <defs>
            <linearGradient
                id="circleHighlight"
                gradientTransform={`rotate(-${highlightFalloff / 2})`}
            >
                <stop
                    offset="0%"
                    stopOpacity="0"
                    stopColor={highlightColor}
                />
                <stop
                    offset={`${highlightFalloff}%`}
                    stopOpacity={highlightOpacity}
                    stopColor={highlightColor}
                />
                <stop
                    offset={`${100 - highlightFalloff}%`}
                    stopOpacity={highlightOpacity}
                    stopColor={highlightColor}
                />
                <stop
                    offset="100%"
                    stopOpacity="0"
                    stopColor={highlightColor}
                />
            </linearGradient>
        </defs>
    );

    return (
        <g>
            {baseCircleDefs}
            {backgroundCircle}
            {highlightPath}
        </g>
    );
}

export default BaseCircle;
