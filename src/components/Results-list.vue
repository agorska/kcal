<template>
  <div class="results-list" id="results-list">
    <ul>
      <li
        @click="pickedFoodDetails(item.food_name);
        scrollToAmount()"
        class="results-list__item"
        v-for="item in searchList" :key="item.id"
      >
        {{ item.food_name }}
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.results-list
  margin-top var(--space-small)
  ul
    list-style-type none
    padding 0
    margin 0
  &__item
    margin-bottom 5px
    &:hover
      color var(--secondary)

</style>

<script>
import axios from 'axios';

export default {
  name: 'resultsList',
  props: ['searchList'],
  data() {
    return {
      foodItemDetails: '',
    };
  },
  methods: {
    pickedFoodDetails(el) {
      axios({
        method: 'post',
        url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
        headers: {
          'x-app-id': '740969e3',
          'x-app-key': '04d25b3db76aca93f78186a4987563e8',
          'x-remote-user-id': '0',
          'Content-Type': 'application/json',
        },
        data: {
          query: el,
        },
      }).then((response) => {
        this.foodItemDetails = response.data.foods;
        this.$emit('pickitem', this.foodItemDetails[0]);
      }).catch((error) => {
        console.log(error);
      });
    },
    scrollToAmount() {
      document.getElementById("addGrams").scrollIntoView();
    },
  },
};
</script>
