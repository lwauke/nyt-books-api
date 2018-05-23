<template lang="pug">
  div.list(:set-listNameEncoded="listNameEncoded")
    h2 {{ displayName }}
    a(@click='toggleAndLoad') view list
    booksList(
      v-if="booksListActive"
      :booksList="booksList"
    )
</template>

<script>
import BooksList from '@/components/BooksList'
export default {
  name: 'List',
  props: ['listNameEncoded', 'displayName'],
  data () {
    return {
      booksListActive: false,
      booksListLoaded: false,
      booksList: {}
    }
  },
  methods: {
    toggleAndLoad () {
      this.toggleBooksList()
      if (!this.booksListLoaded) {
        this.booksListLoaded = true
        this.loadBooksList()
      }
    },
    toggleBooksList () {
      this.booksListActive = !this.booksListActive
    },
    loadBooksList () {
      let token = '12135819ab29488589d1505661cc620f'
      fetch(`https://api.nytimes.com/svc/books/v3/lists.json?&api-key=${token}&list=${this.listNameEncoded}`)
        .then(d => d.json())// eslint-disable-next-line
        .then(j => this.booksList = j.results)
        .catch(e => console.log(e))
    }
  },
  components: {
    BooksList
  }
}
</script>

<style lang="scss" scoped>
h2 {
	font-size: 23px;
	margin-bottom: 10px;
}
.list {
	max-width: 400px;
	width: 80%;
	margin: 30px auto;
	border: 1px solid #000;
	border-radius: 10px;
	padding: 50px;
}

a {
	cursor: pointer;
}
</style>
