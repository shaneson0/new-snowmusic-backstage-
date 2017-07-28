<template>
  <section class="content">
    <div class="box box-default">
      <div class="box-header with-border">
        <h3 class="box-title">新增歌手</h3>
      </div>
      <div class="box-body">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>名字 </label>
              <input class="form-control input-sm" type="text" placeholder="必填" v-model="singerName"/>
            </div>
          </div>
        </div>
        <div class="row">
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
          <div class="col-md-6">
            <div class="form-group">
              <label>类型</label>
              <select class="form-control select2 select2-hidden-accessible" v-model="Sex">
                <option v-for="option in Sex_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>歌手图片</label>
              <small>（需要按照歌手名上传之后才可以选择）</small>
              <select class="form-control select2 select2-hidden-accessible" v-model="singerImage">
                <option v-for="option in singerImages_options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
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
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>歌手简介</label>
              <textarea rows="5" v-model="singerDesc" v-text="singerDesc" placeholder="必填"
                        class="form-control"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="box-footer">
        <button type="button" class="btn btn-success pull-right" style="margin-right: 5px" v-on:click="AddSinger()">上传
        </button>
        <button type="button" class="btn btn-primary pull-right" style="margin-right: 5px" v-on:click="UpdateSinger()">
          更新
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import 'jquery'
  import * as API from '../../api/index'

  export default {
    name: 'updateSinger',
    data () {
      return {
//        歌手id
        singerid: 0,
        //      歌手名
        singerName: '',
//        类别
        Type: 0,
//        类别选项
        Type_options: [
          {value: 0, text: '未知'},
          {value: 1, text: '歌手'},
          {value: 2, text: '音乐家'}
        ],
        //        语系
        Lang: 0,
        Lang_options: [
          {text: '汉', value: 0},
          {text: '藏', value: 1},
          {text: '维吾尔语', value: 2},
          {text: '其他', value: 100}
        ],
//        类型
        Sex: 0,
        Sex_options: [
          {text: '男', value: 0},
          {text: '女', value: 1},
          {text: '组合', value: 2}
        ],
//        歌手图片
        singerImage: 0,
        singerImages_options: [
          {text: '图片1', value: 1},
          {text: '图片2', value: 2},
          {text: '图片3', value: 3},
          {text: '图片4', value: 4}
        ],
//        歌手简介
        singerDesc: ''
      }
    },
    methods: {
      AddSinger: function () {
        alert('测试添加歌手')
      },
      UpdateSinger: function () {
        alert('测试更新歌手')
      }
    },
    created: function () {
      this.singerid = this.$route.query.editid
      if (this.singerid > 0) {
        let data = `singerid=${this.singerid}`
        const self = this
        API.request('post', '/admin/singer/info', data).then(function (res) {
          const Data = res.data.data.info.singer
          console.log('以下是我要的数据')
          console.log(Data)
          console.log('以上我是的数据')
          self.singerName = Data.singername
          if (Data.type === '歌手') {
            self.Type = 1
          } else if (Data.type === '音乐家') {
            self.Type = 2
          } else {
            self.Type = 0
          }
          if (Data.sex === '男') {
            self.Sex = 0
          } else if (Data.sex === '女') {
            self.Sex = 1
          } else if (Data.sex === '组合') {
            self.Sex = 2
          }
          if (Data.lang === '汉') {
            self.Lang = 0
          } else if (Data.lang === '藏') {
            self.Lang = 1
          } else if (Data.lang === '维吾尔') {
            self.Lang = 2
          } else {
            self.Lang = 100
          }
          self.singerDesc = Data.detail
        })
      }
    },
    watch: {
      singerName: {
        handler: function (val, oldval) {
          if (val !== '') {
            const self = this
            let data = 'table=uploadlib&keyname=filename&queryfiles=mimeType,filename,object,filekey&keyvalue='
            data = data + val
            API.request('post', '/admin/vague/query', data).then(function (res) {
              const imagelist = res.data.data.res
              console.log('0000000000000000000000000000000')
              console.log(res.data.data.res)
              const TempArray = []
              for (var i = 0; i < imagelist.length; i++) {
                let Temp = {text: imagelist[i].filename, value: imagelist[i].filekey}
                self.singerImage = Temp.value
                TempArray.push(Temp)
              }
              TempArray.push({text: '未知', value: 0})
              self.singerImages_options = TempArray
            })
          } else {
            this.singerImages_options = [{text: '未知', value: 0}]
          }
        }
      }
    }
  }
</script>
