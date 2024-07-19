export const fetchMovies = async (query) => {
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
        const data = await response.json();
        return data.docs.map(doc => ({
            title: doc.title,
            author_name: doc.author_name || [],
            first_publish_year: doc.first_publish_year,
            key: doc.key,
            cover_i: doc.cover_i || null,
        }));
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

export const fetchRandomDogImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Error fetching dog image:", error);
        throw error;
    }
};
