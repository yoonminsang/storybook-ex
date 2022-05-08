import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],
};

function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    archiveTask: (state, action) => {
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    },
    pinTask: (state, action) => {
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
export const { archiveTask, pinTask } = actions;
export { taskReducer };
