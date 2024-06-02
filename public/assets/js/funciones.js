export const showUnique = (results = [], property) => {
    const categoryUnique = new Set();
    results.forEach(result => {
        if (Array.isArray(result[property])) {
            result[property].forEach(value => categoryUnique.add(value));
        } else {
            categoryUnique.add(result[property]);
        }
    });
    return Array.from(categoryUnique);
}