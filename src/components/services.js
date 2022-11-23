import axios from 'axios';

const PIXABAY_API = 'https://pixabay.com/api/'
const API_KEY = '31555042-7cca60bcd9487d043844e77d2'

export const GetImagesAPI = async (query) => {
    return axios.get(PIXABAY_API, { params: { key: API_KEY, q: query } })
}

export const GetImageByIdAPI= async (id) => {
    return axios.get(PIXABAY_API, { params: { key: API_KEY, id: id } })
}
