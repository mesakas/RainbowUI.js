<template>
  <div :class="css">
    <slot/>
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbFooter",
  mixins: [styleComputedMixins],
  props: {
    // null big small
    size: {
      default: "",
      type: String,
    },
    theme: {
      default: "dark",
      type: String,
    },
    // null low high
    highlight: {
      default: "low",
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
        'RB_' + this.theme,
        'RB_duration-l' + this.duration,
        "RB_footer" + (!!this.size ? "-" + this.size : "")
      ]

      if (this.highlight) attr.push('RB_' + this.theme + '-' + this.highlight + 'light-hover')

      return this.styleComputed(attr);
    }
  }
}
</script>

<style scoped>

/* footer */
.RB_footer {
  --padding-size: 40px;

  width: calc(100% - (var(--padding-size) * 2));
  padding: var(--padding-size);
}

.RB_footer-big {
  --padding-size: 80px;

  width: calc(100% - (var(--padding-size) * 2));
  padding: var(--padding-size);
}

.RB_footer-small {
  --padding-size: 20px;

  width: calc(100% - (var(--padding-size) * 2));
  padding: var(--padding-size);
}


</style>
