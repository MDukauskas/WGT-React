import { makeRequest } from "./api"
import { useState } from "react"

export function useCrud(id, collection, data) {
    const [showNotifications, setShowNotifications] = useState(false)

    const create = () => {
        makeRequest(`/${collection}`, { method: 'POST', body: JSON.stringify(data) }).then(() => {
            setShowNotifications(true)
            setTimeout(() => { setShowNotifications(false) }, 5000)
        })
    }

    const update = () => {
        makeRequest(`/${collection}/${id}`, { method: 'PUT', body: JSON.stringify(data) }).then(() => {
            setShowNotifications(true)
            setTimeout(() => { setShowNotifications(false) }, 5000)
        })
    }

    function remove() {
        makeRequest(`/${collection}/${id}`, { method: 'DELETE' }).then(() => {
            window.location.href = `/${collection}s`
        })
    }

    return { create, update, remove, showNotifications }
}