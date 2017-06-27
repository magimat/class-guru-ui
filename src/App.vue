<template>
  <v-app>



    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile value="true">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>



    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn 
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>




    <main>

      <div> 
        <grid-layout
                    :layout="layout"
                    :col-num="8"
                    :row-height="100"
                    :is-draggable="true"
                    :is-resizable="false"
                    :vertical-compact="false"
                    :margin="[30, 30]"
                    :use-css-transforms="true"
          >

            <grid-item v-for="item in layout" :key="item.i"
                       :x="item.x"
                       :y="item.y"
                       :w=1
                       :h=1
                       :i="item.i">
                <StudentCard></StudentCard>
            </grid-item>
        </grid-layout>
      </div>



    </main>
    



    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
    >
      <v-list>
        <v-list-item>
          <v-list-tile @click.native="right = !right">
            <v-list-tile-action>
              <v-icon light>compare_arrows</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>




    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import StudentCard from './StudentCard.vue'
  import StudentEditor from './StudentEditor.vue'
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
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Class-Guru',
        layout: testLayout
      }
    },
    methods: {
        sayHello() {
            alert('hello')
        }
    },
    components: {
      StudentEditor,
      StudentCard,
      GridLayout,
      GridItem

    }

  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
