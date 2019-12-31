<template>
  <div class="layout" :class="{hidden: notLoaded, visible: !notLoaded}">
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
          <label>
            counter
            <input type="text" :value="$store.state.counter">
          </label>
        </div>
        <input type="button" value="+" @click="increment">
        <div class="order" v-for="order in $store.state.orders" :key="order.id">
          one order
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {Module as $store} from "vuex"
    import axios from 'axios'
    export default {
        name: "orders",
        data: ()=>({
            notLoaded: true,
            csrf: null
        }),
        methods: {
          increment() {
            this.$store.commit('increment')
          }
        },
        computed: {
          counter: function () {
            return this.$store.state.counter;
          }
        },
        mounted() {
            this.notLoaded = false;
            axios
                .get(this.$store.state.backend + "csrf")
                .then((ans) => {this.csrf = ans.data; alert(this.csrf);})
            //this.csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        }
    }
</script>

<style lang="sass">
  @import url('http://127.0.0.1:9000/static/fonts/stylesheet.css')
  .hidden
    opacity: 0
  .visible
    opacity: 1
    transition: 0.3s
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
