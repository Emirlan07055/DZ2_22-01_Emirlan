import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const AboutPage = () => {
    const [post, setPost] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(res => res.json())
            .then(res => setPost(res))
    }, [id])

    return (
        <div>
            <button onClick={back}>back</button>
                <h1>about page</h1>
                <h2>{post?.title}</h2>
                <img src={post?.url} alt=""/>
        </div>
    );
};

export default AboutPage;