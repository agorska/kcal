<template>
    <div>
        <div v-for="item in fullNutritions" :key="item.id">
            <div>{{ filteredNutriArr }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'nutritions',
  props: ['fullNutritions', 'filteredNutriArr'],
}

// TODO: make id translation code
</script>
