<template>
  <!-- Main content -->
  <section class="content">
    <!-- Info boxes -->
    <div class="row">

      <!--<div class="alert alert-success alert-dismissible">-->
        <!--&lt;!&ndash;<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>&ndash;&gt;-->
        <!--&lt;!&ndash;<h4><i class="icon fa fa-check"></i> CoPilot is open source!</h4>&ndash;&gt;-->
        <!--&lt;!&ndash;Click on icon to check it out on github. <a href="https://github.com/misterGF/CoPilot" target="_blank"><i class="fa fa-github fa-2x"></i></a>&ndash;&gt;-->
      <!--</div>-->
      <div></div>


      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua"><i class="ion ion-ios-people-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">注册用户</span>
            <span class="info-box-number">264534</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-red"><i class="ion ion-ios-people-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">新增用户</span>
            <span class="info-box-number">126543</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class="clearfix visible-sm-block"></div>

      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-green"><i class="ion ion-ios-people-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">会员用户</span>
            <span class="info-box-number">760</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">新增会员</span>
            <span class="info-box-number">2,000</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class="col-xs-12">
      <div class="box">

        <div class="box-header with-border ">
          <div class="box-body">

            <div class="col-sm-6 col-xs-12 fullCanvas">
              <p class="text-center">
                <strong>购买记录</strong>
              </p>
              <canvas id="trafficBar" ></canvas>
            </div>

            <!--<hr class="visible-xs-block">-->
            <!--<div class="col-sm-6 col-xs-12">-->
              <!--<p class="text-center">-->
                <!--<strong>Language Overview</strong>-->
              <!--</p>-->
              <!--<canvas id="languagePie"></canvas>-->
            <!--</div>-->
          </div>


        </div>


      </div>
    </div>

    <!-- /.row -->


    <div class="row">

      <div class="col-lg-4">
        <div class="ibox">
          <table class="table table-striped">
            <tbody>
            <tr>
              <th style="width: 10px">#</th>
              <th>精选榜</th>
              <th style="width: 40px">Play</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>神奇的布拉德</td>
              <td><span class="badge bg-red">456</span></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>藏族姑娘</td>
              <td><span class="badge bg-yellow">321</span></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>人间秘境</td>
              <td><span class="badge bg-light-blue">212</span></td>
            </tr>
            <tr>
              <td>4.</td>
              <td>次仁拉索</td>
              <td><span class="badge bg-green">20</span></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="ibox">
          <table class="table table-striped">
            <tbody>
            <tr>
              <th style="width: 10px">#</th>
              <th>热门榜</th>
              <th style="width: 40px">Play</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>神奇的布拉德</td>
              <td><span class="badge bg-red">456</span></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>藏族姑娘</td>
              <td><span class="badge bg-yellow">321</span></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>人间秘境</td>
              <td><span class="badge bg-light-blue">212</span></td>
            </tr>
            <tr>
              <td>4.</td>
              <td>次仁拉索</td>
              <td><span class="badge bg-green">20</span></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div class="col-lg-4">
        <div class="ibox">
          <table class="table table-striped">
            <tbody>
            <tr>
              <th style="width: 10px">#</th>
              <th>新歌榜</th>
              <th style="width: 40px">Play</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>神奇的布拉德</td>
              <td><span class="badge bg-red">456</span></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>藏族姑娘</td>
              <td><span class="badge bg-yellow">321</span></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>人间秘境</td>
              <td><span class="badge bg-light-blue">212</span></td>
            </tr>
            <tr>
              <td>4.</td>
              <td>次仁拉索</td>
              <td><span class="badge bg-green">20</span></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>


    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<script>
import Chart from 'chart.js'

export default {
  data () {
    return {
      generateRandomNumbers (numbers, max, min) {
        var a = []
        for (var i = 0; i < numbers; i++) {
          a.push(Math.floor(Math.random() * (max - min + 1)) + max)
        }
        return a
      }
    }
  },
  computed: {
    coPilotNumbers () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    personalNumbers () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    isMobile () {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    }
  },
  mounted () {
    this.$nextTick(() => {
      var ctx = document.getElementById('trafficBar').getContext('2d')
      var config = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: '今日充值会员',
            fill: false,
            borderColor: '#284184',
            pointBackgroundColor: '#284184',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: this.coPilotNumbers
          }, {
            label: '今日购买单曲',
            borderColor: '#4BC0C0',
            pointBackgroundColor: '#4BC0C0',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: this.personalNumbers
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          }
        }
      }

      new Chart(ctx, config) // eslint-disable-line no-new

      var pieChartCanvas = document.getElementById('languagePie').getContext('2d')
      var pieConfig = {
        type: 'pie',
        data: {
          labels: ['HTML', 'JavaScript', 'CSS'],
          datasets: [{
            data: [56.6, 37.7, 4.1],
            backgroundColor: ['#00a65a', '#f39c12', '#00c0ef'],
            hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          }
        }
      }

      new Chart(pieChartCanvas, pieConfig) // eslint-disable-line no-new
    })
  }
}
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}

</style>
