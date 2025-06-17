import React, { useEffect, useReducer, useState } from 'react';
import { Container, CircularProgress, Typography } from '@mui/material';
import type { KanbanData } from './Data/type';
import { mockData } from './Data/Data';
import KanbanBoard from './MainBaord/KanbanBoard';

const reducer = (state: KanbanData, action: any): KanbanData => {
  switch (action.type) {
    case 'SET_DATA':
      return action.payload;
    case 'MOVE_TASK': {
      const { taskId, sourceColId, targetColId } = action.payload;
      const source = state.columns[sourceColId];
      const target = state.columns[targetColId];

      // Remove from source
      const newSourceTasks = source.taskIds.filter(id => id !== taskId);
      const newTargetTasks = [...target.taskIds, taskId];

      return {
        ...state,
        columns: {
          ...state.columns,
          [source.id]: { ...source, taskIds: newSourceTasks },
          [target.id]: { ...target, taskIds: newTargetTasks },
        },
      };
    }
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    tasks: {},
    columns: {},
    columnOrder: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'SET_DATA', payload: mockData });
      setLoading(false);
    }, 800);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Kanban Board</Typography>
      {loading ? <CircularProgress /> : <KanbanBoard data={state} dispatch={dispatch} />}
    </Container>
  );
};

export default App;
