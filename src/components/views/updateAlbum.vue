<template>
  <section class="content">
    <div class="box box-default">
      <div class="box-header with-border">
        <h3 class="box-title">新增专辑</h3>
      </div>
      <div class="box-body">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>专辑名</label>
              <input type="text" placeholder="必填" class="form-control input-sm"/>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>歌手名</label>
              <input type="text" placeholder="必填" class="form-control input-sm"/>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>发布时间</label>
              <input type="text" placeholder="必填" class="form-control input-sm"/>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>歌曲数目</label>
              <input type="text" placeholder="必填" class="form-control input-sm"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>专辑封面</label>
              <small>（需要按照专辑名上传之后才可以选择<strong style="color: red">提示:上传时此项必选文件</strong>)</small>
              <select class="form-control select2 select2-hidden-accessible" v-model="AlbumImage">
                <!--Image_options-->
                <option v-for="option in AlbumImage_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>专辑详情</label>
              <textarea class="form-control input-sm" placeholder="必填" rows="5"></textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>添加歌曲到专辑</label>
              <div class="list-group" style="height: 200px; overflow: auto;">
                <div class="list-group-item list-group-item-text">
                  <input type="checkbox" :value="testv" v-model="test" @click="show()"/>歌曲1
                </div>
                <div class="list-group-item list-group-item-text">
                  <input type="checkbox" :value="testv" v-model="test" @click="show()"/>歌曲2
                </div>
                <div class="list-group-item list-group-item-text">
                  <input type="checkbox" :value="testv" v-model="test" @click="show()"/>歌曲3
                </div>
                <div class="list-group-item list-group-item-text">
                  <input type="checkbox" :value="testv" v-model="test" @click="show()"/>歌曲1
                </div>
                <div class="list-group-item list-group-item-text">
                  <input type="checkbox" :value="testv" v-model="test" @click="show()"/>歌曲2
                </div>
                <div class="list-group-item list-group-item-text">
                  <input type="checkbox" :value="testv" v-model="test" @click="show()"/>歌曲3
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="box-footer">
        <button type="button" class="btn btn-success pull-right" style="margin-right: 5px" v-on:click="AddMV()">上传
        </button>
        <button type="button" class="btn btn-primary pull-right" style="margin-right: 5px" v-on:click="UpdateMV()">
          更新
        </button>


      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'updateAlbum',
    data () {
      return {
        // 封面
        AlbumImage: '',
        AlbumImage_options: [
          {text: '图片1', value: 0},
          {text: '图片2', value: 1},
          {text: '图片3', value: 2},
          {text: '图片4', value: 3},
          {text: '图片5', value: 4}
        ],
        test: [],
        testv: 'test songname'
      }
    },
    methods: {
      show: function () {
        alert(this.testv)
      }
    }
  }
</script>
