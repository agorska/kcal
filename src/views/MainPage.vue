<template>
  <div class="main-page">
    <div class=main-page__description>
      <h1 class="main-page__title">This is an simple nutritions calcuator</h1>
      <p>The norms of daily consumption are based on my own needs.
          Powered by<br>
          <a href="https://developer.nutritionix.com/">Nutritionix API</a> and
          <a href="https://ods.od.nih.gov/">NIH</a>
      </p>
      <router-link to="/home"><a class="default-button primary">To calc</a></router-link>
    </div>
    <div class="main-page__image"></div>
  </div>
</template>

<style lang="stylus">
.main-page
  height 100vh
  display flex
  align-items center
  justify-content center
  &__title
    padding 0
    margin 0
    color var(--primary)
  &__description
    display flex
    flex-direction column
    align-items center
    justify-content center
    background-color #212121
    position relative
    z-index 20
    padding 20px
    @media screen and (min-width: 600px)
      align-items center
      text-align center
  &__image
    width 100%
    height 100%
    position absolute 
    z-index 0
    background-image url('~@/assets/images/food.svg')
    animation: ani 10s linear infinite

@keyframes ani{
	100% { 
    background-position: 0 100vh;
  }
}

</style>


<script>
export default {
  name: 'mainPage',
}
</script>
