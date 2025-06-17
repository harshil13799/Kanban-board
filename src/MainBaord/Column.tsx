import React from 'react';
import { Paper, Typography, Stack } from '@mui/material';
import type { Column as ColumnType, Task } from '../Data/type';
import TaskCard from '../TaskCard';

interface Props {
  column: ColumnType;
  tasks: Task[];
  dispatch: React.Dispatch<any>;
}

const Column: React.FC<Props> = ({ column, tasks, dispatch }) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    const sourceColId = e.dataTransfer.getData('source');
    if (taskId && sourceColId !== column.id) {
      dispatch({ type: 'MOVE_TASK', payload: { taskId, sourceColId, targetColId: column.id } });
    }
  };

  return (
    <Paper
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
      sx={{ p: 2, minHeight: 400 }}
    >
      <Typography variant="h6" gutterBottom>{column.title}</Typography>
      <Stack spacing={2}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} sourceColId={column.id} />
        ))}
      </Stack>
    </Paper>
  );
};

export default Column;
