<template>
    <div>
        <div v-for="item in nutritionDetails" :key="item.id">
            <div> Calories: </div>
            <div> {{ item.nf_calories }} </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['nutritionDetails'],
    name:'nutriDetails',
}
</script>