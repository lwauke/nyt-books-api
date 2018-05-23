<template lang="pug">
  div.v-list
    h2 NY Times books API
    list(v-for="list in results" :key="list.list_name" :listNameEncoded="list.list_name_encoded" :displayName="list.display_name")
</template>

<script>
import List from '@/components/List'

export default {
  name: 'ViewList',
  data () {
    return {
      results: {},
      similar: {}
    }
  },
  beforeCreate () {
    let token = '12135819ab29488589d1505661cc620f'

    fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?&api-key=${token}`)
      .then(d => d.json())// eslint-disable-next-line
      .then(j => this.results = j.results)
      .catch(e => console.log(e))
  },
  components: {
    list: List
  }
}
</script>

<style lang="scss" scoped>
.v-list {
	// text-align: center;
}
h2 {
	font-weight: normal;
	margin: 20px auto;
}
</style>
