<template>
  <rank :SongsRankInfo="SongsRankInfo" :rankName="rankName"
        v-on:searchfunction="searchfunction1" v-on:changePage="changepage1"></rank>
</template>

<script>
  import 'jquery'
  import * as API from '../../api/index'
  import rank from './rank.vue'

  export default {
    name: 'newSongsRank',
    components: {
      'rank': rank
    },
    data () {
      return {
        SongsRankInfo: '',
        rankName: '热歌榜'
      }
    },
    methods: {
      changepage1: function (from) {
        this.getSongsRankList(10, from, '')
      },
      searchfunction1: function (Msg) {
        this.getSongsRankList(10, 0, Msg)
      },
      getSongsRankList: function (limit, from, Msg) {
        const self = this
        let data = `limit=${limit}&from=${from}`
        API.request('post', '/admin/op/hotsongs', data).then(function (res) {
          console.log('-------------------------------------')
          console.log(res.data.data.songs)
          console.log('++++++++++++++++++++++++++++++++++++++')
          self.SongsRankInfo = res.data.data.songs
        })
      }
    },
    created: function () {
      this.getSongsRankList(10, 0, '')
    }
  }
</script>
