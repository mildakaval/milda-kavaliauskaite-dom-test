const baseURL = 'http://localhost:3000';

class API {
    static fetchApartment = (succes, failure) => {
        setTimeout(() => {
        fetch(`${baseURL}/apartment`)
        .then(res => res.json())
        .then(succes)
        .catch(failure)
        }, 1000);
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