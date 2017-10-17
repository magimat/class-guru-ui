<template>

<grid-layout
            :layout="layout"
            :col-num="8"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i">
            
                   <StudentCard></StudentCard>
        </grid-item>
    </grid-layout>

</template>

<script>
  import StudentCard from './StudentCard.vue'
  import VueGridLayout from 'vue-grid-layout';

  var testLayout = [
      {"x":0,"y":0,"w":1,"h":1,"i":"0"},
      {"x":1,"y":0,"w":1,"h":1,"i":"1"},
      {"x":2,"y":0,"w":1,"h":1,"i":"2"},
      {"x":3,"y":0,"w":1,"h":1,"i":"3"},
      {"x":4,"y":0,"w":1,"h":1,"i":"4"},
      {"x":5,"y":0,"w":1,"h":1,"i":"5"},
      {"x":6,"y":0,"w":1,"h":1,"i":"6"},
      {"x":7,"y":0,"w":1,"h":1,"i":"7"}

  ];


  var GridLayout = VueGridLayout.GridLayout;
  var GridItem = VueGridLayout.GridItem;

  export default {
    data () {
      return {
        layout: testLayout
      }
    },
    components: {
      StudentCard,
      "GridLayout": GridLayout,
      "GridItem": GridItem
    }
  }

</script>

<style>
</style>
