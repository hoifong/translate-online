<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5>简单/易用/便捷</h5>
    <b-container fluid>
      <b-form-row>
        <b-col>
          <TranlateForm v-on:formSubmit="translateText"></TranlateForm>
        </b-col>
        <b-col>
          <TranslateOuput v-bind:output="TransOutput"></TranslateOuput>
        </b-col>
      </b-form-row>
    </b-container>
  </div>
</template>

<script>

import TranlateForm from './components/TranslateForm'
import TranslateOuput from './components/TranslateOutput'
import md5 from 'js-md5'

const url = '/api/trans/vip/translate',
      APPID = '20180712000185160',
      KEY='6dX1a8PQJtXcOtfAc_w5';

export default {
  name: 'app',
  data: function(){
    return   {
      TransOutput:''
    }
  },
  components: {
    TranlateForm, TranslateOuput
  },
  methods: {
    //  翻译方法:得到输入文字和目标语言
    translateText:function({inputVal, choose}){
      //alert(inputVal+"in app");
      var salt = (new Date).getTime(),
          str1 = APPID + inputVal + salt + KEY,
          sign = md5(str1);

      var that = this;
      this.$http.get(url, {
        params:{
          q:inputVal,   //  输入内容
          from:'auto',  //  源语言，设置为auto 为自动识别
          to:choose,      //  目标语言
          appid:APPID,  //  appid
          salt:salt,    //  随机数
          sign:sign     //  签名
        }
      }).then(function(res){ //  请求成功
        //console.log(res.data.trans_result[0].dst);
        that.TransOutput = res.data.trans_result[0].dst;
      }).catch(function(err){ //   请求失败
        that.TransOutput = "Unknown Error Occurred!：\n"+err;
      });

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
