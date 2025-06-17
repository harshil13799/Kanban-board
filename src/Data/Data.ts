import type { KanbanData } from './Data/type';

export const mockData: KanbanData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Login Page', description: 'Design login form UI' },
    'task-2': { id: 'task-2', title: 'API Setup', description: 'Connect backend APIs' },
    'task-3': { id: 'task-3', title: 'User Auth', description: 'JWT-based authentication' },
    'task-4': { id: 'task-4', title: 'Database Design', description: 'Create schema in MongoDB' },
  },
  columns: {
    'col-1': { id: 'col-1', title: 'To Do', taskIds: ['task-1', 'task-2'] },
    'col-2': { id: 'col-2', title: 'In Progress', taskIds: ['task-3'] },
    'col-3': { id: 'col-3', title: 'Done', taskIds: ['task-4'] },
  },
  columnOrder: ['col-1', 'col-2', 'col-3'],
};
