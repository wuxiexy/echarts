/*
*
*   echarts 的一些常用图表的配置
*   author： wuxie
*
* */
/* =================================================== 饼图配置 start =================================================== */
/* ------------------------------------ 封装方法 ------------------------------------ */
let optionCategory = function (o){
    return {
        title : {
            text: o.title.text,                         // 标题
            subtext: o.title.subtext,                   // 副标题
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            // formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        /*legend: {
         orient: 'vertical',
         left: 'left',
         data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
         },*/
        series : [
            {
                name: o.title.text,
                type: 'pie',
                radius : '40%',                         // 半径
                legendHoverLink: false,                 //
                center: ['50%', '50%'],                 // 位置设置，相当于 left top
                /*label: {
                 // 在饼图里面显示
                 normal: {
                 position: 'inner'
                 }
                 },*/
                data:o.series[0].data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
};
/* ------------------------------------ 饼图数据 ------------------------------------ */
annualOrder = {
    title : {
        text: '年订单来源区域分布',                         // 标题
        subtext: null,                      // 副标题
    },
    series : [{
        data: [
            {value: 234, name: '湖南-234'},
            {value: 135, name: '湖南-135'},
            {value: 1548, name: '河北-1548'},
            {value: 548, name: '四川-1548'},
            {value: 335, name: '湖南-335'},
            {value: 310, name: '湖北-310'},
            {value: 158, name: '河南-1548'},
            {value: 154, name: '湖南-1548'},
            {value: 608, name: '湖南-1548'}
        ],
    }]
};
/* ------------------------------------ 使用方法 ------------------------------------ */
// let $annual_order = echarts.init(document.querySelector('#id')).setOption(optionCategory(annualOrder));

/* =================================================== 饼图配置 end =================================================== */







/* =================================================== 单条折线图 start =================================================== */
/* ------------------------------------ 封装方法 ------------------------------------ */
let optionSales = function(o){
    return {
        /* 每月销量 */
        title: {
            text: o.title.text,
            // subtext: '纯属虚构',                    // 副标题
            x:'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        /*legend: {
         show: false,
         data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
         },*/
        grid: {
            left: '3%',
            right: '6%',
            top: o.grid.top || '10%',
            bottom: '8%',
            containLabel: true
        },
        toolbox: {
            /* 保存为图片 api */
            show: false,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            /* x 轴的相关配置 */
            type: 'category',
            boundaryGap: false,
            splitNumber: o.xAxis.data.length,
            offset: 10,                     // X 轴相对于默认位置的偏移
            data: o.xAxis.data
        },
        yAxis: {
            /* y 轴， 具体的刻度数是算出来的，要给三个参数：最大值max，最小值min，和 splitNumber坐标轴的分割段数 */
            type: 'value',
            max: o.yAxis.max,
            min: o.yAxis.min,
            splitNumber: o.yAxis.splitNumber

        },
        series: [
            {
                type:'line',
                name: o.series[0].name,
                data:o.series[0].data
            }
        ]
    }
};
/* ------------------------------------ 一条折线图数据 ------------------------------------ */
let optionDayJson = {
    title: {
        text: '每日销售数量',
    },
    grid: {
        top: '15%'
    },
    xAxis: {
        data: ['2016-10-5','2016-10-6','2016-10-7','2016-10-8','2016-10-9','2016-10-10','2016-10-11']
    },
    yAxis: {
        max: 35000,
        min: 0,
        splitNumber: 7
    },
    series: [
        {
            name: '每日销售数量',
            data:[0, 17500, 22500, 17000, 26000, 28000, 33000]
        }
    ]
};
/* ------------------------------------ 使用方法 ------------------------------------ */
let myChart = echarts.init(document.querySelector('#demo')).setOption(optionSales(optionDayJson));

/* =================================================== 单条折线图 end =================================================== */







/* =================================================== 两条折线图 start =================================================== */
/* ------------------------------------ 封装方法 ------------------------------------ */
let twoOptionSales = function(o) {
    return {
        title: {
            text: o.title.text,
            height: 0
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            top: '-8px',
            right: '6%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [
            {
                /* x 轴的相关配置 */
                type: 'category',
                boundaryGap: false,
                splitNumber: o.xAxis.data.length,
                offset: 10,                     // X 轴相对于默认位置的偏移
                data: o.xAxis.data
            }
        ],
        yAxis: [
            {
                /* y 轴， 具体的刻度数是算出来的，要给三个参数：最大值max，最小值min，和 splitNumber坐标轴的分割段数 */
                type: 'value',
                max: o.yAxis.max,
                min: o.yAxis.min,
                splitNumber: o.yAxis.splitNumber
            }
        ],
        series: [
            {
                type:'line',
                data:o.series[0].data
            },
            {
                type:'line',
                data:o.series[1].data
            }
        ]
    };
};
/* ------------------------------------ 两条折线图数据 ------------------------------------ */
let dataDaySaleConJson = {
    title: {
        text: null
    },
    grid: {
        top: '-8px'
    },
    xAxis: {
        data: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00', '24:00']
    },
    yAxis: {
        max: 35000,
        min: 0,
        splitNumber: 7
    },
    series: [
        {
            name: '当日销售数量',
            data:[120, 13200, 15000, 1340, 9000, 13000, 2100]
        },
        {
            name: '当日访问量',
            data:[2200, 18200, 15000, 23004, 2090, 17000, 3010]
        }
    ]
};
/* ------------------------------------ 使用方法 ------------------------------------ */
// let $dataDaySaleCon = echarts.init(document.querySelector('#id')).setOption(twoOptionSales(dataDaySaleConJson));

/* =================================================== 两条折线图 end =================================================== */















