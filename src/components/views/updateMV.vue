<template>
  <section class="content">
    <div class="box box-default">
      <div class="box-header with-border">
        <h3 class="box-title">新增MV</h3>
      </div>
      <div class="box-body">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>MV名</label>
              <input class="form-control input-sm" type="text" placeholder="Type a comment" v-model="MVName"/>
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
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>歌手</label><span class="badge bg-green" v-show="is_singer_exit==1">存在</span><span
              class="badge bg-red" v-show="is_singer_exit==0">不存在</span>
              <input class="form-control input-sm" type="text" placeholder="输入歌手名字" v-model="SingerName"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>专辑名</label>
              <select class="form-control select2 select2-hidden-accessible" v-model="albumId">
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
          </div>
        </div>
        <!--<div class="col-md-6">-->
        <!--<div class="form-group">-->
        <!--<label>歌曲</label><small>（需要按照歌名上传之后才可以选择）</small>-->
        <!--<select class="form-control select2 select2-hidden-accessible" v-model="SongPath">-->
        <!--<option v-for="option in Song_options" v-bind:value="option.value">-->
        <!--{{ option.text }}-->
        <!--</option>-->
        <!--</select>-->
        <!--</div>-->

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
        <!--</div>-->

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>文件</label>
              <small>（需要按照MV名上传之后才可以选择<strong style="color: red">提示:上传此项必选文件</strong>）</small>
              <select class="form-control select2 select2-hidden-accessible" v-model="MVPath">
                <option v-for="option in MVs_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>封面</label>
              <small>（需要按照MV名上传之后才可以选择<strong style="color: red">提示:上传此项必选文件</strong>)</small>
              <select class="form-control select2 select2-hidden-accessible" v-model="SongImage">
                <!--Image_options-->
                <option v-for="option in Image_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>语系</label>
              <select class="form-control select2 select2-hidden-accessible" v-model="Lang">
                <option v-for="option in Lang_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>发布时间</label>
              <small>(日期格式：yyyy-mm-dd)</small>
              <input class="form-control input-sm" type="text" v-model="publish_ts"/>
              <!--<input class="form-control input-sm" type="date" v-model="publish_ts"/>-->
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
  </section>
</template>

