import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};
export const Primary = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Primary.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Primary.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
