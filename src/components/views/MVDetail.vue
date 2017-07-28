<template>
  <div id="singerDetail" class="container">
    <p>这是MV详情页</p>
    <div class="my-content container">
      <div class="row">
        <div class="col-md-6">
          <h3>{{MVInfo.mvname}}</h3>
        </div>
        <div class="col-md-6" style="position: relative; margin-top: 20px">
          <button type="button" class="btn-info">添加歌曲</button>
          <button type="button" class="btn-info">添加专辑</button>
          <button type="button" class="btn-info">添加MV</button>
          <button type="button" class="btn-danger">删除</button>
          <button type="button" class="btn-warning">编辑</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>MV/{{MVInfo.mvname}}</p>
        </div>
      </div>
    </div>
    <div class="my-main-container container">
      <div class="row">
        <div class="col-md-6 my-singer-info">
          <p>名字：{{MVInfo.mvname}}</p>
          <p>id  ：{{MVInfo.mvid}}</p>
          <p>歌手：{{MVInfo.singername}}</p>
          <p>播放次数：{{MVInfo.play}}</p>
          <p>喜欢人数：{{MVInfo.opt}}</p>
        </div>
        <div class="col-md-6">
          <img :src="MVInfo.image" alt="专辑封面" class="img-responsive img-thumbnail" width="300px" height="300px"/>
        </div>
      </div>
      <div class="row" style="margin-top:10px;">
        <p class="col-md-1">详情：</p>
        <p class="col-md-9">

        </p>
      </div>
      <div class="row">
        <p class="col-md-12">发布时间：2016-09-30</p>
      </div>
      <div class="row">
        <p class="col-md-12">添加时间：{{MVInfo.create_ts}}</p>
      </div>
      <!--<div class="row">-->
        <!--<div class="col-md-8">-->
          <!--<li>-->
            <!--<i class="fa fa-video-camera bg-maroon"></i>-->
            <!--<div class="timeline-item">-->
              <!--<h3 class="timeline-header">{{MVInfo.mvname}}</h3>-->

              <!--<div class="timeline-body">-->
                <!--<div class="embed-responsive embed-responsive-16by9">-->
                  <!--<iframe class="embed-responsive-item html5-video-player unstarted-mode" :src="MVInfo.url"-->
                          <!--frameborder="0"-->
                          <!--allowfullscreen=""></iframe>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import 'jquery'
  import * as API from '../../api/index'

  export default {
    name: 'MVDetail',
    data () {
      return {
        MVID: 0,
        MVInfo: ''
      }
    },
    created: function () {
      if (this.$route.query.editid) {
        this.MVID = this.$route.query.editid
      }
      if (this.MVID > 0) {
        let data = `mvid=${this.MVID}`
        const self = this
        API.request('post', '/admin/mv/info', data).then(function (res) {
          self.MVInfo = res.data.data.mv
          console.log('---------------------------')
          console.log(res.data.data.mv)
          console.log('+++++++++++++++++++++++++++++')
        })
      }
    }
  }
</script>

<style>
  .my-main-container {
    margin: 0 auto;
    background: #c4e3f3;
  }

  .my-singer-info p {
    margin-top: 15px;
  }

</style>
