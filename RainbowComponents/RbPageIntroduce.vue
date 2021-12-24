<template>
  <div :class="css" :style="'min-height:' + min_height">
    <div class="left-top">
      <slot name="left-top"/>
    </div>
    <div class="left-bottom">
      <slot name="left-bottom"/>
    </div>
    <div class="right-top">
      <slot name="right-top"/>
    </div>
    <div class="right-bottom">
      <slot name="right-bottom"/>
    </div>
  </div>
</template>

<script>
import {styleComputedMixins} from "./mixins/StyleComputedMixins";

export default {
  name: "RbPageIntroduce",
  mixins: [styleComputedMixins],
  props: {
    theme: {
      default: "",
      type: String
    },
    shadow: {
      default: "",
      type: String
    },
    corner_radius: {
      default: "",
      type: String
    },
    min_height: {
      default: "80px",
      type: String
    }
  },


  computed: {
    css() {
      let attr = ['Rb_page-introduce']

      if (!!this.theme) attr.push('RB_' + this.theme)
      if (!!this.shadow) attr.push('RB_shadow-vertical-l' + this.shadow)
      if (!!this.corner_radius) attr.push('RB_corner-radius-l' + this.this.corner_radius)

      return this.styleComputed(attr)
    }
  }
}
</script>

<style scoped>
.Rb_page-introduce {
  width: calc(100% - 40px);
  margin: 20px 20px 0 20px;
  position: relative;
}

.left-top, .left-bottom, .right-top, .right-bottom {
  position: absolute;
}


.left-top {
  left: 0;
  top: 0;
}

.left-bottom {
  left: 0;
  bottom: 0;
}

.right-top {
  right: 0;
  top: 0;
}

.right-bottom {
  right: 0;
  bottom: 0;
}
</style>
