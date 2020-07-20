<template>
<div>
  
  <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
  <v-data-table
    :headers="headers"
    :items="allBooks"
    :search="search"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <router-link :to="'/editBook/'+item.id">
        <v-icon
          small
          class="mr-2"
          >
          mdi-pencil
        </v-icon>
      </router-link>
      
      <v-icon
        small
        @click="deleteBook(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</div>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  data(){
    return{
      search: '',
      headers: [
        { text: 'Title', value: 'title',  },
        { text: 'ISBN', value: 'ISBN' },
        { text: 'Author', value: 'author' },
        { text: 'Description', value: 'description' },
        { text: 'Creation Date', value: 'creationDate' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
    }
  },
  computed: mapGetters(['allBooks']),
  methods:{
    ...mapActions(['fetchBooks', 'deleteBook']),
  },
  mounted(){
    this.fetchBooks()
  }
}
</script>
