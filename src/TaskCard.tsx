import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import type { Task } from './Data/type';

interface Props {
  task: Task;
  sourceColId: string;
}

const TaskCard: React.FC<Props> = ({ task, sourceColId }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', task.id);
    e.dataTransfer.setData('source', sourceColId);
  };

  return (
    <Card
      draggable
      onDragStart={handleDragStart}
      sx={{
        cursor: 'grab',
        '&:hover': { boxShadow: 4 },
      }}
    >
      <CardContent>
        <Typography fontWeight="bold">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">{task.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
