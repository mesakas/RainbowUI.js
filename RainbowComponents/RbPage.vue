<template>
  <div :class="css">
    <slot/>
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbPage",
  mixins: [styleComputedMixins],
  props: {
    theme: {
      default: 'white',
      type: String
    },
    shadow: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    css() {
      let attr = ['page', 'RB_duration-l4', 'RB_' + this.theme]
      if (this.shadow) attr.push('RB_shadow-vertical-l5')

      return this.styleComputed(attr)
    }
  }
}
</script>

<style scoped>
.page {
  margin: 20px;
  padding: 10px;
  width: calc(100% - 60px);
  min-height: 1200px;
}

@media screen and (max-width: 700px) {
  .page {
    margin: 0;
    width: calc(100% - 20px);
  }
}
</style>
