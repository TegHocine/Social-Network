import React, { Fragment, useEffect } from 'react'
import PostItem from './PostItem'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../../features/postsReducer'
import Spinner from '../../layouts/spinner/Spinner'

const Post = () => {
  const dispatch = useDispatch()
  const postState = useSelector((state) => state.posts)
  const { posts, status } = postState

  useEffect(() => {
    dispatch(fetchPosts())
    //eslint-disable-next-line
  }, [posts])

  return (
    <Fragment>
      {status === 'loading' ? (
        <div className='m-6'>
          <Spinner />
        </div>
      ) : (
        posts && posts.map((post) => <PostItem key={post._id} posts={post} />)
      )}
    </Fragment>
  )
}

export default Post
