<template>
    <div class="layout">
      <Translator ref="translator"/>
      <div class="line switcher">Зарегистрироваться</div>
      <div class="line error" :class="{ hidden: noError }">
        {{ errorText }}
      </div>
      <div class="line">
        <label for="email">Почта</label>
        <input type="text" id="email" v-model="loginName">
      </div>
      <div class="line">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="password">
      </div>
      <div class="line buttons">
        <span>Напомнить пароль</span>
        <input type="button" value="Отмена" @click="closeMe">
        <input type="button" value="Войти" @click="login">
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Translator from "./Translator";

    export default {
        name: "LoginDialog",
        components: {Translator},
        data() {return {
            noError: false,
            errorText: "Неизвестная ошибка",
            loginName: "",
            password: ""
        }},
        mounted() {
            this.$refs.translator.setDictionary({
              "login failed": "Не верный логин и/или пароль =("
            });
        },
        methods: {
            closeMe() {
                this.$emit('closing');
            },
            login() {
                let fd = new FormData(),
                    vm = this;
                vm.noError = true;
                fd.append('user', vm.loginName);
                fd.append('password', vm.password);
                axios
                    .post(this.$store.state.backend + 'account/login',
                        fd,
                        {
                            headers: {
                                "X-CSRFToken": vm.$store.state.csrf,
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    )
                    .then((resp)=>{vm.$emit('success')})
                    .catch((resp)=>{
                        this.errorText = vm.$refs.translator.translate(resp.response.data);
                        this.noError = false;})
            }
        }
    }
</script>

<style scoped lang="sass">
  $red: #9F0704
  .layout
    width: 750px
    position: absolute
    background: white
    top: 0
    left: 50vw
    margin: 30vh 0 0 -375px
    box-sizing: border-box
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    font-family: Philosopher,serif
  input
    font-family: Philosopher,serif
  .line.switcher
    margin: 18px 28px 0 0
    text-align: right
    font-size: 15.5px
    cursor: pointer
    user-select: none
  .error
    margin: 40px auto 0 auto
    color: $red
    font-size: 18px
    text-align: center
    padding: 0 0 0 100px
  .hidden
    opacity: 0
  .line
    margin: 40px auto 0 auto
    label
      width: 164px
      display: inline-block
      margin: 0 46px 0 40px
      text-align: right
      font-size: 18px
    input
      width: 361px
      height: 36px
      box-sizing: border-box
      padding: 0 0 0 10px
      font-family: Philosopher,serif
      font-size: 18px
  .buttons
    display: flex
    margin: 40px 135px 145px 0
    span
      flex-grow: 1
      display: inline-block
      bottom: 0
      padding: 15px 0 0 145px
      color: #C4C4C4
      &:hover
        cursor: pointer
    input[type=button]
      background: white
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
      width: 145px
      height: 37px
      border: 1px solid transparent
      margin: 0 0 0 15px
</style>
