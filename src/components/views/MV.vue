<template>
  <!-- Main content -->
  <div class="row center-block">

    <pagenation :hasimage1="hasimage" :keys1="keys" :values1="values" :EditRoute='editRoute'
                v-on:searchfunction="searchfunction1" v-on:changePage="changepage1"></pagenation>
    <div class="col-md-12">
      <!--<router-link to="/updateSong"><i class="fa fa-fw fa-edit"></i></router-link>-->
      <router-link to="/songDetail">
        <button type="submit" class="btn btn-primary pull-right">增加MV</button>
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
  import Pagenation from './pagination'

  export default {
    components: {Pagenation},
    name: 'Tables',
    data: function () {
      return {
        hasimage: 1,
        keys: ['名字', '歌手', '语系', '专辑', '发布时间', '播放次数', '精选', '操作'],
        values: [],
        editRoute: '/updateMV'
      }
    },
    methods: {
      changepage1: function (from) {
        alert(from)
        this.getMVsList(10, from, '')
      },
      searchfunction1: function (Msg) {
        this.getMVsList(10, 0, Msg)
      },
      getMVsList: function (limit, from, vague) {
//        let data = `table=songslib&keyname=songname&queryfiles=songname,type,lang,singername,albumname,price,image,songid&from=${from}&limit=${limit}&keyvalue=${vague}`
        var self = this
        const data = `limit=${limit}&from=${from}&keyvalue=${vague}`
        API.request('post', '/admin/mv/list', data).then(function (res) {
          const Data = res.data.data
          console.log('--------------------------')
          console.log(Data)
          console.log('++++++++++++++++++++++++++++')
          const mvs = Data.mvs
          const TempArray = []
          for (var i = 0; i < mvs.length; i++) {
            const mv = mvs[i]
            const temp = {
              image: mvs[i].image,
              lists: [mv.mvname, mv.singername, mv.lang, mv.albumname, mv.create_ts, mv.play, '是'],
              id: mvs[i].mvid
            }
            TempArray[i] = temp
          }
          self.values = TempArray
        })
//        console.log(self.values)
//        console.log('End')
      }
    },
    created: function () {
      this.getMVsList(10, 0, '')
    },
    mounted () {
      this.$nextTick(() => {
        $('#example1').DataTable()
      })
    },
    watch: {
      values: {
        handler: function (val, oldval) {
          console.log('Mv value is change')
        }
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

