<template>
    <div>
      <div> {{ toCalc }} </div><br>
      <div> {{ sumObjectsByKey(toCalc) }}</div>
    </div>
</template>

<script>
export default {
  name: 'calculator',
  props: ['predictor', 'toCalc'],
  methods: {
    sumObjectsByKey(objs) {
      return objs.reduce((a, b) => {
        for (const k in b) {
          if (b.hasOwnProperty(k)) {
            a[k] = (a[k] || 0) + b[k];
          }
        }
        return a;
      }, {});
    },
  },
};
</script>
