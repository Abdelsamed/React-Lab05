import React, { useState } from 'react';

const SearchComponent = () => {
  const [postId, setPostId] = useState('');
  const [postTitle, setPostTitle] = useState('');

  const handleSearch = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPostTitle(data.title))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Search Post by ID</h2>
      <input
        type="text"
        placeholder="Enter post ID"
        value={postId}
        onChange={e => setPostId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {postTitle && <p>Post Title: {postTitle}</p>}
    </div>
  );
};

export default SearchComponent;
