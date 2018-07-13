<template>
  <b-card id="translateOutput">
    <b-form-textarea plaintext 
    :value="output" 
    placeholder="点击翻译将显示翻译内容"
    rows="7" 
    max-rows="7">

    </b-form-textarea>
  </b-card>
</template>

<script>

export default {
  name: 'translateOutput',
  props:['output']
}
</script>

<style>
</style>
