<template>
  <div>
    <h1 :class="css">
      <slot/>
    </h1>
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbH1",
  mixins: [styleComputedMixins],
  props: {
    underline: {
      default: false,
      type: Boolean
    },
    theme: {
      default: "",
      type: String
    },
  },
  computed: {
    css() {
      let attr = ["RB_h1"]

      if (this.underline) attr.push("underline")
      if (!!this.theme) attr.push("RB_" + this.theme)
      else attr.push("default-color")

      return this.styleComputed(attr)
    }
  }
}
</script>

<style scoped>
.RB_h1 {
  padding: 5px;
  margin: 0 0 20px 0;
  font-size: 30px;
}

.underline {
  border-bottom: 1px solid #22222222;
}

.default-color {
  color: #262626;
}

.default-color::selection {
  background-color: #262626;
  color: #ffffff;
}
</style>
