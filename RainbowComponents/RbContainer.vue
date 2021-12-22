<template>
  <div class="RB_container">
    <div class="header">
      <slot name="header"/>
    </div>
    <div class="main">
      <slot name="main"/>
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "RbContainer",
}
</script>

<style scoped>
.RB_container {
  width: 100%;
}
</style>
