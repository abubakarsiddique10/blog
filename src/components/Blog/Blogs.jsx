import { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('../../src/data/blogs.json')
            .then(data => data.json())
            .then(blogs => setBlogs(blogs))
    }, [])

    return (
        <div>
            {blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
        </div>
    )
}