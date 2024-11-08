import Post from "./post/Post";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../utils/axiosConfig.jsx"

export  default function Posts() {

    const { data } = useQuery(
        {
            queryKey: ['post'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: '/posts'
            })
        }
    )

    console.log(data?.data);
    


    return (
        <>
            <div className="container-posts px py">
                <h2>Some works created by our students</h2>
                <div className="posts">
                    {data?.data.map((post) => (
                        <Post key={post.id} url={post.imageUrl} title={post.title} discription={post.discription} data={post.createdAt }/>
                        
                    ))}
                    
                </div>
            </div>

        </>
    )
}
