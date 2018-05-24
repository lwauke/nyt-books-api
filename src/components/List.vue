<template lang="pug">
  div.list
    h2 {{ displayName }}
    a(@click='toggleAndLoad')
      span(v-if="!booksListActive") view list
      span(v-if="booksListActive") hide list
    booksList(
      v-if="booksListActive && !err"
      :booksList="booksList"
    )
    p(v-if="err") {{ errMsg }}
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
      booksList: {},
      err: false,
      errMsg: ''
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
        .catch(e => {
          this.err = true
          this.errMsg = e.errors[0]
        })
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
  margin-bottom: 20px;
  margin-top: 0;
}

.list {
  border-top: 1px solid #efefef;
  padding: 95px;
  &:last-child {
    border-bottom: 1px solid #efefef;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }

}

a {
  cursor: pointer;
  text-decoration: underline;
}
</style>
