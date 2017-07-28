import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import ManagerView from './components/views/Manager.vue'
import SingerView from './components/views/Singer.vue'
import SongsView from './components/views/Songs.vue'
import MVView from './components/views/MV.vue'
import updateMVView from './components/views/updateMV.vue'
import AlbumView from './components/views/Album.vue'
import pageView from './components/views/pagination.vue'
import updateSongView from './components/views/updateSong.vue'
import uploadView from './components/views/upload.vue'
import singerDetailView from './components/views/singerDetail.vue'
import albumDetailView from './components/views/albumDetail.vue'
import MVDetailView from './components/views/MVDetail.vue'
import songDetailView from './components/views/songDetail.vue'
import rankView from './components/views/rank.vue'
import updateSingerView from './components/views/updateSinger.vue'
import updateAlbumView from './components/views/updateAlbum.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers'}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'Manager',
        component: ManagerView,
        name: 'Manager'
      }, {
        path: 'Singer',
        component: SingerView,
        name: 'Singer'
      }, {
        path: 'Songs',
        component: SongsView,
        name: 'Songs'
      }, {
        path: 'MV',
        component: MVView,
        name: 'MV'
      }, {
        path: 'Album',
        component: AlbumView,
        name: 'Album'
      }, {
        path: 'page',
        component: pageView,
        name: 'page'
      }, {
        path: 'updateSong',
        component: updateSongView,
        name: 'updateSong'
      }, {
        path: 'updateMV',
        component: updateMVView,
        name: 'updateMV'
      }, {
        path: 'upload',
        component: uploadView,
        name: 'upload'
      }, {
        path: 'singerDetail',
        component: singerDetailView,
        name: 'singerDetailView'
      }, {
        path: 'albumDetail',
        component: albumDetailView,
        name: 'albumDetail'
      }, {
        path: 'MVDetail',
        component: MVDetailView,
        name: 'MVDetail'
      }, {
        path: 'songDetail',
        component: songDetailView,
        name: 'songDetail'
      }, {
        path: 'rank',
        component: rankView,
        name: 'rank'
      }, {
        path: 'updateSinger',
        component: updateSingerView,
        name: 'updateSinger'
      }, {
        path: 'updateAlbum',
        component: updateAlbumView,
        name: 'updateAlbum'
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
