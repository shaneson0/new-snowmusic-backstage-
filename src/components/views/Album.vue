<template>
  <!-- Main content -->
  <div class="row center-block">
    <pagenation :hasimage1="hasimage" :keys1="keys" :values1="values"></pagenation>
    <div class="col-md-12">
      <!--<router-link to="/updateSong"><i class="fa fa-fw fa-edit"></i></router-link>-->
      <router-link to="/updateAlbum">
        <button type="submit" class="btn btn-primary pull-right">增加专辑</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  import Pagenation from './pagination.vue'
  import * as API from '../../api/index.js'

  export default {
    name: 'Album',
    components: {Pagenation},
    data: function () {
      return {
        hasimage: 1,
        keys: ['名字', '歌手', '歌曲数', '发布时间', '新专辑', '操作'],
        values: []
      }
    },
    created: function () {
      var self = this
      const data = 'limit=10'
      API.request('post', '/admin/album/list', data).then(function (res) {
        const Data = res.data.data
        self.AllNum1 = Data.all
        self.finish1 = Data.finish
        const alblums = Data.albums
        console.log(Data)
        const TempArray = []
        for (var i = 0; i < alblums.length; i++) {
          const Album = alblums[i]
          const temp = {
            image: alblums[i].image,
            lists: [Album.albumname, Album.singername, Album.songsnum, Album.create_ts, '是']
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

