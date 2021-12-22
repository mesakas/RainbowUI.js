<template>
  <div class="RB_inline">
    <input :class="css" :type="type" v-model="value" :placeholder="placeholder" :style="'width:' + width">
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbInput",
  mixins: [styleComputedMixins],
  props: {
    width: {
      default: "",
      type: String
    },
    placeholder: {
      default: "",
      type: String
    },
    type: {
      default: "text",
      type: String
    },
    corner: {
      default: "3",
      type: String
    },
    shadow: {
      default: "2",
      type: String
    },
  },
  data() {
    return {
      value: "",
    }
  },
  watch: {
    value(val) {
      this.$emit("change", val)
    }
  },
  computed: {
    css() {

      let attr = [
        "RB_input",
        "RB_shadow-vertical-l" + this.shadow,
        "RB_corner-radius-l" + this.corner
      ]

      return this.styleComputed(attr)
    }
  }
}
</script>

<style scoped>

.RB_inline {
  display: inline;
}

.RB_input {
  padding: 7px 10px;
  font-size: 18px;
  border: none;
  outline: 1px solid #22222244;
  height: 36px;
  box-sizing: border-box;
}

.RB_input:focus {
  outline: 2px solid;
}

</style>
