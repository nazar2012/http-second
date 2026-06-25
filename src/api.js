const API_KEY = "54040917-f9e6420d7887ca7f24aa85fec"
const BASE_URL = "https://pixabay.com/api/"

export const fetchImages = (quary, page = 1) => {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${quary}&page=${page}&orientation=horizontal&per_page=12`).then(res => res.json())
}