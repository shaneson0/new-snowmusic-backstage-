<template>
  <div id="singerDetail" class="container">
    <p>这是{{rankName}}页面</p>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>{{rankName}}</h3>
        </div>
        <div class="col-md-4" style="position: relative; margin-top: 20px">
          <button type="button" class="btn btn-info pull-right">添加歌曲</button>
        </div>
      </div>
    </div>
    <div class="box-body">
      <div class="input-group input-group-sm" style="width: 80%; margin-bottom: 10px;">
        <input type="text" name="table_search" class="form-control" placeholder="Search"/>
        <div class="input-group-btn">
          <button type="submit" class="btn btn-info" v-on:click="searchfunction">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      <table class="table table-striped table-hover text-center table-responsive" style="width: 80%;">
        <thead>
        <tr>
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
        <tr v-for="(song,index) in SongsRankInfo" :key="index">
          <td><input type="checkbox" :value="song.songid" v-model="checkboxModel"/></td>
          <td>{{song.songname}}</td>
          <td>{{song.singername}}</td>
          <td>{{song.albumname}}</td>
          <td>{{song.download}}</td>
          <td>{{song.play}}万</td>
          <td>{{song.buy}}</td>
          <td>{{song.likenum}}</td>
          <td>{{song.create_ts}}</td>
          <td>
            <router-link :to="{ path: 'songDetail', query: { editid: song.songid }}"><i class="fa fa-fw fa-eye"></i>
            </router-link>
            <router-link :to="{ path: 'updateSong' , query: { editid: song.songid } }"><i class="fa fa-fw fa-edit"></i>
            </router-link>
            <i class="fa fa-trash-o" :id="song.songid" ref="select" @click.stop="deleteSong(index)"></i>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-md-3">
          <input id="selectedAll" type="checkbox" class="btn-warning" style="margin-top:25px" v-model="checked"
                 @click="checkedAll">
          <label for="selectedAll">全选</label>
          <button class="btn btn-danger" @click="deleteAll()">删除</button>
          <button class="btn btn-info">添加歌曲</button>
        </div>
        <div class="col-md-7">
          <ul class="pagination pull-right">
            <!--<ul >-->
            <li><a v-on:click="changePage(prepage)">&laquo;</a></li>
            <li v-for="page1 in pagearray">
              <!--{{page1}}-->
              <a v-on:click="changePage(page1)">{{page1}}</a>
            </li>
            <li><a v-on:click="changePage(nextpage)">&raquo;</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rank',
    props: {
      SongsRankInfo: Array,
      rankName: ''
    },
    data () {
      return {
        searchvalue: '',
        pagesize: 10,
        prepage: 1,
        page: 1,
        nextpage: 6,
        pagearray: [1, 2, 3, 4, 5],
        checkboxModel: [],
        checked: false
      }
    },
    methods: {
      deleteSong: function (index) {
        console.log('==========================================')
        console.log(this.$refs['select'][index].id)
      },
      deleteAll: function () {
        alert(this.checkboxModel)
      },
      checkedAll: function () {
        var _this = this
        if (this.checked) { // 实现全选
          this.checkboxModel = []
          this.SongsRankInfo.forEach(function (item) {
            _this.checkboxModel.push(item.songid)
          })
        } else { // 实现反选
          this.checkboxModel = []
        }
      },
      changePage: function (index) {
        console.log('change page')
        this.page = index
        console.log(this.page)
        this.$emit('changePage', (this.page - 1) * this.pagesize)
      },
      searchfunction: function () {
        this.page = 1
        this.$emit('searchfunction', this.searchvalue)
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
      },
      page: {
        handler: function (val, oldval) {
          if (val === 1) {
            this.page = this.prepage = val
          } else {
            this.prepage = val - 1
            this.page = val
          }
          this.nextpage = val + 1
          let TempArray = []
          for (var i = val; i < val + 5; i++) {
            TempArray.push(i)
          }
          this.pagearray = TempArray
        }
      }
    }
  }
</script>

