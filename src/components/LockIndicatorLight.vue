<template>
  <div class="lock-indicator-light" :class="{ red: red }">
  </div>
</template>

<script>
export default {
  name: 'LockIndicatorLight',
  data() {
    return {
      red: false,
    }
  },
  methods: {
    turnRed() {
      this.red = true;
    },
    turnGreen() {
      this.red = false;
    }
  },
}
</script>

<style scoped>
.lock-indicator-light {
  background-color: #00FF00;
  width:            42px;
  height:           42px;
  border:           5px solid #000;
  border-radius:    40px;
}

.red {
  background-color: #FF0000;
}
</style>
