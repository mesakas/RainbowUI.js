<template>
  <div>
    <h3 :class="css">
      <slot/>
    </h3>
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbH3",
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
      let attr = ["RB_h3"]

      if (this.underline) attr.push("underline")
      if (!!this.theme) attr.push("RB_" + this.theme)
      else attr.push("default-color")

      return this.styleComputed(attr)
    }
  }
}
</script>

<style scoped>
.RB_h3 {
  padding: 5px;
  margin: 0 0 20px 0;
  font-size: 21px;
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
