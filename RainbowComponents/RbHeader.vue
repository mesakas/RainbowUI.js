<template>
  <div :class="css">
    <div class="left">
      <slot name="left"/>
    </div>

    <div class="center">
      <slot name="center"/>
    </div>

    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbHeader",
  mixins: [styleComputedMixins],
  props: {
    // 空 big small
    size: {
      default: "",
      type: String
    },
    // 空 fix
    position: {
      default: "",
      type: String
    },
    // 设置阴影大小
    shadow: {
      default: "1",
      type: String
    },
    theme: {
      default: "dark",
      type: String
    },
    highlight: {
      default: "",
      type: String
    },
    duration: {
      default: "3",
      type: String
    }


  },
  computed: {
    css() {
      let attr = [
        'RB_header' + (!!this.position ? ('-' + this.position) : "") + (!!this.size ? ('-' + this.size) : ""),
        'RB_header-template',
        'RB_shadow-l' + this.shadow,
        'RB_' + this.theme,
        'RB_duration-l' + this.duration
      ]

      if (this.highlight) attr.push('RB_' + this.theme + '-' + this.highlight + 'light-hover')

      return this.styleComputed(attr);
    }
  }
}
</script>

<style scoped>
.RB_header-template {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left, .center, .right {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}


/* 顶栏 */
.RB_header {
  width: 100%;
  height: 50px;
}

.RB_header-big {
  width: 100%;
  height: 80px;
}

.RB_header-small {
  width: 100%;
  height: 38px;
}

/* 固定 */
.RB_header-fix {
  width: 100%;
  height: 50px;
  position: fixed;
}

.RB_header-fix-big {
  width: 100%;
  height: 80px;
  position: fixed;
}

.RB_header-fix-small {
  width: 100%;
  height: 38px;
  position: fixed;
}
</style>
