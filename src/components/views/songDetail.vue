<template>
  <div id="singerDetail" class="container">
    <p>这是歌曲详情页</p>
    <div class="my-content container">
      <div class="row">
        <div class="col-md-6">
          <h3>歌曲名</h3>
        </div>
        <div class="col-md-6" style="position: relative; margin-top: 20px">
          <button type="button" class="btn btn-info">添加歌曲</button>
          <button type="button" class="btn btn-info">添加专辑</button>
          <button type="button" class="btn btn-info">添加MV</button>
          <button type="button" class="btn btn-danger">删除</button>
          <button type="button" class="btn btn-warning">编辑</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>歌曲/歌曲名</p>
        </div>
      </div>
      <div class="my-main-container">
        <div class="row">
          <div class="col-md-5">
            <p>歌名：歌曲名</p>
            <p>id：歌曲id</p>
            <p>类型：流行</p>
            <p>语系：汉</p>
            <p>单价：5元</p>
            <p>专辑：专辑名</p>
            <p>添加时间：2015-09-12</p>
            <p>喜欢人数：345万</p>
            <p>购买总数：345万</p>
            <p>下载总数：345万</p>
            <p>播放总数：345万</p>
            <p>歌曲时长：2015-09-12</p>
            <p>品质信息：</p>
            <div class="quality-box">
              <div class="quailty-info">
                <p>标准</p>
                <div class="song-info">
                  <p>播放次数：345万</p>
                  <p>文件大小：3.5M</p>
                </div>
              </div>
              <div class="quailty-info">
                <p>HQ</p>
                <div class="song-info">
                  <p>播放次数：345万</p>
                  <p>文件大小：3.5M</p>
                </div>
              </div>
              <div class="quailty-info">
                <p>SQ</p>
                <div class="song-info">
                  <p>播放次数：345万</p>
                  <p>文件大小：3.5M</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <p>歌词：</p>
            <div class="lyc-box">
            <pre>
              [ar:张学友]
[ti:吻别]
[al:真爱]
[00:00]张学友《吻别》
[00:08]
[00:31]前尘往事成云烟消散在彼此眼前
[00:43]就连说过了再见也看不见你有些哀怨
[00:50]给我的一切你不过是在敷衍
[00:58]你笑的越无邪我就会爱你爱得更狂野
[01:06]总在刹那间有一些了解
[01:09]说过的话不可能会实现
[01:13]就在一转眼发现你的脸
[01:17]已经陌生不会再像从前
[01:22]我的世界开始下雪
[01:26]冷得让我无法多爱一天
[01:29]冷得连隐藏的遗憾都那么地明显
[01:37]我和你吻别在无人的街
[01:42]让风痴笑我不能拒绝
[01:45]我和你吻别在狂乱的夜
[01:50]我的心等著迎接伤悲
[02:28]想要给你的思念就像风筝断了线
[02:40]飞不进你的世界也温暖不了你的视线
[02:48]我已经看见一出悲剧正上演
[02:56]剧终没有喜悦我仍然躲在你的梦里面
[03:04]总在刹那间有一些了解
[03:07]说过的话不可能会实现
[03:11]就在一转眼发现你的脸
[03:16]已经陌生不会再像从前
[03:19]我的世界开始下雪
[03:23]冷得让我无法多爱一天
[03:28]冷得连隐藏的遗憾都那么地明显
[03:35]我和你吻别在无人的街
[03:40]让风痴笑我不能拒绝
[03:43]我和你吻别在狂乱的夜
[03:48]我的心等著迎接伤悲
[03:55]我和你吻别在无人的街
[04:00]让风痴笑我不能拒绝
[04:03]我和你吻别在狂乱的夜
[04:07]我的心等著迎接伤悲
[04:18]
            </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  import * as API from '../../api/index.js'

  export default {
    name: 'songDetail',
    methods: {},
    created: function () {
    }
  }
</script>

<style>
  .my-main-container {
    margin: 0 auto;
    padding: 20px;
  }

  .my-singer-info p {
    margin-top: 15px;
  }

  .quality-box .quailty-info {
    padding: 10px;
    margin-bottom: 10px;
    width: 80%;
    border-radius: 10px;
    color: white;
  }

  .quality-box .quailty-info .song-info {
    margin-left: 2em;
  }

  .quality-box .quailty-info:first-child {
    background: deepskyblue;
  }

  .quality-box .quailty-info:nth-child(2) {
    background: orange;
  }

  .quality-box .quailty-info:nth-child(3) {
    background: red;
  }

</style>
