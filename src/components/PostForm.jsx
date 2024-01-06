import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    // чтобы не создавать дофига состояний для каждого инпута
    // используем объект
    const [post, setPost] = useState({title: '', body: ''})

    {/* +предотвращение перезагрузки при сабмите */
    }
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost);

        setPost({title: '', body: ''})
    }

    return (
        <form action="">
            {/* Управляемый компонент */}
            <MyInput
                value={post.title}
                onChange={e => setPost(
                    {...post, title: e.target.value})}
                type="text"
                placeholder="Post name"/>


            <MyInput
                value={post.body}
                onChange={e => setPost(
                    {...post, body: e.target.value})} type="text"
                placeholder="Description"
            />


            <MyButton
                onClick={addNewPost}
            >Create post</MyButton>
        </form>
    );
};

export default PostForm;