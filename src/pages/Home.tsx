import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetPostsQuery, useGetAllPostQuery } from '../shared/api';
import { getPostsStart, getPostsSuccess, getPostsFail } from '../features/postSlice';
import PostList from '../widgets/PostList/PostList';
import { RootState } from '../shared/store';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { posts, isLoading } = useSelector((state: RootState) => state.posts)
    const [page, setPage] = useState(1);
    const { data: newPosts, error: queryError } = useGetPostsQuery(page);
    const { data: allPosts } = useGetAllPostQuery('');

    useEffect(() => {
        dispatch(getPostsStart());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getPostsSuccess(posts));
        if (!newPosts) return;

        const postList = posts.concat(newPosts);
        const uniquePosts = postList.filter((element, index) => {
                return postList.indexOf(element) === index;
        });

        dispatch(getPostsSuccess(uniquePosts));
    }, [newPosts, isLoading, dispatch]);

    useEffect(() => {
        if(queryError) {
            dispatch(getPostsFail('Failed to fetch posts'));
        }
    }, [queryError, dispatch]);

    const fetchMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const onViewPost = (postId: number) => {
        navigate(`/post/${postId}`);
    };

    return (
        <div>
            <PostList
                posts={posts}
                onViewPost={onViewPost}
                onLoadMore={fetchMore}
                allPostsLength={allPosts?.length}
            />
        </div>
    );
};

export default Home;
