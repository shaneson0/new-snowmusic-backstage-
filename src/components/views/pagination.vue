

<template>



  <div class="col-md-12">
    <div class="box">
      <div class="box-header">
        <h3 class="box-title">MV</h3>

        <div class="box-tools">
          <div class="input-group input-group-sm pull-right" style="width: 150px">
            <input type="text" name="table_search" class="form-control pull-right" placeholder="Search"/>
            <div class="input-group-btn">
              <button type="submit" class="btn btn-default">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>



          <div class="input-group input-group-sm pull-right" style="width: 150px">
            <select class="form-control">
              <option>全部</option>
              <option>精选MV</option>
            </select>
          </div>

        </div>
      </div>

      <div class="box-body table-responsive no-padding" >
        <table class="table table-hover" aria-describedby="example1_info" role="grid">
          <thead>
          <tr role="row">

            <th v-if="this.hasimage1">头像</th>
            <th v-for="key in this.keys1">{{key}}</th>
          </tr>
          </thead>
          <tbody>

          <tr v-for="value in values1">

            <td v-if="value.image">
              <div class="user-panel">
                <div class="pull-left image">
                  <img v-bind:src="value.image"  width="25px" height="25px">
                </div>
              </div>
            </td>

            <td v-for="x in value.lists">
              <div class="user-panel">
                <div class="pull-left image">
                  <h6 style="height: 50%">{{x}}</h6>
                </div>
              </div>
            </td>

            <td>
              <div class="col-md-3 col-sm-4">
                <i class="fa fa-fw fa-eye"></i>
              </div>
              <div class="col-md-3 col-sm-4">
                {{value.id}}
                <router-link :to="{ path: EditRoute , query: { editid: value.id } }"><i class="fa fa-fw fa-edit"></i></router-link>
                <!--<router-link :to="EditRoute"><i class="fa fa-fw fa-edit"></i></router-link>-->
              </div>
              <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trash-o"></i></div>

            </td>
          </tr>



          </tbody>
        </table>
      </div>

      <div class="col-md-12">

        <ul class="pagination pull-right">
          <li><a href="#">&laquo;</a></li>
          <li class="active"><a href="#">1</a></li>
          <li class="disabled"><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">&raquo;</a></li>
        </ul>



      </div>



      <div class="box-footer">
      </div>

    </div>


  </div>


</template>




<script>
  export default{
    name: 'pagenation',
    props: {
      hasimage1: Number,
      keys1: Array,
      values1: Array,
      EditRoute: { default: '/' }
    },
    data: function () {
      return {
      }
    },
    watch: {
      values1: {
        handler: function (val, oldval) {
          console.log('values is change')
        }
      }
    }
  }
</script>
