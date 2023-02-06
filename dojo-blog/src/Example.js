import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Example = (props) => {


    var { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs') 
    const [myBlogs, setMyBlogs]  = useState(blogs)

    const handlePost = (id, author, body, title) => {
        const data = blogs;
        data[data.length]={title:title, body:body, author:author, id:id};
        setMyBlogs(data);
        blogs = myBlogs
    };

    useEffect(() => {
       console.log(myBlogs);
       console.log(blogs);

    })
     
    
    return ( 
        <div className="exampleTest">

            <div className="addBlog">
                <input id='blog_id' placeholder="id" name='blog_id' />
                <input id='blog_author' placeholder="author" name='blog_author' />
                <input id='blog_body'  placeholder="body" name='blog_body' />
                <input id='blog_title' placeholder="title" name='blog_title' />
                <button onClick={() => handlePost(
                    document.getElementById('blog_id').value,
                    document.getElementById('blog_author').value,
                    document.getElementById('blog_body').value,
                    document.getElementById('blog_title').value
                ) }>Post Blog</button><br /><br /><br />
            </div>
            { error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs.filter((blogs) => blogs.author !== 'jimi') } title="Other Blogs"  />}

        </div>
     );
}
 
export default Example;