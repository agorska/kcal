<template>
  <div class="main-page">
    <div class=main-page__description>
      <h1 class="main-page__title">
        <div>Nutritions</div>
        <div>calculator</div>
      </h1>
      <div class="main-page__text">
        <i class="material-icons app-icon__main">fastfood</i>
        <p>The norms of daily consumption are based on my own needs.
            Powered by<br>
            <a href="https://developer.nutritionix.com/">Nutritionix API</a> and
            <a href="https://ods.od.nih.gov/">NIH</a>
        </p>
        <router-link to="/home"><a class="default-button primary button-main">To calc</a></router-link>
      </div>
    </div>
    <div class="main-page__image"></div>
  </div>
</template>

<style lang="stylus" scoped>
.default-button
  margin 0 auto

.button-main
  &:after
    content: '\279C'
    position absolute
    right 60px
    font-size 1em
    opacity 0
    transition all 0.3s ease
  &:hover:after
    opacity 1
    right 25px

.app-icon__main
  font-size 2em
  position absolute
  top -30px
  z-index 200
  @media screen and (min-width: 1000px)
    top -15px
    
.main-page
  height 100vh
  display flex
  align-items center
  justify-content center
  &__title
    padding 0
    margin 0
    font-size 3em
    @media screen and (min-width: 600px)
      font-size 4em
      margin 0 20px 0 0
  &__text
    background-color #212121
    padding 10px
    border-radius 10px
  &__description
    display flex
    flex-direction column
    text-align center
    position relative
    z-index 20
    margin 20px
    @media screen and (min-width: 1000px)
      flex-direction row
      width 60vw
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
};
</script>
