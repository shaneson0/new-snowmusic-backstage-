<template>
  <section class="content">
    <div class="box box-default">
      <div class="box-header with-border">
        <h3 class="box-title">新增专辑</h3>
      </div>
      <div class="box-body">
        <label>专辑名</label>
        <input type="text" placeholder="必填" class="form-control form-group-sm"/>
      </div>
      <div class="box-footer">
        <button type="button" class="btn btn-success pull-right" style="margin-right: 5px" v-on:click="AddMV()">上传
        </button>
        <button type="button" class="btn btn-primary pull-right" style="margin-right: 5px" v-on:click="UpdateMV()">
          更新
        </button>


      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'updateAlbum'
  }
</script>
