<template lang="pug">
  div.book
    h3 {{ title }}
    p {{ description }}
    p author: {{ author }}
    p publisher: {{ publisher }}
</template>

<script>
export default {
  name: 'Book',
  props: ['title', 'description', 'author', 'publisher'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.book {
  margin: 30px auto;
  p:nth-of-type(1) {
    margin-bottom: 15px;
  }
}
h3 {
  
  margin-bottom: 10px;
}
p {
  margin-bottom: 5px;
}


</style>
