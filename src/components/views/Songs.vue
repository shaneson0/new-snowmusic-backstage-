<template>
  <!-- Main content -->

  <div class="col-md-12">


    <div class="row">
      <pagenation :hasimage1="hasimage" :keys1="keys" :values1="values" :EditRoute='editRoute'></pagenation>
      <div class="col-md-12">
        <!--<router-link to="/updateSong"><i class="fa fa-fw fa-edit"></i></router-link>-->
        <router-link to="/updateSong"><button type="submit" class="btn btn-primary pull-right">增加歌曲</button></router-link>
      </div>
    </div>

  </div>





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
        editRoute: '/updateSong'
      }
    },
    created: function () {
      var self = this
      const data = 'limit=10'
      API.request('post', '/admin/songs/list', data).then(function (res) {
        const Data = res.data.data
        self.AllNum1 = Data.all
        self.finish1 = Data.finish
        const Songs = Data.songs
        const TempArray = []
        for (var i = 0; i < Songs.length; i++) {
          const Song = Songs[i]
          const temp = {
            image: Songs[i].image,
            id: Song.songid,
            lists: [Song.songname, Song.type, Song.lang, Song.singername, Song.albumname, Song.price]
          }
          TempArray[i] = temp
        }
        self.values = TempArray
      })
    },
    mounted () {
      this.$nextTick(() => {
        $('#example1').DataTable()
      })
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

