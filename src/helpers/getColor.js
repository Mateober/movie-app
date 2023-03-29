export const getColor = (rating) => {
    switch (true) {
        case rating >= 7:
            return "#21D07A";
        case rating >= 5:
            return "yellow";
        case rating > 0:
            return "red";
        default:
            return "#5A5D5D";
    }
};
