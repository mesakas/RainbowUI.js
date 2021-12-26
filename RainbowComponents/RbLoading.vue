<template>
  <transition name="fade">
    <div class="RB_loading" key="loading" v-if="show">
      <div class="icon"/>
      <div class="text">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RbLoading",
  props: {
    text: {
      default: "正在加载...",
      type: String
    },
    show: {
      default: false,
      type: Boolean
    }
  }

}
</script>

<style scoped>
.RB_loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffffd1;
  z-index: 9999;
}

.icon {
  border-radius: 10px;
  width: 50px;
  height: 50px;
  background-color: #2a2a2a;


  -webkit-animation: rotate 1s linear 1s 5 alternate;
  animation: rotate 1s linear infinite;


}

.text {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 800;
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
