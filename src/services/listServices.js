const API = 'https://jsonplaceholder.typicode.com/todos';

export const fetchPosts = () => fetch(API)
    .then(response => response.json());

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

