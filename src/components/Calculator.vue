<template>
    <div> {{ toCalc }} </div>
</template>

<script>
export default {
  name: 'calculator',
  props: ['predictor', 'toCalc'],
};
</script>
