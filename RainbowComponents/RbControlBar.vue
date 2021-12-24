<template>
  <div :class="'RB_control-bar' + ' ' + 'RB_' + this.align">
    <div :class="'RB_control-panel' + ' ' + css">
      <slot/>
    </div>
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbControlBar",
  mixins: [styleComputedMixins],
  props: {
    align: {
      default: "center",
      type: String
    },
    shadow: {
      default: "3",
      type: String
    },
    corner: {
      default: "3",
      type: String
    },
    theme: {
      default: "white",
      type: String
    },
    duration: {
      default: "3",
      type: String
    }
  },
  computed: {
    css() {
      let attr = []

      if (!!this.shadow) attr.push('RB_shadow-l' + this.shadow)
      if (!!this.corner) attr.push('RB_corner-radius-l' + this.corner)
      if (!!this.duration) attr.push('RB_duration-l' + this.duration)
      if (!!this.theme) attr.push('RB_' + this.theme)

      return this.styleComputed(attr)
    }
  }
}
</script>

<style scoped>
.RB_control-bar {
  width: 100%;
  height: 0;
  position: fixed;
  bottom: 0;
  display: flex;
}

.RB_control-panel {
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  min-width: 0;
  margin-left: 15px;
  margin-right: 15px;
}


.RB_center {
  justify-content: center;
}

.RB_left {
  justify-content: flex-start;
}

.RB_right {
  justify-content: flex-end;
}

@media screen and (max-width: 550px) {
  .RB_control-panel {
    position: absolute;
    margin-bottom: 0;
    min-width: 100%;
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
