import React, { useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast";

const useRegister = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const register = async (userData) => {
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:8080/api/users/register', userData)
            if (response.data.errorCode == 0) {
                toast.success("Register successfully");
            }
            else if (response.data.errorCode == 1) {
                toast.error(response.data.message);
            }
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }
    return (
        {
            data,
            loading,
            error,
            register
        }
    )
}

export default useRegister