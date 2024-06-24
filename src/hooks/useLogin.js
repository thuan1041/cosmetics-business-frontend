import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const useLogin = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const login = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:8080/api/users/login', data)
            if (response.data.errorCode === 0) {
                setUser(response.data)
                setLoading(false)
                toast.success(response.data.message)
                return true
            } else if (response.data.errorCode === 1) {
                setError(response.data)
                setLoading(false)
                toast.error(response.data.message)
                return false
            }
        } catch (error) {
            setLoading(false)
            toast.error('Login failed')
            return false
        }
    }
    return { user, error, loading, login }
}

export default useLogin