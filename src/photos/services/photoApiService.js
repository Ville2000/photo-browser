import axios from 'axios';

const listPhotos = async ({ params }) => {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/photos', { params });
    return data;
}

const getPhoto = async (id) => {
    if (!id) {
        return undefined;
    }

    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/photos/${id}`);
    return data;
}

export default {
    listPhotos,
    getPhoto
}