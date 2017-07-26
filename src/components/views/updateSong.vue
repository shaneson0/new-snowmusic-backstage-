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
  import 'jquery'
  import * as API from '../../api/index'

  export default {
    name: 'song',
    props: {
    },
    created: function () {
    },
    mounted: function () {
      this.editid = this.$route.query.editid
    },
    data: function () {
      return {
        editid: 0,
        is_singer_exit: -1,
//          Songname
        Songname: '',
//          price
        price: 0,
        price_options: [
          { text: '0', value: 0 },
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '5', value: 5 },
          { text: '10', value: 10 },
          { text: '30', value: 30 }
        ],
//         类别
        Type: 0,
        Type_options: [
          { text: '藏族舞曲', value: '藏族舞曲' },
          { text: '藏族弹唱', value: '藏族弹唱' },
          { text: '经典歌曲', value: '经典歌曲' },
          { text: '百度热歌', value: '百度热歌' },
          { text: '流行歌曲', value: '流行歌曲' },
          { text: '歌手合辑', value: '歌手合辑' },
          { text: '宗教歌曲', value: '宗教歌曲' },
          { text: '印度歌曲', value: '印度歌曲' }
        ],
//        Album
        albumId: 0,
        Album_options: [
          { text: '未知', value: 0 }
        ],
//        语系
        Lang: 0,
        Lang_options: [
          { text: '汉', value: 0 },
          { text: '藏', value: 1 },
          { text: '维吾尔语', value: 3 },
          { text: '其他', value: 100 }
        ],
        Dateinput: '',
//        歌手
        SingerId: 0,
        SingerName: '',
        Sing_options: [
          { text: '歌手1', value: 0 },
          { text: '歌手2', value: 1 },
          { text: '歌手3', value: 2 },
          { text: '歌手4', value: 3 }
        ],
//        歌曲
        SongPath: '',
        Song_options: [
          { text: '歌曲1', value: 0 },
          { text: '歌曲2', value: 1 },
          { text: '歌曲3', value: 2 },
          { text: '歌曲4', value: 3 }
        ],
        Lyrics: '',
        Lyrics_options: [
          { text: '歌词1', value: 0 },
          { text: '歌词2', value: 1 },
          { text: '歌词3', value: 2 },
          { text: '歌词4', value: 3 },
          { text: '歌词5', value: 4 }
        ],
        SongImage: '',
        Image_options: [
          { text: '图片1', value: 0 },
          { text: '图片2', value: 1 },
          { text: '图片3', value: 2 },
          { text: '图片4', value: 3 },
          { text: '图片5', value: 4 }
        ]
      }
    },
    methods: {
      AddSong: function () {
        alert('AddSong')
        const self = this
        var data = `Songname=${this.Songname}&price=${this.price}&songType=${this.Type}&Albumid=${this.AlbumId}&lang=${this.Lang}&SingerId=${this.SingerId}&SongPathKey=${this.SongPath}&LyricsKey=${this.Lyrics}&SongImageKey=${this.SongImage}`
        API.request('post', '/admin/songs/add2', data).then(function (res) {
          console.log(res)
          alert('添加歌曲成功')
          self.$router.push('/Songs')
        })
      },
      UpdateSong: function () {
        alert('update Song')
        const self = this
        var data = `Songid=${this.editid}&Songname=${this.Songname}&price=${this.price}&songType=${this.Type}&Albumid=${this.AlbumId}&lang=${this.Lang}&SingerId=${this.SingerId}&SongPathKey=${this.SongPath}&LyricsKey=${this.Lyrics}&SongImageKey=${this.SongImage}`
        console.log('update song')
        console.log(data)
        API.request('post', '/admin/songs/update2', data).then(function (res) {
          console.log(res)
          alert('修改歌曲成功')
          self.$router.push('/Songs')
        })
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
              let Temp = { text: albumslist[i].albumname, value: albumslist[i].albumid }
              TempArray.push(Temp)
            }
            TempArray.push({ text: '未知', value: 0 })
            self.Album_options = TempArray
          })
        } else {
          this.Album_options = [{ text: '未知', value: 0 }]
        }
      },
      SingerId: function (val, oldval) {
        console.log('SingerId')
        console.log(oldval)
        console.log(val)
      },
      albumId: function (val, oldval) {
        console.log('albumId')
        console.log(oldval)
        console.log(val)
      },
      editid: function (val, oldval) {
        console.log('watch editid')
        console.log(oldval)
        console.log(val)
        if (val > 0) {
          var data = `songid=${val}`
          const self = this
          API.request('post', '/admin/songs/info', data).then(function (res) {
            console.log(res)
            const Data = res.data.data.song
            const albumslist = res.data.data.albums
            const TempArray = []
            for (var i = 0; i < albumslist.length; i++) {
              let Temp = { text: albumslist[i].albumname, value: albumslist[i].albumid }
              TempArray.push(Temp)
            }
            TempArray.push({ text: '未知', value: 0 })
            self.Album_options = TempArray
            self.SingerName = Data.singername
            self.SingerId = Data.singerid
            self.Songname = Data.songname
            self.albumId = Data.albumid
            self.price = Data.price
            self.Type = Data.type
            self.Lang = Data.lang
          })
        }
      },
      Songname: {
        handler: function (val, oldval) {
          let data = 'table=uploadlib&keyname=filename&queryfiles=mimeType,filename,object,filekey&keyvalue='
          data = data + val
          console.log(data)
          const self = this
          const LrcArray = []
          const ImageArray = []
          const SongArray = []

          API.request('post', '/admin/vague/query', data).then(function (res) {
            const Data = res.data.data.res
            for (var i = 0; i < Data.length; i++) {
              const Temp = Data[i]
              const filename = Temp.filename
              const filetype = filename.substring(filename.length - 3)
              if (filetype === 'lrc') {
                LrcArray.push({ text: Temp.filename, value: Temp.filekey })
              } else if (filetype === 'jpg' || filetype === 'png') {
                ImageArray.push({ text: Temp.filename, value: Temp.filekey })
              } else if (filetype === 'mp3') {
                SongArray.push({ text: Temp.filename, value: Temp.filekey })
              } else {
              }
            }
          })
          self.Song_options = SongArray
          self.Image_options = ImageArray
          self.Lyrics_options = LrcArray
//          https://adminlte.io/themes/AdminLTE/plugins/input-mask/jquery.inputmask.js
        }
      }
    }
  }

</script>
