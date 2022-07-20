<template>
  <div class="safe-button" @click="onClick">
    <p>{{ display }}</p>
  </div>
</template>

<script>
export default {
  name: 'SafeButton',
  props: {
    value:    String,
    display:  String,
    fontSize: {
      type:     String,
      default:  '16px',
    }
  },
  methods: {
    onClick() {
      this.$emit('safeButtonPressed', this.value);
    },
  },
  computed: {
    cssProps() {
      return {
        '--btn-font-size': this.fontSize,
      }
    }
  }
}
</script>

<style scoped>
.safe-button {
  background-color: #FFF;
  vertical-align:   middle;
  font-weight:      bold;
  font-size:        var(--btn-font-size);
  cursor:           pointer;
}

.safe-button:active {
  background-color: rgb(81, 233, 94);
}
</style>
