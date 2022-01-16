import React from "react"
import { useNavigate } from "react-router-dom"

function Error() {
    let navigate = useNavigate()

    return(

        <>
            <h1>Error 404 not found, BITCH</h1>

            <button onClick={() => {
                navigate('/')
            }}
            >Go Back to Homepage</button>
        </>
    )
}

export default Error;