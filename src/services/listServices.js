import axios from "axios";
const API = 'https://jsonplaceholder.typicode.com/todos';

//! Axios
// Response.data => {data} => data

const controller = new AbortController();

export const fetchPosts = () =>
    axios.get(API, { signal: controller.signal })
        .then(({data}) => data);

export const abortFetch = () => {
    controller.abort();
};

//! Fetch
// Response => Response.json()

// export const fetchPosts = () =>
//     fetch(API)
//         .then(response => response.json());

export const deleteItem = id =>
    fetch(`${API}/${id}`, {
        method: 'DELETE',
    }).then(data => data.json());

export const updateItem = (id, obj) =>
    fetch(API + `/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(obj)
    }).then(data => data.json());

export const addItem = (obj) =>
    fetch(API, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(obj)
    }).then(data => data.json());

