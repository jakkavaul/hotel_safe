<template>
  <div class="num-pad">
    <SafeButton
      v-for="button in buttons"
      :value="button.value"
      :display="button.display"
      :key="button.key"
      @safe-button-pressed="onSafeButtonPressed" />
  </div>
</template>

<script>
import SafeButton from './SafeButton.vue';

export default {
  name: "NumPad",
  components: {
    SafeButton
  },
  data() {
    return {
      buttons: [
        { key: 0,   value: '1',     display: '1' },
        { key: 1,   value: '2',     display: '2' },
        { key: 2,   value: '3',     display: '3' },
        { key: 3,   value: '4',     display: '4' },
        { key: 4,   value: '5',     display: '5' },
        { key: 5,   value: '6',     display: '6' },
        { key: 6,   value: '7',     display: '7' },
        { key: 7,   value: '8',     display: '8' },
        { key: 8,   value: '9',     display: '9' },
        { key: 9,   value: 'clear', display: 'CLR' },
        { key: 10,  value: '0',     display: '0' },
        { key: 11,  value: 'enter', display: '➪' },
      ]
    }
  },

  methods: {
    onSafeButtonPressed: function (value) {
      this.$emit('safeButtonPressed', value);
    },
  },
}
</script>

<style scoped>
.num-pad {
  display:                grid;
  grid-template-columns:  repeat(3, minmax(30px, 130px));
  gap:                    5px;
  width:                  385px;
  height:                 220px;
  padding:                20px;
  background-color:     #666;
  border:                 3px solid black;
  margin:                 20px 0 0 60px;
}
</style>
