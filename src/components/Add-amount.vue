<template>
    <div>
      <div> {{ foodEaten.food_name }} </div>
      <input
        type="text"
        placeholder="Grams"
        v-model="predictor"
      />
      <input
        type="button"
        value="Add"
        @click="filterResults()"
      />
      <div> {{ foodEatenList }} </div>
    </div>
</template>

<script>
export default {
  name:'addAmount',
  props: ['searchList', 'foodEaten'],
  data() {
    return {
      predictor: '',
      foodEatenList: [],
      filteredNutri: [],
      resultsWantedIds: [
        203, 204, 269, 255, 301, 303, 304, 306, 307, 309, 318, 328, 401, 415, 418, 430, 573
      ],
    };
  },
  methods: {
    //calcAmount(value, weight) {
    //  return (value * this.predictor) / weight;
    //},
    filterResults() {
      const arr = [];
      const obj = {};
      const fullNutri = this.foodEaten.full_nutrients;
  
      for(let i = 0; i< fullNutri.length; i+=1){
        for(let j = 0; j< this.resultsWantedIds.length; j+=1){
          if(fullNutri[i].attr_id === this.resultsWantedIds[j]){
            //create object from filtered ids and values
            obj[fullNutri[i].attr_id] = fullNutri[i].value;
            obj.weight = 100; // test value
          }
        }
      }
      this.foodEatenList.push(obj);
    },
    addToCalculation() {
      //this.filterResults();

      //this.foodEatenList.push(this.foodEaten);
      //obj[translateIds(this.filteredIds[i].attr_id)] = this.calcPerPredictor(this.filteredIds[i].value, obj.weight);
      
      //const obj = {};
      //obj.weight = this.allDetails[0].serving_weight_grams;
      // Assign keys and proper values, based on predictor
      //for (let i = 0; i < this.filteredIds.length; i += 1) {
      //  obj[translateIds(this.filteredIds[i].attr_id)] = this.calcPerPredictor(this.filteredIds[i].value, obj.weight);
      //}
      //this.toCalc.push(obj);
    },
  },
};
</script>