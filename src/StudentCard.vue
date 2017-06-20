<template>
  <v-card>
    <v-card-text>
        <div>
          <img class='studentimg' src='public/monsters/monster0.png' height='50' width='50'></img>
          <span class='name'>Mathieu Girard</span><p class='textstudent'>Blablabla</p></div>
    </v-card-text>
  </v-card>
</template>
 
<script>
export default {
  name: 'StudentCard',

  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
 
<style>
  .name {
    font-weight: bold;
    font-size: 12px;
  }
  .studentimg {
    float: left;
    margin-right: 1em;
  }
  .textstudent {
    font-size: 8px;
  }
</style>
