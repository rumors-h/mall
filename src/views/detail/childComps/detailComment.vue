<template>
  <div v-if="Object.keys(detailComment).length != 0" class="detail-comment">
    <div class="info-header">
      <div>用户评价</div>
      <div class="more">更多 ></div>
    </div>
    <div class="info-user">
      <img :src="detailComment.user.avatar" alt />
      <span>{{detailComment.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{detailComment.content}}</p>
      <div class="detail-other">
        <span class="detail-date">{{detailComment.created|showData}}</span>
        <span>{{detailComment.style}}</span>
      </div>
      <div v-if="detailComment.images">
        <img v-for="(item,index) in detailComment.images" :key="index" :src="item" alt />
      </div>
    </div>
  </div>
</template>

<script>
import DateFormat from "common/DateFormat";
export default {
  props: {
    detailComment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showData(value) {
      const date = new Date(value * 1000);
      const dateformat = new DateFormat
      return dateformat.setTime(date)
      // return DateFormat(date, 'yyyy/MM/dd hh:mm')
    }
  }
};
</script>

<style scoped>
.detail-comment {
  padding: 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  margin-bottom: 20px;
}
.info-header {
  display: flex;
  justify-content: space-between;
  height: 30px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
/* .info-header .more::after{
  content: '>';
} */
.info-user {
  padding: 10px 0;
}
.info-user img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
}
.info-detail p {
  font-size: 13px;
  line-height: 18px;
}
.info-detail .detail-other {
  font-size: 13px;
  padding: 10px 0;
}
.detail-other .detail-date {
  margin-right: 10px;
}
.info-detail img {
  width: 55px;
  height: 55px;
  margin-right: 5px;
}
</style>
