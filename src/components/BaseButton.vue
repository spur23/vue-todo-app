<template>
  <button :type="type" :class="btnType === 'delete' ? 'delete' : 'submit'">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: ['type', 'btnType']
};
</script>

<style scoped>
button {
  align-self: center;
  height: 2rem;
  margin-right: 1rem;
  border-radius: 10%;
  border: none;
  text-align: center;
  text-decoration: none;
}

.submit {
  background-color: #3498db;
  color: white;
}

.delete {
  background-color: #e74c3c;
  color: white;
}
button:hover {
  filter: brightness(90%);
}

button:focus {
  outline: 0;
}
</style>
