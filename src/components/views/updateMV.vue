<template>
  <section class="content">
    <div class="box box-default">
      <div class="box-header with-border">
        <h3 class="box-title">新增歌曲</h3>
      </div>
      <div class="box-body">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>歌名</label>
              <input class="form-control input-sm" type="text" placeholder="Type a comment" v-model="Songname"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>单价</label>
              <select class="form-control select2 select2-hidden-accessible" v-model="price">
                <option v-for="option in price_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label>歌手</label><span class="badge bg-green" v-show="is_singer_exit==1">存在</span><span class="badge bg-red" v-show="is_singer_exit==0">不存在</span>
              <input class="form-control input-sm" type="text" placeholder="输入歌手名字" v-model="SingerName"/>
            </div>

            <div class="form-group">
              <label>专辑名</label>
              <select class="form-control select2 select2-hidden-accessible" v-model="albumId" >
                <option v-for="option in Album_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>

          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>类别</label>
              <select class="form-control select2 select2-hidden-accessible" v-model="Type">
                <option v-for="option in Type_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>语系</label>
              <select class="form-control select2 select2-hidden-accessible" v-model="Lang">
                <option v-for="option in Lang_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>


            </div>
            <div class="form-group">
              <label>歌曲</label><small>（需要按照歌名上传之后才可以选择）</small>
              <select class="form-control select2 select2-hidden-accessible" v-model="SongPath">
                <option v-for="option in Song_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>

            <!--搜索下拉框-->
            <!--<div class="form-group">-->
            <!--<label>歌手</label>-->
            <!--<select id="bs3Select" class="selectpicker form-control" data-live-search="true" v-model="SingerId">-->

            <!--<option v-for="option in Sing_options" v-bind:value="option.value">-->
            <!--{{ option.text }}-->
            <!--</option>-->

            <!--</select>-->
            <!--</div>-->

            <!-- /.form-group -->
          </div>

        </div>
        <div class="row">
          <div class="col-md-12">

            <div class="form-group">
              <label>歌词</label><small>（需要按照歌名上传之后才可以选择）</small>
              <select class="form-control select2 select2-hidden-accessible" v-model="Lyrics">
                <option v-for="option in Lyrics_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label>歌曲封面</label><small>（需要按照歌名上传之后才可以选择）</small>
              <select class="form-control select2 select2-hidden-accessible" v-model="SongImage">
                <!--Image_options-->
                <option v-for="option in Image_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="box-footer">
        <button type="button" class="btn btn-success pull-right" style="margin-right: 5px" v-on:click="AddSong()">上传</button>
        <button type="button" class="btn btn-primary pull-right" style="margin-right: 5px" v-on:click="UpdateSong()" >更新</button>


      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'mv'
  }
</script>
