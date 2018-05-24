<template>
  <div class="book col-sm-6 col-md-4 col-lg-3">
    <h3> {{ title }} </h3>
    <p> {{ description }} </p>
    <p><strong>author:</strong>{{ author }}</p>
    <p><strong>publisher:</strong>{{ publisher }}</p>
  </div>
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
  margin-top: 80px;
  margin-bottom: 80px;
  p:nth-of-type(1) {
    margin-bottom: 15px;
    line-height: 22px;
    @media only screen and (min-width: 768px) {
      display: inline-block;
      width: 90%;
      height: 110px;
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
    height: 230px;
    padding: 10px;
  }
}
h3 {
  margin-bottom: 25px;
  text-decoration: underline;
  @media only screen and (min-width: 768px) {
    font-size:  16px
  }
}
p {
  margin-bottom: 5px;
  @media only screen and (min-width: 768px) {
    font-size:  15px
  }
}
strong { font-weight: bold; }

</style>
