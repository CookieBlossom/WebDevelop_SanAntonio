export const showUnique = ( results = [], property ) => {
    const categoryUnique = new Set();
    results.flatMap(result => result[property])
        .forEach( category => categoryUnique.add(category));
    return Array.from(categoryUnique);
}