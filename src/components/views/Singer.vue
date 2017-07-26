<template>
  <!-- Main content -->



  <div class="row center-block">

    <pagenation :hasimage1="hasimage" :keys1="keys" :values1="values"></pagenation>
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
        values: []
      }
    },
    created: function () {
      console.log('Hello')
      var self = this
      const data = 'limit=10'
      API.request('post', '/admin/singer/list', data).then(function (res) {
        const Data = res.data.data
        const lists = Data.list
        const TempArray = []
        for (var i = 0; i < lists.length; i++) {
          const singer = lists[i]
          const temp = {
            image: lists[i].image,
            lists: [singer.singername, singer.type, singer.lang, 10, 10, 10, 10]
          }
          TempArray[i] = temp
        }
        self.values = TempArray
      })
      console.log('End')
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

