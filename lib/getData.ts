

const BASE_URL = 'https://myanimelist.p.rapidapi.com/v2/anime/search?n=50&q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69725ddf34mshabe4c072c2c4703p1c3653jsneafd779d46d7',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};


export default async function getData(search: string):Promise<SearchResult>{
    try {
        const response = await fetch(`${BASE_URL+search}`, options);
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch data")
    }
}