import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import Post from '../../entities/post';

interface PostCardProps {
    post: Post;
    onViewPost: (postId: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onViewPost }) => {
    const MAX_SYMBOLS_COUNT = 50;

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">
                    {`#${post.id}`}
                </Typography>
                <Typography variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {post.body.length > MAX_SYMBOLS_COUNT ? `${post.body.slice(0, MAX_SYMBOLS_COUNT)}...` : post.body}
                </Typography>
                <Button color="primary" onClick={() => onViewPost(post.id)}>
                    View
                </Button>
            </CardContent>
        </Card>
    );
};

export default PostCard;
