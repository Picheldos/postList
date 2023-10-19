import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostCard from '../PostCard/PostCard';
import Post from '../../entities/post';

interface PostListProps {
    posts?: Post[];
    allPostsLength?: number;
    onViewPost: (postId: number) => void;
    onLoadMore: () => void;
}

const PostList: React.FC<PostListProps> = ({posts, onViewPost, onLoadMore, allPostsLength }) => {
    const [loadedPostsCount, setLoadedPostsCount] = useState(posts?.length);

    useEffect(() => {
        posts && setLoadedPostsCount(posts.length);
    }, [posts]);

    const hasMore = () => {
        if (loadedPostsCount && allPostsLength) {
            return loadedPostsCount !== allPostsLength;
        }
        return true;
    }

    return (
        <InfiniteScroll
            dataLength={loadedPostsCount || 0}
            next={onLoadMore}
            hasMore={hasMore()}
            loader={<CircularProgress />}
            style={{overflow: 'hidden'}}

        >
            <List>
                {posts?.map((post, index) => (
                    <ListItem key={post.id + post.title + index}>
                        <ListItemText>
                            <PostCard post={post} onViewPost={onViewPost} />
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </InfiniteScroll>
    );
};

export default PostList;
