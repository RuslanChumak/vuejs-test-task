<template>
  <div class="about" data-app>
    <h1>Edit Book</h1>
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="book.title"
        :counter="20"
        :rules="nameRules"
        label="Title"
        required
      ></v-text-field>

      <v-text-field
        v-model="book.ISBN"
        :rules="[v => !!v || 'ISBN is required']"
        label="ISBN"
        required
      ></v-text-field>
      <v-autocomplete
        v-model="book.author"
        :items="authors"
        :filter="customFilter"
        item-text="name"
        label="Author"
      ></v-autocomplete>
      <v-divider></v-divider>
        <v-textarea
          solo
          name="input-7-4"
          label="Description"
          v-model="book.description"
        ></v-textarea>
          <v-btn
            @click.prevent="save"
            >
            Save
          </v-btn>
    </v-form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "editBook",
  data(){
    return{
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      book: {},
      authors: []
    }
  },
  methods:{
    ...mapActions(['fetchBooks', 'fetchAuthors', 'editBook']),
     customFilter (item, queryText) {
            const textOne = item.name.toLowerCase()
            const searchText = queryText.toLowerCase()

            return textOne.indexOf(searchText) > -1
        },
      save(){
        this.editBook(this.book)
      }
  },
  computed: {
    ...mapGetters(['allAuthors']),
    getBook(){
      return this.$store.getters['getBookById'](this.$route.params.id)
    }
  },
  mounted(){
    this.fetchBooks()
    this.fetchAuthors()
    this.book = this.getBook
    this.authors = this.allAuthors
  }
}
</script>
