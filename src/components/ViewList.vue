 <template lang="pug">
  div.v-list
    h2 NY Times books API
    list(v-if="!err" v-for="list in results" :key="list.list_name" :listNameEncoded="list.list_name_encoded" :displayName="list.display_name")
    p(v-if="err") {{errMsg}}
</template>

<script>
import List from '@/components/List'

export default {
  name: 'ViewList',
  data () {
    return {
      results: {},
      similar: {},
      err: false,
      errMsg: ''
    }
  },
  beforeCreate () {
    let token = '12135819ab29488589d1505661cc620f'

    fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?&api-key=${token}`)
      .then(d => d.json())// eslint-disable-next-line
      .then(j => this.results = j.results)
      .catch(e => {
        this.err = true
        this.errMsg = e.errors[0]
      })
  },
  components: {
    list: List
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 60px auto;
  font-size: 40px;
}
</style>
