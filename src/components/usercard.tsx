import React from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material';

export interface CardProps {
    name: string;
    resumelink: string;
    projectlink: string;
    gradyear: number;
    category: string;
    featured: boolean;
}

const UserCard = ({ name, resumelink, projectlink, gradyear, category, featured }: CardProps) => {
    return (
        <Card style={{ width: 250, height: 350 }}>
            <CardContent>
                <h2>{name}</h2>
                <br /> {/* diagnostic */}
                <p>Grad Year: {gradyear}</p>
                <p>Category: {category}</p>
                <p>Featured: {featured.toString()}</p>
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