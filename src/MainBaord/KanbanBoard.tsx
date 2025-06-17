import React from 'react';
import { Box } from '@mui/material';
import type { KanbanData } from '../Data/type';
import Column from './Column';

interface Props {
  data: KanbanData;
  dispatch: React.Dispatch<any>;
}

const KanbanBoard: React.FC<Props> = ({ data, dispatch }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gap={2}
      alignItems="start"
    >
      {data.columnOrder.map((colId:any) => {
        const column = data.columns[colId];
        const tasks = column.taskIds.map((id: string | number) => data.tasks[id]);
        return (
          <Column key={colId} column={column} tasks={tasks} dispatch={dispatch} />
        );
      })}
    </Box>
  );
};

export default KanbanBoard;
