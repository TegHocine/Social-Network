import React, { Fragment, useEffect } from 'react';
import PostItem from './PostItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../../features/postsReducer';
import Spinner from '../../layouts/spinner/Spinner';
const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    //eslint-disable-next-line
  }, []);

  const postDatas = useSelector((state) => state.posts.value);
  const postStatus = useSelector((state) => state.posts.status);

  return (
    <Fragment>
      {postStatus === 'loading' ? (
        <div className='m-6'>
          <Spinner />
        </div>
      ) : (
        postDatas &&
        postDatas.map((postData) => (
          <PostItem key={postData.id} postData={postData} />
        ))
      )}
    </Fragment>
  );
};

export default Post;
