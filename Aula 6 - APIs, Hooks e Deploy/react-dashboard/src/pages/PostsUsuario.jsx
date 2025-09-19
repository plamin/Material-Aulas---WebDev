import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PostsUsuarios() {

    const parametros = useParams();

    const [post, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userID=${parametros.id}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []);

    return (
        <>
        {post.map(pegaItem => (
            <div>
                <div className="bg-purple-600 mb-4 p-2.5 text-white">
                    <p>{pegaItem.title}</p>
                </div>
            </div>
        ))}
        </>
    )

}