import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    archiveTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, state: 'TASK_ARCHIVED' } : task
      );
    },
    pinTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, state: 'TASK_PINNED' } : task
      );
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
export const { archiveTask, pinTask } = actions;
export { taskReducer };
