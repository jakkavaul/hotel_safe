<template>
  <!-- <div :class="[lock-indicator-light, { illuminated: on }]"> -->
  <div class="lock-indicator-light" :class="{ illuminated: on }">
  </div>
</template>

<script>
export default {
  name: 'LockIndicatorLight',
  data() {
    return {
      lightColor: "#008100",
      on: false,
    }
  },
  methods: {
    turnOn() {
      this.on = true;
    },
    turnOff() {
      this.on = false;
    }
  },
}
</script>

<style scoped>
  .lock-indicator-light {
    background-color: #008100;
    width: 42px;
    height: 42px;
    border: 5px solid #000;
    border-radius: 40px;
  }

.illuminated {
  background-color: #00FF00;
}

</style>
