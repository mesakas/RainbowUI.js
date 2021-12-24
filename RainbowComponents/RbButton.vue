<template>
  <button :class="css"
          @click="(e)=> { $emit('click', e) }"
          @mousedown="(e)=> { $emit('mousedown', e) }"
          @mouseup="(e)=> { $emit('mouseup', e) }"
  >{{ label }}
  </button>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbButton",
  mixins: [styleComputedMixins],
  props: {
    label: {
      default: "Button",
      type: String
    },
    theme: {
      default: "light",
      type: String
    },
    corner: {
      default: "2",
      type: String
    },
    shadow: {
      default: "2",
      type: String
    },
    duration: {
      default: "1",
      type: String
    },
    hover_mode: {
      default: "lowlight",
      type: String
    }

  },
  methods: {},
  computed: {
    css() {
      let attr = [
        "rb-button",
        "RB_" + this.theme,
        "RB_" + this.theme + "-" + this.hover_mode + "-hover",
        "RB_corner-radius-l" + this.corner,
        "RB_shadow-vertical-l" + this.shadow,
        "RB_duration-l" + this.duration
      ]
      return this.styleComputed(attr)
    }
  }
}
</script>

<style scoped>
.rb-button {
  height: 36px;
  padding: 0 23px;
  display: inline;
  border: none;
  user-select: none;
}
</style>
