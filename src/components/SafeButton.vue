<template>
  <div class="safe-button">
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'SafeButton',
  props: {
    value: String,
    fontSize: {
      type: String,
      default: '16px',
    }
  },
  computed : {
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
    vertical-align: middle;
    font-weight: bold;
    font-size: var(--btn-font-size);
  }

  .safe-button:active {
    background-color: rgb(81, 233, 94);
  }
</style>
