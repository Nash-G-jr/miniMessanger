import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://avatars.mds.yandex.net/i?id=aef916cdca79485e1085989bce0d72bae6cd8633-9243216-images-thumbs&n=13"></img>
        {props.message}
      </div>
      <div>
        <span>like: {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
