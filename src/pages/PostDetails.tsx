import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../shared/api';
import { CircularProgress, Typography, Button } from '@material-ui/core';

const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: post, isLoading } = useGetPostQuery(Number(id));

    return (
        <div>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <Typography variant="h4">{post?.title}</Typography>
                    <Typography variant="body1">{post?.body}</Typography>
                    <Button variant="outlined" color="primary" onClick={() => window.history.back()}>
                        Back
                    </Button>
                </>
            )}
        </div>
    );
};

export default PostDetails;
