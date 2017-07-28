<template>
  <!-- Main content -->


  <div class="row center-block">

    <pagenation :hasimage1="hasimage" :keys1="keys" :EditRoute='editRoute' :DetailRoute="detailRoute"
                v-on:searchfunction="searchfunction1" v-on:changePage="changepage1" :values1="values"></pagenation>
    <div class="col-md-12">
      <!--<router-link to="/updateSong"><i class="fa fa-fw fa-edit"></i></router-link>-->
      <router-link to="/updateSinger">
        <button type="submit" class="btn btn-primary pull-right">增加歌手</button>
      </router-link>
    </div>
  </div>


</template>

<script>
  import $ from 'jquery'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  import * as API from '../../api/index'
  import Pagenation from './pagination.vue'

  export default {
    name: 'Singers',
    components: {Pagenation},
    data: function () {
      return {
        hasimage: 1,
        keys: ['名字', '类型', '语系', '歌曲数', '专辑数', 'MV数', '关注数', '操作'],
        values: [],
        editRoute: '/updateSinger',
        detailRoute: '/singerDetail'
      }
    },
    methods: {
      changepage1: function (from) {
        this.getSingerList(10, from, '')
      },
      searchfunction1: function (Msg) {
        this.getSingerList(10, 0, Msg)
      },
      getSingerList: function (limit, from, vague) {
        var self = this
        const data = `&from=${from}&limit=${limit}&keyvalue=${vague}`
        API.request('post', '/admin/singer/list', data).then(function (res) {
          const Data = res.data.data
          const lists = Data.list
          const TempArray = []
          console.log('歌手信息：-----------------------')
          console.log(lists)
          for (var i = 0; i < lists.length; i++) {
            const singer = lists[i]
            const temp = {
              image: singer.image,
              lists: [singer.singername, singer.type, singer.lang, 10, 10, 10, 10],
              id: singer.singerid
            }
            TempArray[i] = temp
          }
          self.values = TempArray
        })
      }
    },
    created: function () {
      this.getSingerList(10, 0, '')
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

