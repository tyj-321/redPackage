<template>
  <div>
    <div id="head">
      <div id="first" ref="first"></div>
      <div class="btns">
        <el-button type="primary" size="mini" @click="giveOnce">发1次红包</el-button>
      </div>
    </div>
    <div id="second">
      <div class="charts">
        <div id="secondSca" ref="secondSca"></div>
        <div id="secondAve" ref="secondAve"></div>
        <div id="secondVar" ref="secondVar"></div>
      </div>
      <div class="btns">
        <el-button type="primary" size="mini" @click="initData(10)">发10次红包</el-button>
        <el-button type="primary" size="mini" @click="initData(50)">发50次红包</el-button>
        <el-button type="primary" size="mini" @click="initData(100)">发100次红包</el-button>
        <el-button type="primary" size="mini" @click="initData(500)">发500次红包</el-button>
        <el-button type="primary" size="mini" @click="initData(1000)">发1000次红包</el-button>
        <el-button type="primary" size="mini" @click="initData(2000)">发2000次红包</el-button>
      </div>
    </div>
    <div id="footer">
      <div id="third" ref="third"></div>
      <div class="btns">
        <el-button type="primary" size="mini" @click="initThirdData(3)">3个人抢红包</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(4)">4个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(5)">5个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(6)">6个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(7)">7个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(8)">8个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(9)">9个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(10)">10个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(11)">11个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(12)">12个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(13)">13个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(14)">14个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(15)">15个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(20)">20个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(30)">30个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(40)">40个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(50)">50个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(100)">100个人</el-button>
        <el-button type="primary" size="mini" @click="initThirdData(200)">200个人</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { devideRedPackege } from './DevideRedPackage'
