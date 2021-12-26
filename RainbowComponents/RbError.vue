<template>
  <div class="RB_error">
    <div :class="'error' + ' ' + (this.disable? '':'fold')">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "RbError",
  props: {
    disable: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped>
.RB_error {
  width: 100%;
}

.error {
  font-size: 13px;
  width: calc(100% - 20px);
  border-radius: 10px;
  margin-bottom: 15px;
  color: #ffffff;
  background-color: #a62121;
  padding: 7px 10px;
  overflow: hidden;
  word-break: keep-all;
  transition-duration: .3s;
  white-space: nowrap;
  opacity: 1;
}

.error::selection {
  background-color: #ffffff;
  color: #a62121;
}

.fold {
  width: 0;
  padding: 7px 0;
  opacity: 0;
}
</style>
