<template>
  <div class="add-book" data-app>
    <h1>Add Book</h1>
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="title"
        :counter="20"
        :rules="nameRules"
        label="Title"
        required
      ></v-text-field>

      <v-text-field
        v-model="ISBN"
        :rules="[v => !!v || 'ISBN is required']"
        label="ISBN"
        required
      ></v-text-field>
      <v-autocomplete
        v-model="author"
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
          v-model="description"
        ></v-textarea>
        <router-link to='/'>
            <v-btn
                @click.prevent="save"
                >
                Save
            </v-btn>
        </router-link>
    </v-form>
  </div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
    name: 'AddBook',
    data: () => ({
        title: '',
        author:'',
        description: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 20) || 'Name must be less than 20 characters',
        ],
        ISBN: '',
        authors: [
            { name: 'Arthur Hailey', id: 1 },
            { name: 'Gerard de Villiers', id: 2 },
            { name: 'Beatrix Potter', id: 3 },
            { name: 'Kyotaro Nishimura', id: 4 },
            { name: 'Agatha Christie', id: 5 },
            { name: 'Barbara Cartland', id: 6 },
            { name: 'Danielle Steel', id: 7 },
            { name: 'Harold Robbins', id: 8 },
            { name: 'Georges Simenon', id: 9 },
            { name: 'Gilbert Patten', id: 10 },
        ],
    }),
    mounted(){
        this.saveAuthors(this.authors)
    },
    methods: {
        ...mapActions(['addBook', 'saveAuthors']),
        customFilter (item, queryText) {
            const textOne = item.name.toLowerCase()
            const searchText = queryText.toLowerCase()

            return textOne.indexOf(searchText) > -1
        },
      save(){
          let book = {
              id: Date.now(),
              title: this.title,
              ISBN: this.ISBN,
              author: this.author,
              description: this.description,
              creationDate: new Date().toLocaleString('en-US', {year: "numeric", month: "long", day: "numeric"})
          }
          
          this.addBook(book)
      }
    }
}
</script>
<style scoped>
a{
    text-decoration :none;
}
</style>