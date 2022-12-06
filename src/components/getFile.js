import axios from "axios";
import React, {Fragment} from "react";

const baseURL = "http://146.190.109.193:8082/getlogo/spacelava";

export default function GetFIle() {
    const [post, setPost] = React.useState(null);
    console.log(post);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            {post.map((_id, i) => (
                <Fragment key={i}>

                    <h5>{_id.image}</h5>
                    <img src={_id.image} width="400" height="379" alt="photo"/>
                    <p>{_id.maptype}</p>
                </Fragment>
            ))}
        </div>
    );
}