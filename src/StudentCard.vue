<template>
  <v-card>

    <v-card-row class="blue body-1 title-row">
    <v-card-title class="title-card pa-2">
        <span>Alexandre Tremblay-Savard</span>
        <v-spacer></v-spacer>
        <div>
          <StudentEditor></StudentEditor>
        </div>
    </v-card-title>
    </v-card-row>
    <v-card-text class="pa-1 text-student">
        <div>
          <img class='studentimg' src='public/monsters/monster0.png' height='48' width='48'></img>
          <p>Blablabla</p></div>
    </v-card-text>


  </v-card>

</template>
 
<script>
  import StudentEditor from './StudentEditor.vue'


export default {
  name: 'StudentCard',

  data () {
    return {
      msg: 'Hello world!'
    }
  },
  methods: {
      showEditor() {
          StudentEditor.modalModel = true;
      }
  },
  components: {
      StudentEditor
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
  .title-card {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.01em;    
  }
  .title-row {
    height: 30px !important;
    min-height: 10px;
  }
  .small-icon {
    font-size: 1rem;
    height:18px;
    width:18px;
  }
  .text-student {
    min-height: 80px;
    font-size: 10px;
  }

</style>
