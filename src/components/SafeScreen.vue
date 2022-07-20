<template>
  <div class="safe-screen">
    <p>{{ display }}</p>
  </div>
</template>

<script>
export default {
  name: 'SafeScreen',
  data() {
    return {
      display: "",
    }
  },
  methods: {
    update(value) {
      this.display = value;
    }
  },
}
</script>

<style scoped>
.safe-screen {
  background-color: #9EA18B;
  width:              565px;
  height:             112px;
  border:             8px solid #080202;
  border-radius:      25px;

  -webkit-box-shadow: inset 0px 0px 10px 0px #444;
  -moz-box-shadow:    inset 0px 0px 10px 0px #444;
  box-shadow:         inset 0px 0px 10px 0px #444;
}

.safe-screen p {
  font-weight:    bold;
  color:        #333;
  font-size:      90px;
  margin-top:     0;
  letter-spacing: 20px;
}
</style>
