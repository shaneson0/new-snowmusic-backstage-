<template>
  <div id="singerDetail" class="container">
    <p>这是MV详情页</p>
    <div class="my-content container">
      <div class="row">
        <div class="col-md-6">
          <h3>排行榜</h3>
        </div>
        <div class="col-md-4" style="position: relative; margin-top: 20px">
          <button type="button" class="btn-info pull-right">添加歌曲</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>排行榜/精选榜</p>
        </div>
      </div>
    </div>
    <div class="my-main-container">
      <div class="input-group input-group-sm" style="width: 80%; margin-bottom: 10px;">
        <input type="text" name="table_search" class="form-control" placeholder="Search"/>
        <div class="input-group-btn">
          <button type="submit" class="btn">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      <table class="table table-hover text-center table-responsive" style="width: 80%;">
        <thead>
        <tr class="success">
          <th>选择</th>
          <th>歌名</th>
          <th>歌手</th>
          <th>专辑</th>
          <th>下载数</th>
          <th>播放数</th>
          <th>购买数</th>
          <th>喜欢数</th>
          <th>添加时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="song in songInfo">
          <td><input type="checkbox" :value="song.id" v-model="checkboxModel"/></td>
          <td>{{song.songName}}</td>
          <td>{{song.singerName}}</td>
          <td>{{song.albumName}}</td>
          <td>{{song.downloadNum}}</td>
          <td>{{song.playNum}}万</td>
          <td>{{song.sellNum}}</td>
          <td>{{song.loveNum}}</td>
          <td>{{song.addTime}}</td>
          <td>
            <i class="fa fa-eye"></i>
            <i class="fa fa-pencil-square-o"></i>
            <i class="fa fa-trash-o"></i>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-md-3">
          <input id="selectedAll" type="checkbox" class="btn-warning" style="margin-top:25px" v-model="checked"
                 @click="checkedAll">
          <label for="selectedAll">全选</label>
          <button class="btn-danger" style="margin-top:25px">删除</button>
          <button class="btn-info" style="margin-top:25px">添加歌曲</button>
        </div>
        <div class="col-md-7">
          <ul class="pagination pull-right">
            <!--<ul >-->
            <li><a>&laquo;</a></li>
            <li v-for="page1 in pagearray">
              <!--{{page1}}-->
              <a>{{page1}}</a>
            </li>
            <li><a>&raquo;</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rank',
    data () {
      return {
        pagearray: [1, 2, 3, 4, 5],
        songInfo: [{
          id: 1,
          songName: 'Haha',
          singerName: 'John',
          albumName: 'oh',
          downloadNum: 123,
          playNum: 12,
          sellNum: 12,
          loveNum: 11,
          addTime: '2016-09-23'
        }, {
          id: 2,
          songName: 'Hello',
          singerName: 'Tom',
          albumName: 'Lady',
          downloadNum: 123,
          playNum: 50,
          sellNum: 12,
          loveNum: 50,
          addTime: '2016-08-23'
        }, {
          id: 3,
          songName: 'Day',
          singerName: 'Anna',
          albumName: 'PaPa',
          downloadNum: 1230,
          playNum: 12,
          sellNum: 120,
          loveNum: 11,
          addTime: '2016-09-20'
        }, {
          id: 4,
          songName: 'What',
          singerName: 'Sky',
          albumName: 'Sky',
          downloadNum: 1223,
          playNum: 12,
          sellNum: 12,
          loveNum: 11,
          addTime: '2015-09-23'
        }],
        checkboxModel: [],
        checked: false
      }
    },
    methods: {
      checkedAll: function () {
        var _this = this
        if (this.checked) { // 实现全选
          this.checkboxModel = []
          this.songInfo.forEach(function (item) {
            _this.checkboxModel.push(item.id)
          })
        } else { // 实现反选
          this.checkboxModel = []
        }
      }
    },
    watch: {
      'checkboxModel': {
        handler: function (val, oldval) {
          if (this.checkboxModel.length === this.songInfo.length) {
            this.checked = true
          } else {
            this.checked = false
          }
        },
        deep: true
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
