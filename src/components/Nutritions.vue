<template>
    <div>
        <div v-for="item in allDetails" :key="item.id">
            <div>{{ filteredIds }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'nutritions',
  props: ['allDetails', 'filteredIds', 'resultsDetailsWantedIds'],
  updated() {
      
// create object with key = id, value = names of nutri and assign them to filteredIds conditionally

        //for (const key of Object.keys(this.filteredIds)) {
        //    for(let i = 0; i< this.resultsDetailsWantedIds.length; i++){
        //        if((this.filteredIds[key].attr_id) == this.resultsDetailsWantedIds[i]){
        //            console.log('wapń');
        //       }
        //    }   
        //}
    },
};

// TODO: make id translation code
</script>
