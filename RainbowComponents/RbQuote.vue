<template>
  <div :class="css">
    <slot/>
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbQuote",
  mixins: [styleComputedMixins],
  props: {
    theme: {
      default: "dark", // light dark
      type: String
    }
  },
  computed: {
    css() {
      let attr = ["RB_quote"]

      if (this.theme === "light") attr.push("RB_quote_light")
      else if (this.theme === "dark") attr.push("RB_quote_dark")

      return this.styleComputed(attr)
    }
  }
}
</script>

<style scoped>
.RB_quote {
  border-left: 5px solid;
  padding: 3px 10px;
  margin: 10px 0 10px 0;
}

.RB_quote_light {
  color: #ffffffaa;
}

.RB_quote_dark {
  color: #00000055;

}
</style>
