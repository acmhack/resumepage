import React from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import { IProjectCard } from '../interfaces/ProjectCardProps';

const ProjectCard = ({ name, members, projectlink, category, featured }: IProjectCard) => {
    return (
        <Card style={{ width: 250, height: 350 }}>
            <CardContent>
                <h2>{name}</h2>
                <br /> {/* diagnostic */}
                <p>Category: {category}</p>
                <p>Featured: {featured.toString()}</p>
            </CardContent>
            <CardActions disableSpacing>
                <Button size="small" color="primary">
                    View Members
                </Button>
                <Button size="small" color="secondary" href={projectlink}>
                    View Project
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;