<template>
    <div class="add-amount">
      <div> Picked: {{ foodEaten.food_name }}</div>
      <label for="searchFood">Amount in grams
      <input
        id="addGrams"
        type="text"
        placeholder="Grams"
        v-model="predictor"
      />
      </label>
      <input
        type="button"
        value="Add"
        @click="addToEaten()"
      />
    </div>
</template>

<script>
import { EventBus } from './event-bus';
import { translateIds } from '@/functions';

export default {
  name: 'addAmount',
  props: ['searchList', 'foodEaten'],
  data() {
    return {
      predictor: '',
      foodEatenNameList: [],
      foodEatenList: [],
      filteredNutri: [],
      resultsWantedIds: [
        203,
        204,
        269,
        255,
        301,
        303,
        304,
        306,
        307,
        309,
        318,
        328,
        401,
        415,
        418,
        430,
        573,
      ],
    };
  },
  methods: {
    calcPerPredictor(value, weight) {
      return (value * this.predictor) / weight;
    },
    addToEaten() {
      // validate field
      if(this.predictor == "" || isNaN(parseFloat(this.predictor))){
        console.log('wtf');
      } else  {
      // replace comma with dot
      this.predictor = this.predictor.replace(/,/g, '.');

      const obj = {};
      obj.weight = this.foodEaten.serving_weight_grams;
      const fullNutri = this.foodEaten.full_nutrients;
      for (let i = 0; i < fullNutri.length; i += 1) {
        for (let j = 0; j < this.resultsWantedIds.length; j += 1) {
          if (fullNutri[i].attr_id === this.resultsWantedIds[j]) {
            // create object from filtered ids and values, calculated by predictor
            obj[translateIds(fullNutri[i].attr_id)] = this.calcPerPredictor(fullNutri[i].value, obj.weight);
          }
        }
      }
      this.foodEatenList.push(obj);
      this.foodEatenNameList.push(this.foodEaten.food_name);
      
      const eatenList = this.foodEatenNameList;
      const eatenDetailedList = this.foodEatenList;
      EventBus.$emit('toEatenList', eatenList);
      EventBus.$emit('toCalc', eatenDetailedList);
      }
    },
  },
};
</script>
