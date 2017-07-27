<template>
  <div id="singerDetail" class="container">
      <p>这是歌手详情页</p>
      <div class="my-content container">
        <div class="row">
          <div class="col-md-6">
            <h3>歌手名</h3>
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
            <p>歌手和音乐人/歌手/歌手名</p>
          </div>
        </div>
      </div>
    <div class="my-main-container container">
      <div class="row">
        <div class="col-md-6 my-singer-info">
          <p>名字：歌手名</p>
          <p>id  ：12345</p>
          <p>类别：组合</p>
          <p>语系：汉</p>
          <p>关注：1234</p>
        </div>
        <div class="col-md-6">
          <img src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg" class="img-responsive img-thumbnail"/>
        </div>
      </div>
      <div class="row" style="margin-top: 10px;">
        <p class="col-md-1">详情：</p>
        <p class="col-md-9">简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息
          简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息
          简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息
          简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息
        </p>
      </div>
      <div class="row">
        <p class="col-md-12">添加时间：2016-09-30</p>
      </div>
      <div class="row" style="margin-bottom: 10px;">
        <div class="col-md-1">
          <p style="margin-bottom: 0px;">歌曲：</p>
          <p style="margin-bottom: 0px; color: gray;">(55)</p>
        </div>
        <div class="col-md-11">
          <span>歌曲名</span>
          <span>歌曲名</span>
          <span>歌曲名</span>
          <span>歌曲名</span>
          <span>歌曲名</span>
          <span>歌曲名</span>
        </div>
      </div >
      <div class="row" style="margin-bottom: 10px;">
        <div class="col-md-1">
          <p style="margin-bottom: 0px;">专辑：</p>
          <p style="margin-bottom: 0px; color: gray;">(12)</p>
        </div>
        <div class="col-md-11">
          <div class="my-image-box">
            <img src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg"  width="150px" height="150px" class="img-responsive img-thumbnail"/>
            <p>专辑名</p>
          </div>
          <div class="my-image-box">
            <img src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg"  width="150px" height="150px" class="img-responsive img-thumbnail"/>
            <p>专辑名</p>
          </div>
          <div class="my-image-box">
            <img src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg"  width="150px" height="150px" class="img-responsive img-thumbnail"/>
            <p>专辑名</p>
          </div>
        </div>
      </div>
      <div class="row" style="margin-bottom: 10px;">
        <div class="col-md-1">
          <p style="margin-bottom: 0px;">MV：</p>
          <p style="margin-bottom: 0px; color: gray;">(12)</p>
        </div>
        <div class="col-md-11">
          <div class="my-image-box">
            <img src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg"  width="150px" height="150px" class="img-responsive img-thumbnail"/>
            <p>MV名</p>
          </div>
          <div class="my-image-box">
            <img src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg"  width="150px" height="150px" class="img-responsive img-thumbnail"/>
            <p>MV名</p>
          </div>
          <div class="my-image-box">
            <img src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg"  width="150px" height="150px" class="img-responsive img-thumbnail"/>
            <p>MV名</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'singerDetail'
  }
</script>

<style>
  .my-main-container{
    margin: 0 auto;
    background: #c4e3f3;
  }
  .my-singer-info p{
    margin-top: 15px;
  }

  .my-image-box{
    display: inline-block;
    text-align: center;
  }
</style>
