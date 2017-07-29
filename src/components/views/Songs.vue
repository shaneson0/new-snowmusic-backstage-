<template>
  <!-- Main content -->

  <div class="col-md-12">


    <div class="row">
      <pagenation :hasimage1="hasimage" :keys1="keys" :values1="values" :DetailRoute="detailRoute"
                  :EditRoute='editRoute' v-on:searchfunction="searchfunction1"
                  v-on:changePage="changepage1"></pagenation>
      <div class="col-md-12">
        <!--<router-link to="/updateSong"><i class="fa fa-fw fa-edit"></i></router-link>-->
        <router-link to="/updateSong">
          <button type="submit" class="btn btn-primary pull-right">增加歌曲</button>
        </router-link>
      </div>
    </div>

  </div>


  <!--<button-counter v-on:increment="incrementTotal"></button-counter>-->


</template>

<script>
  import $ from 'jquery'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  import * as API from '../../api/index.js'
  import Pagenation from './pagination.vue'

  export default {
    name: 'Songs',
    components: {Pagenation},
    data: function () {
      return {
        hasimage: 1,
        keys: ['名字', '类型', '语系', '歌手', '专辑', '品质', '单价', '操作'],
        values: [],
        editRoute: '/updateSong',
        detailRoute: '/songDetail'
      }
    },
    created: function () {
      this.getSongsList(10, '', 0)
    },
    mounted () {
      this.$nextTick(() => {
        $('#example1').DataTable()
      })
    },
    methods: {
      changepage1: function (from) {
        console.log(from)
        this.getSongsList(10, '', from)
      },
      searchfunction1: function (Msg) {
        this.getSongsList(10, Msg, 0)
      },
      getSongsList: function (limit, vague, from) {
        let data = `table=songslib&keyname=songname&queryfiles=songname,lyrics,type,lang,singername,albumname,price,image,songid&from=${from}&limit=${limit}&keyvalue=${vague}`
        console.log(data)
        var self = this
        API.request('post', '/admin/vague/query', data).then(function (res) {
          console.log(res)
          const Data = res.data.data
//          self.AllNum1 = Data.all
//          self.finish1 = Data.finish
          const Songs = Data.res
          const TempArray = []
          for (var i = 0; i < Songs.length; i++) {
            const Song = Songs[i]
            const temp = {
              image: Song.image,
              id: Song.songid,
              lists: [Song.songname, Song.type, Song.lang, Song.singername, Song.albumname, Song.price]
            }
            TempArray.push(temp)
          }
          self.values = TempArray
        })
      }
    }
  }
</script>
<style>
  /* Using the bootstrap style, but overriding the font to not draw in
     the Glyphicons Halflings font as an additional requirement for sorting icons.

     An alternative to the solution active below is to use the jquery style
     which uses images, but the color on the images does not match adminlte.

  @import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
  */
  @import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

  table.dataTable thead .sorting:after,
  table.dataTable thead .sorting_asc:after,
  table.dataTable thead .sorting_desc:after {
    font-family: 'FontAwesome';
  }

  table.dataTable thead .sorting:after {
    content: "\f0dc";
  }

  table.dataTable thead .sorting_asc:after {
    content: "\f0dd";
  }

  table.dataTable thead .sorting_desc:after {
    content: "\f0de";
  }
</style>

