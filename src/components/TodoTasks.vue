<template>
  <tr>
    <td scope="row" :class="completed ? 'task-complete disabled' : ''">
      {{ id }}
    </td>
    <td v-if="!edit" :class="completed ? 'task-complete disabled' : ''">
      {{ task }}
    </td>
    <td v-else>
      <form action="submit" @submit.prevent>
        <div>
          <label for="updateTask">Update Task:</label>
          <input
            type="text"
            id="updateTask"
            :placeholder="updateTask"
            v-model="updateTask"
          />
          <base-button type="submit" btnType="submit" @click="editTask"
            >Update</base-button
          >
        </div>
      </form>
    </td>
    <td :class="completed ? 'task-complete' : ''">
      <input type="checkbox" @click="toggleComplete" />
    </td>
    <td :class="completed ? 'task-complete disabled' : ''">
      <base-button type="submit" btnType="submit" @click="toggleEdit">{{
        edit ? 'Cancel' : 'Edit'
      }}</base-button>
    </td>
    <td :class="completed ? 'task-complete' : ''">
      <base-button btnType="delete" @click="deleteTask">Delete</base-button>
    </td>
  </tr>
</template>

<script>
import BaseButton from './BaseButton';

export default {
  name: 'TodoTasks',
  props: ['id', 'task', 'edit', 'completed'],
  components: {
    BaseButton
  },
  emits: ['delete-task', 'toggle-edit', 'edit-task', 'toggle-complete'],
  data() {
    return {
      updateTask: ''
    };
  },
  methods: {
    deleteTask() {
      this.$emit('delete-task', this.id);
    },
    toggleEdit() {
      this.updateTask = this.task;
      this.$emit('toggle-edit', this.id);
    },
    editTask() {
      this.$emit('edit-task', this.updateTask, this.id);
    },
    toggleComplete() {
      this.$emit('toggle-complete', this.id);
    }
  }
};
</script>

<style scoped>
.task-complete {
  background: #ecf0f1;
}
.disabled {
  pointer-events: none;
}
</style>
