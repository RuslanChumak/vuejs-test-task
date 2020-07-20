import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    authors: []
  },
  mutations: {
    updateBooks(state, books){
      state.books = books
    },
    updateAuthors(state, authors){
      state.authors = authors
    }
  },
  actions: {
    fetchBooks(ctx){
      let books = JSON.parse(localStorage.getItem('books'))
      if(books)
        ctx.commit('updateBooks', books)
    },
    fetchAuthors(ctx){
      let authors = JSON.parse(localStorage.getItem('authors'))
      if(authors)
        ctx.commit('updateAuthors', authors)
    },
    addBook({commit, state}, book){
      let books = state.books
      books.unshift(book)
      localStorage.setItem('books',JSON.stringify(books))
      commit('updateBooks', books)
    },
    deleteBook({commit, state}, book){
      let books = state.books
      books = books.filter(item => item.id != book.id)
      localStorage.setItem('books',JSON.stringify(books))
      commit('updateBooks', books)
    },
    editBook({commit, state}, newBook){
      let books = state.books
      books.map(book => 
          book.id == newBook.id ? newBook : book
      )
      localStorage.setItem('books',JSON.stringify(books))
      commit('updateBooks', books)
    },
    saveAuthors(state, authors){
      localStorage.setItem('authors',JSON.stringify(authors))
    }
  },
  getters:{
    allBooks(state){
      return state.books
    },
    allAuthors(state){
      return state.authors
    },
    getBookById: state => id =>{
      return state.books.find(book => book.id == id)
    }
  },
  modules: {
  }
})
