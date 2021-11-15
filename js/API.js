const baseURL = 'http://localhost:3000';

class API {
    static fetchApartment = (succes, failure) => {
        fetch(`${baseURL}/apartment`)
        .then(res => res.json())
        .then(succes)
        .then(failure)
    }
    static deleteApartment = (id, succes, failure) => {
        fetch(`${baseURL}/apartment/${id}`, { method: 'DELETE' })
        .then(res => res.status === 200 ? succes() : failure(res.statusText))
        .catch(failure)
    }
}

// API.fetchApartment (
//     console.log,
//     console.err
// )

// API.deleteApartment (
//     "3",
//     () => console.log('Ištrinta sėkmingai'),
//     console.error
// )