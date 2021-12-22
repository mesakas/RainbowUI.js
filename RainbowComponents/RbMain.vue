<template>
  <div class="RB_main">

    <div :class="'RB_duration-l2' + ' ' + leftClassNameCompute" v-if="state.left">
      <slot name="left"/>
    </div>

    <div :class="'RB_duration-l2' + ' ' + centerClassNameCompute" v-if="state.center">
      <slot/>
    </div>

    <div :class="'RB_duration-l2' + ' ' + rightClassNameCompute" v-if="state.right">
      <slot name="right"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "RbMain",
  props: {
    mode: {
      type: String,
      default: "", // ""/full（占满整个屏幕）, between（20% 60% 20%）, aside-left/aside-right(30% 70%)
    }
  },
  methods: {},
  computed: {
    state() {
      if (this.mode === 'full' || this.mode === "") return {left: false, center: true, right: false}
      else if (this.mode === 'between') return {left: true, center: true, right: true}
      else if (this.mode === 'aside-left') return {left: false, center: true, right: true}
      else if (this.mode === 'aside-right') return {left: true, center: true, right: false}
    },
    leftClassNameCompute() {
      if (this.mode === 'between') return "left"
      else if (this.mode === 'aside-right') return "aside"
    },
    centerClassNameCompute() {
      if (this.mode === 'between') return "center"
      else if (this.mode === 'full' || this.mode === '') return "center-full"
      else if (this.mode === 'aside-left' || this.mode === 'aside-right') return "center-aside"
    },
    rightClassNameCompute() {
      if (this.mode === 'between') return "right"
      else if (this.mode === 'aside-left') return "aside"
    }
  }

}
</script>

<style scoped>

.RB_main {
  display: flex;
  min-height: 500px;
}

.RB_main > * {
  overflow: hidden;
}

.left {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.center {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.aside {
  width: 30%;
}

.center-aside {
  width: 70%;
}


.center-full {
  width: 100%;
}


@media screen and (max-width: 1300px) {

  .left {
    width: 30%;
  }

  .center {
    width: 70%;
  }

  .right {
    width: 0;
  }
}

@media screen and (max-width: 700px) {
  .left {
    width: 0;
  }

  .center {
    width: 100%;
  }

  .right {
    width: 0;
  }

  .aside {
    width: 0;
  }

  .center-aside {
    width: 100%;
  }

}

</style>
