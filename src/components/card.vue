<template>
  <div>
    <input type="text"
           class="form-control"
           v-model="text"
           placeholder="card" />
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.form-control {
  display: block;
  text-align: center
}
</style>
