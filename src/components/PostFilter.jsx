import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder="Search"
                onChange={e => setFilter({...filter, query:e.target.value})}
            />
            <MySelect
                value={filter.query}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort}) }
                defaultValue="Sort"
                options={[
                    {value: 'title', name: 'By title'},
                    {value: 'body', name: 'By description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;