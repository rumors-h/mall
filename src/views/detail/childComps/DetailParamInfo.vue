<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table,index) in paramInfo.rule.tables" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(td,index) in paramInfo.info.set" :key="index">
        <td class="info-param-key">{{td.key}}</td>
        <td class="info-param-value">{{td.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info{
    padding: 20px 15px;
    border-top: 5px solid #f2f5f8;
    border-bottom: 5px solid #f2f5f8;
    font-size: 14px;
  }
  .param-info table{
    width: 100%;
    border-collapse: collapse;
  }
  .param-info tr{
    height: 40px;
    border-bottom: grey 1px solid;
  }
  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-param-key{
    width: 100px;
  }
  .info-param-value{
    color: var(--color-high-text);
  }
</style>
