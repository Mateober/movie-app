export const getColor = (rating) => {
    if (rating >= 7) {
        return "#21D07A";
    } else if (rating >= 5) {
        return "yellow";
    } else if (rating > 0){
        return "red";
    } else {
        return "#5A5D5D"
    }
};
