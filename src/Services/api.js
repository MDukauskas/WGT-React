

export const makeRequest = (url, options = {}) => {

    const authKey = localStorage.getItem('auth_key')

    return fetch(`http://localhost:3002/api${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authKey}`
        },
        ...options,
    }).then((response) => {
        if (!response.ok) { throw response }
        return response.json()
    }).catch(error => {
        if (error.status === 401) {
            window.location.href = '/'
        } else {
            console.error(error)
        }
    })
}