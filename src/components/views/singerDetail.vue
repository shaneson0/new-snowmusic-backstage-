<template>
  <div id="singerDetail" class="container">
    <p>这是歌手详情页</p>
    <div class="my-content container">
      <div class="row">
        <div class="col-md-6">
          <h3>歌手名</h3>
        </div>
        <div class="col-md-6" style="position: relative; margin-top: 20px" v-if="singerInfo">
          <router-link :to="{ path: 'updateSong', query: { singer: singerInfo.singer.singername}}">
            <button type="button" class="btn btn-info">添加歌曲</button>
          </router-link>
          <button type="button" class="btn btn-info">添加专辑</button>
          <router-link :to="{path: 'updateMV', query: { singer: singerInfo.singer.singername}}">
            <button type="button" class="btn btn-info">添加MV</button>
          </router-link>
          <button type="button" class="btn btn-danger">删除</button>
          <router-link :to="{ path: 'updateSinger', query: { editid: singerid } }">
            <button type="button" class="btn btn-warning">编辑</button>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>歌手和音乐人/歌手/歌手名</p>
        </div>
      </div>
    </div>
    <div class="my-main-container container" v-if="singerInfo">
      <div class="row">
        <div class="col-md-6 my-singer-info">
          <p>名字：{{singerInfo.singer.singername}}</p>
          <p>id  ：{{singerInfo.singer.singerid}}</p>
          <p>类别：{{singerInfo.singer.type}}</p>
          <p>语系：{{singerInfo.singer.lang}}</p>
          <p>关注：{{singerInfo.singer.follow}}</p>
        </div>
        <div class="col-md-6">
          <img :src="singerInfo.singer.image" class="img-responsive img-thumbnail" width="300px" height="300px"/>
        </div>
      </div>
      <div class="row" style="margin-top: 10px;">
        <p class="col-md-1">详情：</p>
        <p class="col-md-9" v-text="singerInfo.singer.detail">
        </p>
      </div>
      <div class="row">
        <p class="col-md-12">添加时间：{{singerInfo.singer.create_ts}}</p>
      </div>
      <div class="row" style="margin-bottom: 10px;">
        <div class="col-md-1">
          <p style="margin-bottom: 0px;">歌曲：</p>
          <p style="margin-bottom: 0px; color: gray;">({{singerInfo.song}})</p>
        </div>
        <div class="col-md-11">
          <span>歌曲名</span>
          <span>歌曲名</span>
          <span>歌曲名</span>
          <span>歌曲名</span>
          <span>歌曲名</span>
          <span>歌曲名</span>
        </div>
      </div>
      <div class="row" style="margin-bottom: 10px;">
        <div class="col-md-1">
          <p style="margin-bottom: 0px;">专辑：</p>
          <p style="margin-bottom: 0px; color: gray;">({{singerInfo.album}})</p>
        </div>
        <div class="col-md-9">
          <div class="my-image-box" v-for="album in albumList">
            <!-- :src="album.image" -->
            <!-- src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg" -->
            <img :src="album.image"
                 alt="专辑图片" width="150px" height="150px"
                 class="img-responsive img-thumbnail"/>
            <p>{{album.albumname}}</p>
          </div>
        </div>
      </div>
      <div class="row" style="margin-bottom: 10px;">
        <div class="col-md-1">
          <p style="margin-bottom: 0px;">MV：</p>
          <p style="margin-bottom: 0px; color: gray;">({{singerInfo.mv}})</p>
        </div>
        <div class="col-md-11">
          <div class="my-image-box" v-for="mv in mvList">
            <img :src="mv.image" width="150px" height="150px"
                 class="img-responsive img-thumbnail"/>
            <p>{{mv.mvname}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'jquery'
  import * as API from '../../api/index'

  export default {
    name: 'singerDetail',
    data () {
      return {
        singerInfo: '',
        albumList: [],
        mvList: [],
        singerid: 0
      }
    },
    created: function () {
      this.singerid = this.$route.query.editid
      let data = `singerid=${this.singerid}`
      const self = this
      API.request('post', '/admin/singer/info', data).then(function (res) {
        self.singerInfo = res.data.data.info
      })
      let data1 = `table=albumlib&keyname=singerid&queryfiles=albumid,albumname,image&keyvalue=${this.singerid}`
      API.request('post', '/admin/clear/query', data1).then(function (res) {
        self.albumList = res.data.data.res
      })
      let data2 = `table=mvlib&keyname=singerid&queryfiles=mvid,mvname,image&keyvalue=${this.singerid}`
      API.request('post', '/admin/clear/query', data2).then(function (res) {
        self.mvList = res.data.data.res
        console.log('以下是我要的数据')
        console.log(res.data.data.res)
        console.log('以上我是的数据')
      })
    }
  }
</script>

<style>
  .my-main-container {
    margin: 0 auto;
  }

  .my-singer-info p {
    margin-top: 15px;
  }

  .my-image-box {
    display: inline-block;
    text-align: center;
  }
</style>
