<template>
  <div>
    <h5 class="ms-3 fw-bold float-end me-2">2022</h5>
    <h5 class="ms-3 fw-bold">Siswa & Pendaftar Chart</h5>
    <apexchart
      type="line"
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
          palette: 'palette1', 
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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "Siswa Magang Aktif",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
        {
          name: "Pendaftar Online",
          data: [10, 20, 55, 70, 89, 60, 50, 101],
        },
      ],
    };
  },
};
</script>