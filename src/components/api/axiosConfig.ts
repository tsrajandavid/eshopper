import axios from "axios";
const baseUrl = 'https://fakestoreapi.com/'

interface responseType {
    apiUrl: string,
    payload: any
}

const post = (apiUrl: responseType, payload: responseType) => {
    var url = baseUrl + apiUrl;
    return axios(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        data: payload,
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
const put = (apiUrl: responseType, payload: responseType) => {
    var url = baseUrl + apiUrl;
    return axios(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        data: payload,
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
const get = (apiUrl: responseType) => {
    var url = baseUrl + apiUrl;
    return axios(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

const deleteApi = (apiUrl: responseType, payload: responseType) => {
    var url = baseUrl + apiUrl;
    return axios(url, {
        method: 'DELETE',
        data: payload,
        headers: {
            'content-type': 'application/json',
        }
    }).then(response => response.data)
        .catch(error => {
            throw error;
        });
}

export const GenericAPIService = {
    post, put, get, deleteApi

}