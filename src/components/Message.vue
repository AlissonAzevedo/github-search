<template>
<div>
    <div class="message">
      <h1>{{msg}}</h1>
    </div>
</div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: {
      type: String
    }
  }
}
</script>

<style scoped>
.message{
  background-color: rgba(255, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  border-radius: 4px;
  padding: 6px;
  position: relative;
}

h1{
    font-size: 1.3rem;
}
</style>
