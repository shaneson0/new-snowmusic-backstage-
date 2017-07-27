<template>
  <div id="singerDetail" class="container">
    <p>这是MV详情页</p>
    <div class="my-content container">
      <div class="row">
        <div class="col-md-6">
          <h3>MV名</h3>
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
          <p>MV/MV名</p>
        </div>
      </div>
    </div>
    <div class="my-main-container container">
      <div class="row">
        <div class="col-md-6 my-singer-info">
          <p>名字：MV名</p>
          <p>id  ：12345</p>
          <p>歌手：歌手名</p>
          <p>播放次数：1234</p>
          <p>喜欢人数：1234</p>
        </div>
        <div class="col-md-6">
          <img src="http://opn17q6vq.bkt.clouddn.com/17-7-3/63689744.jpg" class="img-responsive img-thumbnail"/>
        </div>
      </div>
      <div class="row" style="margin-top:10px;">
        <p class="col-md-1">详情：</p>
        <p class="col-md-9">简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息
          简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息
          简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息
          简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息
        </p>
      </div>
      <div class="row">
        <p class="col-md-12">发布时间：2016-09-30</p>
      </div>
      <div class="row">
        <p class="col-md-12">添加时间：2016-09-30</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MVDetail'
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

</style>
