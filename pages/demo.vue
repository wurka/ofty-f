<template>
  <div class="layout">
    <div>
      <input type="button" value="try me" @click="aboutMe">
    </div>
    <div>
      <div class="output">{{ response }}</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "demo",
    data: ()=> {return {
      response: "no response"
    }},
    methods: {
      aboutMe() {
        axios
          .get("http://localhost:9000/account/about-me")
          .then((ans)=>{this.response = ans.data})
      }
    }
  }
</script>

<style scoped lang="sass">
  input[type=button]
    width: 400px
    margin: 0 0 15px 0
  .layout
    width: 400px
    margin: 30vh auto 0 auto
  .output
    border: 1px solid #000
    padding: 10px

</style>
