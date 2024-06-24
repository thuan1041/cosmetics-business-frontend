import React, { useState } from 'react'
import { Spin } from 'antd';
import toast from "react-hot-toast";

const useLoading = () => {
    const [loading, setLoading] = useState(false)

    const showLoading = () => {
        setLoading(true)
        return (
            <Spin size="large" />
        )
    }
    const hideLoading = () => {
        setLoading(false)
        return (
            <></>
        )
    }

    return { loading, showLoading, hideLoading }
}
export default useLoading;