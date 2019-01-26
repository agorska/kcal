<template>
    <div>
      <input
        type="text"
        placeholder="Grams"
        v-model="predictor"
      />
      <input
        type="button"
        value="Add"
        @click="addToCalculation()"
      />
    </div>
</template>

<script>
export default {
  name:'addAmount',
  props: ['searchList'],
  data() {
    return {
      predictor: '',
    };
  },
  methods: {
    addToCalculation() {
      console.log(this.searchList);
    },
  },
};
</script>