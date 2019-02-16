<template>
  <div class="add-amount">
    <h4 class="add-amount__item">Picked: {{ foodEaten.food_name }}</h4>
    <div class="add-amount__item--wrap">
      <label for="searchFood" class="default-input">Amount
        <input
          id="addGrams"
          type="text"
          class="default-input__input center"
          placeholder="Grams"
          v-model="predictor"
          :class="{ inputEmpty: isEmpty }"
        />
      </label>
    </div>
    <div v-if="isEmpty" class="error-empty-field">Fill the input with a number!</div>
    <button
        class="default-button primary"
        @click="addToEaten(); toTop(100)"
      >
        <i class="material-icons">add</i>
        add
      </button>
  </div>
</template>

<style lang="stylus" scoped>
.add-amount
  &__item
    margin 20px
    &--wrap
      display flex
      align-items flex-end
.inputEmpty
  border-bottom 3px solid #000
  &:focus
    width 250px
    border-bottom 3px solid var(--primary)
</style>

<script>
import { EventBus } from './event-bus';
import { translateIds } from '@/functions';

export default {
  name: 'addAmount',
  props: ['searchList', 'foodEaten'],
  data() {
    return {
      isEmpty: false,
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
    toTop(time) {
      const scrollStep = -window.scrollY / (time / 15),
      scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
      },15);
      this.showNotification();
    },
    addToEaten() {
      // validate field
      if (this.predictor === '' || isNaN(parseFloat(this.predictor))) {
        this.isEmpty = true;
        throw 'Fill the input with number!';
      } else {
        this.isEmpty = false;
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
        // create object for eaten list object
        this.foodEatenNameList.push(this.foodEaten.food_name + ' ' + this.predictor.toString() + 'g');
        const eatenList = this.foodEatenNameList;
        const eatenDetailedList = this.foodEatenList;
        
        EventBus.$emit('toEatenList', eatenList);
        EventBus.$emit('toCalc', eatenDetailedList);
      }
    },
    showNotification(){
      this.$emit('successfullyAdded');
    },
  },
};
</script>
