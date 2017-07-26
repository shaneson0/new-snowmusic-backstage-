<template>
  <!-- Main content -->
  <div class="row center-block">
    <div class="col-md-12">
      <div class="box">
        <div class="box-header">

            <h3 class="box-title">管理员</h3>
            <button type="button" class="btn btn-success pull-right" >新增</button>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
            <div class="row">
              <div class="col-sm-6">
                <div id="example1_length" class="dataTables_length">

                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 table-responsive">
                <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                  <thead>
                  <tr role="row">

                    <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">用户名</th>
                    <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">密码</th>
                    <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">操作</th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr class="even" role="row">
                    <td class="sorting_1">小鹏</td>
                    <td>*********</td>
                    <td>
                      <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-edit"></i></div>
                      <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trash-o"></i></div>
                    </td>

                  </tr>
                  <tr class="odd" role="row">
                    <td class="sorting_1">叶老师</td>
                    <td>*********</td>
                    <td>
                      <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-edit"></i></div>
                      <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trash-o"></i></div>
                    </td>

                  </tr>
                  <tr class="even" role="row">
                    <td class="sorting_1">小哥</td>
                    <td>*********</td>
                    <td>
                      <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-edit"></i></div>
                      <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trash-o"></i></div>
                    </td>

                  </tr>
                  <tr class="odd" role="row">
                    <td class="sorting_1">守明</td>
                    <td>*********</td>
                    <td>
                      <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-edit"></i></div>
                      <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trash-o"></i></div>
                    </td>
                  </tr>

                  </tbody>

                </table>
              </div>
            </div>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>




  </div>


</template>

<script>
  import $ from 'jquery'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'

  export default {
    name: 'Tables',
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

