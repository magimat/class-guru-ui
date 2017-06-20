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


    <div class='ma-3'>

<!-- rangée de 8 -->
          <v-layout class='mt-3' row>
            <v-flex xs6>
              <v-layout row>
                <v-flex xs3 v-for="i in 4">
                  <StudentCard></StudentCard>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-layout row>
                <v-flex xs3 v-for="i in 4">
                  <StudentCard></StudentCard>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>


<!-- rangée de 7 -->
          <v-layout class='mt-3' row>
            <v-flex offset-xs1 xs6>
              <v-layout row>
                <v-flex xs3 v-for="i in 4">
                  <StudentCard></StudentCard>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-layout row>
                <v-flex xs3 v-for="i in 3">
                  <StudentCard></StudentCard>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>



<!-- rangée de 6 -->
          <v-layout class='mt-3' row>
            <v-flex xs2 v-for="i in 6">
              <StudentCard></StudentCard>
            </v-flex>
          </v-layout>



<!-- rangée de 5 -->
          <v-layout class='mt-3' row>
            <v-flex offset-xs2 xs10>
              <v-layout>
                <v-flex xs2 v-for="i in 5">
                  <StudentCard></StudentCard>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>






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
        title: 'Class-Guru'
      }
    },
    methods: {
        sayHello() {
            alert('hello')
        }
    },
    components: {
      StudentCard
    }

  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
