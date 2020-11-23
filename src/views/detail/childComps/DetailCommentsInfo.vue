<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-content" v-if="Object.keys(comment).length">
      <div>
        <div class="user">
          <span>
            <img :src="comment.user.avatar" alt="avatar">
          </span>
          <span class="name">{{comment.user.uname}}</span>
        </div>
        <div class="comment-detail">
          <div class="desc">{{comment.content}}</div>
          <div class="other">
            <span class="date">{{comment.created | showDate}}</span>
            <span class="color">{{comment.style}}</span>
          </div>
          <div class="comment-img" v-if="comment.images && comment.images.length">
            <img v-for="(item,index) in comment.images" :src="item" alt="avatar" :key="index">
          </div>
        </div>
      </div>
    </div>
    <div v-else>暂时没有评论≥Ö‿Ö≤</div>
  </div>
</template>

<script>
  import {formatDate} from "@/common/utils";

  export default {
    name: "DetailCommentsInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      comment () {
        return Object.keys(this.commentInfo).length && this.commentInfo.list[0];
      }
    },
    filters: {
      showDate(value) {
        return formatDate(value)
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 8px 8px 20px;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
  }
  .info-header {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgba(100, 100, 100, .1);
  }
  .info-content {
    margin-top: 8px;
  }
  .info-content .user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .info-content .user .name {
    position: relative;
    top: -15px;
    left: 8px;
  }
  .comment-detail .desc {
    padding: 4px;
    text-indent: 2em;
    color: var(--color-text);
  }
  .comment-detail .other {
    color: var(--color-text);
  }
  .comment-detail .other span {
    padding: 4px;
  }
  .comment-detail .comment-img {
    display: flex;
  }
  .comment-img img {
    width: 25%;
    padding-right: 6px;
  }
</style>
