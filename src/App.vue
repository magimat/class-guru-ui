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
      <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      

      <v-select
        class="white"
        hide-details
        v-bind:items="groups"
        v-model="selectedGroup"
        label="Choisir un groupe"
      ></v-select>


    </v-toolbar>


    <main>

     
      <router-view class="view"></router-view>
    

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

  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        groups: ['Groupe 1', 'Groupe 2', 'Groupe 3'],
        selectedGroup: null,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Class-Guru',
      }
    },
    methods: {
    },
    components: {

    }

  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
