<template>
  <b-container id="translateForm">
      <b-card>
        <b-form v-on:submit="formSubmit">
            <b-form-row>
            <b-col cols=8>
                <b-form-textarea v-model="inputval" placeholder="输入需要翻译的内容" rows="7" max-rows="7">
                </b-form-textarea>
            </b-col>
            <b-col cols=4>
                <!-- <b-form-input class="mb-2 mr-sm-2 mb-sm-0" type="text" v-model="inputval" placeholder="输入需要翻译的内容" /> -->
                <b-card>
                        <b-form-select v-model="choose">
                            <option v-for="chs in choises" 
                                v-bind:value="chs[0]" 
                                v-bind:key="chs[0]">
                                {{ chs[1] }}
                            </option>
                        </b-form-select>
                        <b-form-text>
                            请不要使用回车，否则将之翻译第一句。
                        </b-form-text>
                        <b-button variant="primary" type="submit">翻译</b-button>
                </b-card>
            </b-col>
            </b-form-row>
        </b-form>
      </b-card>
  </b-container>
</template>

<script>

const choises = [
    ['zh', '中文'],
    ['en', '英语'],
    ['yue', '粤语'],
    ['wyw', '文言文'],
    ['jp', '日语'],
    ['kor', '韩语'],
    ['fra', '法语'],
    ['spa', '西班牙语'],
    ['th', '泰语'],
    ['ara', '阿拉伯语'],
    ['ru', '俄语'],
    ['pt', '葡萄牙语'],
    ['de', '德语'],
    ['it', '意大利语'],
    ['el', '希腊语'],
    ['nl', '荷兰语'],
    ['pl', '波兰语'],
    ['bul', '保加利亚语'],
    ['est', '艾沙里亚语'],
    ['dan', '丹麦语'],
    ['fin', '芬兰语'],
    ['cs', '捷克语'],
    ['rom', '罗马利亚语'],
    ['slo', '斯洛文尼亚语'],
    ['swe', '瑞典语'],
    ['hu', '匈牙利语'],
    ['cht', '繁体中文'],
    ['vie', '越南语']
]

export default {
  name: 'translateForm',
  data: function(){
      return {
          inputval:'',
          choises:choises,
          choose:'en'
      }
  },
  methods: {
      formSubmit: function(e){
          //alert(this.inputval);
          this.$emit("formSubmit", {
              inputVal:this.inputval,
              choose:this.choose
          });
          e.preventDefault();
      }
  }
}
</script>

<style>
</style>
