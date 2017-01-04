const notLinearPercent = (x) => {
    return Math.asin( 2 * x - 1 ) / Math.PI + 0.5;
}

export default notLinearPercent;