<script>
  import 'jquery'
  import * as API from '../../api/index'

  export default {
    name: 'mv',
    created: function () {
      if (this.$route.query.singer) {
        this.SingerName = this.$route.query.singer
      }
      this.mvid = this.$route.query.editid
      if (this.mvid > 0) {
        let data = `mvid=${this.mvid}`
        const self = this
        API.request('post', '/admin/mv/info', data).then(function (res) {
          console.log('mvinfommmmmmmmmmmmmmmmmmmmmmmmm')
          console.log(res)
          console.log('以上我是的数据')
          const Data = res.data.data.mv
          const albumslist = res.data.data.albums
          const TempArray = []
          for (var i = 0; i < albumslist.length; i++) {
            let Temp = {text: albumslist[i].albumname, value: albumslist[i].albumid}
            TempArray.push(Temp)
          }
          TempArray.push({text: '未知', value: 0})
          self.Album_options = TempArray
          self.MVName = Data.mvname
          self.SingerName = Data.singername
          self.AlbumName = Data.albumname
          self.albumId = Data.albumid
          self.Lang = Data.lang
          self.Type = Data.type
          self.publish_ts = Data.publish_ts
        })
      }
    },
    methods: {
      AddMV: function () {
        const self = this
        console.log('测试：添加mv' + self.publish_ts)
        var data = `publishTime=${this.publish_ts}&mvname=${this.MVName}&Mvfilekey=${this.MVPath}&imagekey=${this.SongImage}&singerid=${this.SingerId}&albumid=${this.albumId}&price=${this.price}&lang=${this.Lang}`
        console.log(data)
        API.request('post', '/admin/mv/add2', data).then(function (res) {
          console.log(res)
          console.log('添加mv成功')
          self.$router.push('/MV')
        })
      },
      UpdateMV: function () {
        const self = this
        alert('测试，更新mv' + self.publish_ts)
        if (self.MVPath === undefined) {
          alert('modified MVPath')
          self.MVPath = ''
        }
        if (self.SongImage === undefined) {
          alert('modified MVPath')
          self.SongImage = ''
        }
        var data = `publishTime=${this.publish_ts}&mvid=${this.mvid}&mvname=${this.MVName}&Mvfilekey=${this.MVPath}&imagekey=${this.SongImage}&singerid=${this.SingerId}&albumid=${this.albumId}&price=${this.price}&lang=${this.Lang}`
        API.request('post', '/admin/mv/update2', data).then(function (res) {
          console.log(res)
          alert('修改mv成功')
          self.$router.push('/MV')
        })
      }
    },
    data () {
      return {
        // MVid
        mvid: 0,
        // 歌手是否存在的标志
        is_singer_exit: -1,
        //          price
        price: 0,
        price_options: [
          {text: '0', value: 0},
          {text: '1', value: 1},
          {text: '2', value: 2},
          {text: '5', value: 5},
          {text: '10', value: 10},
          {text: '30', value: 30}
        ],
//        发布时间
        publish_ts: '',
        // MV名称
        MVName: '',
        // 歌手名称
        SingerName: '',
        // 歌手id
        SingerId: '',
        // 专辑名
        AlbumName: '',
        //        Album
        albumId: 0,
        Album_options: [
          {text: '未知', value: 0}
        ],
        //        语系
        Lang: 0,
        Lang_options: [
          {text: '汉', value: 0},
          {text: '藏', value: 1},
          {text: '维吾尔语', value: 3},
          {text: '其他', value: 100}
        ],
        //         类别
        Type: 0,
        Type_options: [
          {text: '未知', value: ''},
          {text: '藏族舞曲', value: '藏族舞曲'},
          {text: '藏族弹唱', value: '藏族弹唱'},
          {text: '经典歌曲', value: '经典歌曲'},
          {text: '百度热歌', value: '百度热歌'},
          {text: '流行歌曲', value: '流行歌曲'},
          {text: '歌手合辑', value: '歌手合辑'},
          {text: '宗教歌曲', value: '宗教歌曲'},
          {text: '印度歌曲', value: '印度歌曲'}
        ],
        // 封面
        SongImage: '',
        Image_options: [
          {text: '图片1', value: 0},
          {text: '图片2', value: 1},
          {text: '图片3', value: 2},
          {text: '图片4', value: 3},
          {text: '图片5', value: 4}
        ],
        // MV文件
        MVPath: '',
        MVs_options: [
          {text: 'MV1', value: 0},
          {text: 'MV2', value: 1},
          {text: 'MV3', value: 2},
          {text: 'MV4', value: 3}
        ]
      }
    },
    watch: {
      SingerName: {
        handler: function (val, oldval) {
          const self = this
          if (val === '') {
            self.is_singer_exit = -1
          } else {
            console.log('Change SingerName')
            console.log(val)
            let data = 'table=singerlib&keyname=singername&queryfiles=singerid,singername&keyvalue='
            data = data + val
            API.request('post', '/admin/clear/query', data).then(function (res) {
              console.log('change singername')
              const TempData = res.data.data.res
              if (TempData.length > 0) {
                self.is_singer_exit = 1
                const TempSinger = TempData[0]
                self.SingerId = TempSinger.singerid
              } else {
                self.is_singer_exit = 0
              }
            })
          }
        }
      },
      is_singer_exit: function (val, oldval) {
        if (val === 1) {
          const self = this
          var data = `table=albumlib&keyname=singerid&queryfiles=albumid,albumname&keyvalue=${this.SingerId}`
          API.request('post', '/admin/clear/query', data).then(function (res) {
            const albumslist = res.data.data.res
            const TempArray = []
            for (var i = 0; i < albumslist.length; i++) {
              let Temp = {text: albumslist[i].albumname, value: albumslist[i].albumid}
              TempArray.push(Temp)
            }
            TempArray.push({text: '未知', value: 0})
            self.Album_options = TempArray
          })
        } else {
          this.Album_options = [{text: '未知', value: 0}]
        }
      },
      MVName: {
        handler: function (val, oldval) {
          let data = 'table=uploadlib&keyname=filename&queryfiles=mimeType,filename,object,filekey&keyvalue='
          data = data + val
          const self = this
          const ImageArray = []
          const MVArray = []
          API.request('post', '/admin/vague/query', data).then(function (res) {
            const Data = res.data.data.res
            console.log('------------------------------')
            console.log(Data)
            console.log('++++++++++++++++++++++++++++++')
            for (var i = 0; i < Data.length; i++) {
              const Temp = Data[i]
              const filename = Temp.filename
              const filetype = filename.substring(filename.length - 3)
              if (filetype === 'mp4' || filetype === 'avi' || filetype === 'wmp') {
                MVArray.push({text: Temp.filename, value: Temp.filekey})
              } else if (filetype === 'jpg' || filetype === 'png') {
                ImageArray.push({text: Temp.filename, value: Temp.filekey})
              } else {
              }
            }
          })
          self.Image_options = ImageArray
          self.MVs_options = MVArray
        }
      }
    }
  }
</script>
