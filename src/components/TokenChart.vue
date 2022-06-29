<template>
  <div>
    <h5 class="ms-3 fw-bold">Token Chart</h5>
    <apexchart
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      chartOptions: {
        theme: { 
          mode: 'dark',
          palette: 'palette7', 
        },
        stroke: {
            curve: 'smooth'
        },
        tooltip: {
          theme: 'dark'
        },
        markers: {
            size: 4,
        },
        chart: {
          id: "vuechart-example",
          foreColor: '#fff',
          background: '#52575d'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996],
        },
        plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                  position: 'bottom',
              },
            }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
      },
      series: [
        {
          name: "Siswa Magang Aktif",
          data: [30, 40, 35, 50, 49, 60,],
        },
      ],
    };
  },
};
</script>