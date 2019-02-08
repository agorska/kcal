<template>
  <div class="main-page">
    <div class=main-page__description>
      <h1 class="main-page__title">This is an simple nutritions calcuator</h1>
      <div>The norms of daily consumption are based on my own needs</div>
      <div>Based on NIH reasearches: <a href="https://ods.od.nih.gov/">Visit Site</a></div>
        <div>Powered by:
          <a href="https://developer.nutritionix.com/">
            Nutritionix API
          </a>
        </div>
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
    background-color #212121
    position relative
    z-index 20
    padding 20px
    display flex
    flex-direction column
    @media screen and (min-width: 600px)
      align-items center
  &__image
    width 100%
    height 100%
    position absolute 
    z-index 0
    background-image url('~@/assets/images/food.svg')
    animation: ani 10s linear infinite ;

@keyframes ani{
	0% {
    background-position: 0 0;
  }
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