import * as echarts from 'echarts';
export default {
  name: 'RedPackage',
  data() {
    return {
      first: {
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value',
          tooltip: {
            show: true
          }
        },
        series: [
          {
            data: [],
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              color: 'white'
            }
          }
        ]
      },
      second: {
        active: 0,
        currentOption: {},
        scaOption: {
          xAxis: {
            scale: true
          },
          yAxis: {
            scale: true
          },
          series: []
        },
        barOption: {
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              id: 'total',
              data: [],
              label: {
                show: true,
                position: 'top',
                color: 'black'
              },
              universalTransition: {
                enabled: true,
                seriesKey: [],
                // delay: function (idx, count) {
                //   return Math.random() * 400;
                // }
              }
            }
          ]
        },
        varOption: {
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              id: 'total',
              data: [],
              label: {
                show: true,
                position: 'top',
                color: 'black'
              },
              universalTransition: {
                enabled: true,
                seriesKey: [],
                // delay: function (idx, count) {
                //   return Math.random() * 400;
                // }
              }
            }
          ]
        }
      },
      third: {
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [],
            type: 'line'
          }
        ]
      }
    }
  },
  mounted () {
    this.giveOnce()
    this.renderFirst()

    this.initData(10)
    this.renderSecond()

    this.initThirdData(3)
    this.renderThird()
  },
  methods: {
    // 发一次红包
    giveOnce() {
      this.first.series[0].data = []
      this.first.xAxis.data = []
      let sum = 0
      let moneyList = devideRedPackege(100, 10)
        moneyList.forEach((item, index) => {
        sum += Number(item)
        this.first.series[0].data.push(item)
        this.first.xAxis.data.push(`No.${index + 1}`)
      })
      console.log(sum)
      console.log(moneyList)
      this.renderFirst()
    },

    // 发红包后初始化散点数据和平均值图表数据，方差图表数据  参数为发多少次红包
    initData(time) {
      this.second.scaOption.series = []
      this.second.barOption.xAxis.data = []
      this.second.barOption.series.data = []
      this.second.varOption.xAxis.data = []
      this.second.varOption.series.data = []
      let moneyArray = devideRedPackege(100, 10)
      console.log(moneyArray.length,1111111)
      for(let i = 1; i <= moneyArray.length; i++) {
        this.second.scaOption.series.push({
          type: 'scatter',
          id: `No.${i}`,
          dataGroupId: `No.${i}`,
          universalTransition: {
            enabled: true,
          },
          data: []
        })

        this.second.barOption.xAxis.data.push(`No.${i}`)
        this.second.barOption.series[0].data.push({
          value: 0,
          groupId: `No.${i}`
        })

        this.second.varOption.xAxis.data.push(`No.${i}`)
        this.second.varOption.series[0].data.push({
          value: 0,
          groupId: `No.${i}`
        })
      }
      console.log(this.second.scaOption.series,2222222)
      for(let j = 1; j<= time; j++) {
        let moneyList = devideRedPackege(100, 10)
        for(let k = 0; k <= moneyList.length - 1; k++) {
          this.second.scaOption.series[k].data.push([`${k + 1}`, moneyList[k]])
        }
      }
      for(let p = 0; p <= moneyArray.length - 1; p++) {
        this.second.barOption.series[0].data[p].value = (this.calculateAverage(this.second.scaOption.series[p].data, 1))
      }
      for(let p = 0; p <= moneyArray.length - 1; p++) {
        this.second.varOption.series[0].data[p].value = (this.calculateVariance(this.second.scaOption.series[p].data, 1))
      }
      console.log(this.second.barOption,8888888)
      console.log(this.second.varOption,9999999)
      this.renderSecond()
    },

    // 获取数字数组中最大值的索引值
    getMaxIndex(array) {
      let max = 0
      let index = 0
      for(let i = 0; i < array.length; i++) {
        if(array[i] > max) {
          max = array[i]
          index = i
        }
      }
      return index
    },

    // 相同金额100，不同红包数量的时候，每个顺位抢到手气最佳的概率，默认3个红包数，默认发10000次
    initThirdData(RedPackageNum) {
      this.third.xAxis.data = []
      this.third.series[0].data = []
      let array = new Array(RedPackageNum).fill(0)
      for(let i = 0; i < 10000; i++) {
        let moneyList = devideRedPackege(100, RedPackageNum)
        for(let j = 0; j < moneyList.length; j++) {
          moneyList[j] = Number(moneyList[j])
        }
        let maxIndex = this.getMaxIndex(moneyList)
        array[maxIndex] += 1
      }
      for(let k = 0; k < array.length; k++) {
        this.third.xAxis.data.push(`No.${k + 1}`)
        this.third.series[0].data.push(array[k] / 10000)
      }
      this.renderThird()
    },

    // 计算平均值方法
    calculateAverage(data, dim) {
      let total = 0;
      for (var i = 0; i < data.length; i++) {
        total += Number(data[i][dim]);
      }
      return Number((total /= data.length).toFixed(2));
    },
    
    // 计算方差的方法
    calculateVariance(data, dim) {
      let average = this.calculateAverage(data, dim)
      let all = 0;
      for (var i = 0; i < data.length; i++) {
        all = (Number(data[i][dim]) - average) * (Number(data[i][dim]) - average) + all;
      }
      return Number((all /= data.length).toFixed(2));
    },
    // 渲染第一个图表
    renderFirst() {
      const chartDom = this.$refs.first;
      const myChart = echarts.init(chartDom, 'dark');
      myChart.setOption(this.first);
    },


    // 渲染第二块图表 有三个图表
    renderSecond() {
      const chartDom1 = this.$refs.secondSca
      const myChart1 = echarts.init(chartDom1)
      myChart1.setOption(this.second.scaOption)
      const chartDom2 = this.$refs.secondAve
      const myChart2 = echarts.init(chartDom2)
      myChart2.setOption(this.second.barOption)
      const chartDom3 = this.$refs.secondVar
      const myChart3 = echarts.init(chartDom3)
      myChart3.setOption(this.second.varOption)
    },


    // 渲染第三个概率折线图
    renderThird() {
      const chartDom = this.$refs.third
      const myChart = echarts.init(chartDom)
      myChart.setOption(this.third)
    }
  },
}
</script>

<style scoped>
#head {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}
#first {
  width: 500px;
  height: 500px;
  margin-bottom: 10px;
}
#second {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#third {
  width: 500px;
  height: 500px;
}
#second .charts {
  width: 1900px;
  display: flex;
  justify-content: space-around;
}
#secondSca {
  width: 500px;
  height: 500px;
  margin-bottom: 10px;
}
#secondAve {
  width: 500px;
  height: 500px;
}
#secondVar {
  width: 500px;
  height: 500px;
}
#footer {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
