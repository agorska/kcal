<template>
  <div>
    <h1>This is an simple nutritions calcuator</h1>
    <div>The norms of the consumption are approximated</div>
    <div>Version Alpha: Contains norms for adult men</div>
    <div>Based on NIH reasearches: <a href="https://ods.od.nih.gov/">Visit Site</a> </div>
      <div>Powered by:
        <a href="https://developer.nutritionix.com/">
          Nutritionix API
        </a>
      </div>
    <router-link to="/home"><a>To calc</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
}
</script>
