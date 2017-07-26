<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-desktop"></i>
        <span class="page">首页</span>
      </router-link>
    </li>

    <!--管理员-->
    <li class="header" >Mangerments</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/Manager"><i class="fa fa-table"></i>
        <span class="page">管理员</span>
      </router-link>
    </li>

    <!--管理员-->
    <li class="header" >Mangerments</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/upload"><i class="fa fa-table"></i>
        <span class="page">上传</span>
      </router-link>
    </li>

    <!--歌手，歌曲和音乐人-->
    <li class="header" >Medias</li>
    <li class=" pageLink" v-on:click="toggleMenu">
      <router-link to="/Singer"><i class="fa fa-table"></i>
        <span class="page">歌手和音乐人</span>
      </router-link>
    </li>
    <li class=" pageLink" v-on:click="toggleMenu">
      <router-link to="/Songs"><i class="fa fa-table"></i>
        <span class="page">歌曲</span>
      </router-link>
    </li>

    <!--Mv和专辑-->
    <li class="header" >Medias</li>
    <li class=" pageLink" v-on:click="toggleMenu">
      <router-link to="/MV"><i class="fa fa-table"></i>
        <span class="page">MV</span>
      </router-link>
    </li>
    <li class=" pageLink" v-on:click="toggleMenu">
      <router-link to="/Album"><i class="fa fa-table"></i>
        <span class="page">专辑</span>
      </router-link>
    </li>

    <!--排行榜-->
    <li class="header" >排行榜</li>
    <li class=" pageLink" v-on:click="toggleMenu">
      <router-link to="/Manager"><i class="fa fa-table"></i>
        <span class="page">精选榜</span>
      </router-link>
    </li>
    <li class=" pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-table"></i>
        <span class="page">热门榜</span>
      </router-link>
    </li>
    <li class=" pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-table"></i>
        <span class="page">最新版</span>
      </router-link>
    </li>


    <!--setting-->
    <li class="header">Setting</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/setting">
        <i class="fa fa-cog"></i>
        <span class="page">应用相关设置</span>
      </router-link>
    </li>


    <li class="header">PAGES</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/login">
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Login</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/404"><i class="fa fa-circle-o text-red"></i>
        <span class="page"> 404</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SidebarName',
  methods: {
    toggleMenu (event) {
      // remove active from li
      var active = document.querySelector('li.pageLink.active')

      if (active) {
        active.classList.remove('active')
      }
      // window.$('li.pageLink.active').removeClass('active')
      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  }
}
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
