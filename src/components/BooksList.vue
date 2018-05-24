<template lang="pug">
  div.books-list.row
    book(
      v-for="book in booksList"
      :key="book.book_details[0].title"
      :title="book.book_details[0].title"
      :description="book.book_details[0].description"
      :author="book.book_details[0].author"
      :publisher="book.book_details[0].publisher"
    )
</template>

<script>
import Book from '@/components/Book'
export default {
  name: 'BooksList',
  props: ['booksList'],
  data () {
    return {}
  },
  components: {
    book: Book
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 768px) {
  .books-list {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
