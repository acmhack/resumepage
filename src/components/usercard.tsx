import React from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material';

export interface CardProps {
    name: string;
    resumelink: string;
    projectlink: string;
}

const UserCard = ({ name, resumelink, projectlink }: CardProps) => {
    return (
        <Card style={{ width: 250, height: 350 }}>
            <CardContent>
                <h2>{name}</h2>
            </CardContent>
            <CardActions disableSpacing>
                <Button size="small" color="primary" href={resumelink}>
                    View Resume
                </Button>
                <Button size="small" color="secondary" href={projectlink}>
                    View Project
                </Button>
            </CardActions>
        </Card>
    );
};

export default UserCard;