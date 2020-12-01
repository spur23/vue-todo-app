<template>
  <div class="container">
    <div class="row">
      <form action="submit" @submit.prevent>
        <div class="input-container">
          <label for="task">Enter Task: </label>
          <input
            type="text"
            id="task"
            placeholder="New Task"
            aria-label="Task"
            aria-describedby="addon-wrapping"
            v-model="enteredTask"
          />
          <base-button type="submit" btnType="submit" @click="addTask"
            >Submit</base-button
          >
        </div>
      </form>
    </div>
    <div class="row">
      <table class="table">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Task</th>
          <th scope="col">Completed</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        <tbody>
          <todo-tasks
            v-for="task in tasks"
            :key="task.id"
            :id="task.id"
            :task="task.task"
            :edit="task.edit"
            :completed="task.completed"
            @delete-task="deleteTask"
            @toggle-edit="toggleEdit"
            @edit-task="editTask"
            @toggle-complete="toggleComplete"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TodoTasks from './components/TodoTasks.vue';
import BaseButton from './components/BaseButton.vue';

export default {
  name: 'App',
  components: {
    TodoTasks,
    BaseButton
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          task: 'Take Dogs Out',
          completed: false,
          edit: false,
          delete: false
        },
        {
          id: 2,
          task: 'Get Groceries',
          completed: false,
          edit: false,
          delete: false
        },
        {
          id: 3,
          task: 'Wash Car',
          completed: false,
          edit: false,
          delete: false
        },
        {
          id: 4,
          task: 'Get Dinner',
          completed: false,
          edit: false,
          delete: false
        }
      ],
      idCounter: 4,
      enteredTask: ''
    };
  },
  methods: {
    addTask() {
      this.idCounter += 1;

      const newTask = {
        id: this.idCounter,
        task: this.enteredTask,
        completed: false,
        edit: false,
        delete: false
      };

      this.enteredTask = '';

      this.tasks = [...this.tasks, newTask];
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleEdit(id) {
      this.tasks = this.tasks.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          const updatedTask = { ...task, edit: !task.edit };
          return updatedTask;
        }
      });
    },
    editTask(update, id) {
      const updatedTasks = this.tasks.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          const updatedTask = { ...task, task: update, edit: !task.edit };
          return updatedTask;
        }
      });

      this.tasks = updatedTasks;
    },
    toggleComplete(id) {
      console.log(id);
      const updatedTasks = this.tasks.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          return { ...task, completed: !task.completed };
        }
      });

      this.tasks = updatedTasks;
    }
  }
};
</script>

<style>
.todo-item {
  border: 1px solid black;
  margin-bottom: 0.5rem;
}

.input-container {
  display: flex;
  flex-direction: row;
  height: 5rem;
  width: 35rem;
  align-content: center;
  justify-content: center;
  margin-top: 1rem;
}

#task,
button,
label {
  align-self: center;
  height: 2rem;
  margin-right: 1rem;
}

#task {
  width: 20rem;
}

label {
  margin-bottom: 0;
  margin-left: 0;
}
</style>
