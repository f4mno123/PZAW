import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosExample = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //placeholder json
        axios.get('http://localhost:8080/json')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);

            });
    }, []);



    return (
        <div>
            {/* {data.map((post, index) => (
                <div key={index}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))} */}
            <p>{data.message}</p>
        </div>
    );
};

export default AxiosExample;