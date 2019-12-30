<template>
  <div class="layout">
    <div class="header">
      this will be header later
    </div>
    <div class="my-body">
      <div class="link-panel">
        <ul>
          <li>Настройки профиля</li>
          <li>Календарь</li>
          <li>Мои заказы</li>
          <li>Запросы от клиентов</li>
          <li>Мой декор</li>
          <li>Оплата</li>
          <li>Мои коллекции</li>
        </ul>
      </div>
      <div class="content-panel">
        <div>
          <input type="text" :value="counter">
        </div>
        <input type="button" value="+" @click="increment">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "orders",
        methods: {
          increment() {
            this.$store.commit('increment')
          }
        },
        computed: {
          counter: function () {
            return this.store.counter;
          }
        }
    }
</script>

<style lang="sass">
  @import url('http://127.0.0.1:9000/static/fonts/stylesheet.css')
  $pageBackground: #f5f5f5
  html
    background: #f5f5f5
    font-family: Philosopher, serif
  .header
    height: 130px
    background: pink
  .layout
    width: 1140px
    margin: auto
    background: white
  .my-body
    display: flex
  .link-panel
    width: 224px
    background: $pageBackground
    margin: 13px
    ul
      list-style-type: none
      li
        width: 190px
        height: 39px
        margin: 9px 0 9px 0
  .content-panel
    flex-grow: 1
    border: 1px solid #000
</style>
