import React from "react";
import { Card, CardContent, CardActions, Button } from '@mui/material'

interface CardProps {
  name: string;
  resumelink: string;
  projectlink: string;
}

export default ({ name, resumelink, projectlink }: CardProps) => {
  return (
    <Card style={{width: 250, height: 100}}>
          <CardContent>
            <h2>{name}</h2>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" color="primary" href={resumelink}>
              Resume
            </Button>
            <Button size="small" color="secondary" href={projectlink}>
              Project
            </Button>
          </CardActions>
        </Card>
  );
};
