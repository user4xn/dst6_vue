<template>
    <!-- HEADMENU -->
    <div class="row justify-content-between">
      <div class="col-xl-2 col-lg-5 col-md-12 bg-info rounded-3 lh-lg mb-2 m-1 py-3 px-4 shadow-lg">
        <span class="icon rectangle display-5 rounded-3 bg-white text-info float-end d-flex align-items-center justify-content-center">
          <vue-feather type="lock" size="50px"></vue-feather>
        </span>
        <p class="m-0">
          <span class="h7 lh-1">P.Token</span>
          <br>
          <span class="fs-2 lh-1 fw-bold">fHikss</span>
        </p>
      </div>
      <div class="col-xl-2 col-lg-5 col-md-12 bg-warning rounded-3 lh-lg mb-2 m-1 py-3 px-4 shadow-lg">
        <span class="icon rectangle display-5 rounded-3 bg-white text-warning float-end d-flex align-items-center justify-content-center">
          <vue-feather type="users" size="50px"></vue-feather>
        </span>
        <p class="m-0">
          <span class="h7 lh-1">Siswa Aktif</span>
          <br>
          <span class="fs-2 lh-1 fw-bold">523</span>
        </p>
      </div>
      <div class="col-xl-2 col-lg-5 col-md-12 bg-secondary rounded-3 lh-lg mb-2 m-1 py-3 px-4 shadow-lg">
        <span class="icon rectangle display-5 rounded-3 bg-white text-secondary float-end d-flex align-items-center justify-content-center">
          <vue-feather type="user-plus" size="50px"></vue-feather>
        </span>
        <p class="m-0">
          <span class="h7 lh-1">Pendaftar Online</span>
          <br>
          <span class="fs-2 lh-1 fw-bold">4125</span>
        </p>
      </div>
      <div class="col-xl-2 col-lg-5 col-md-12 bg-danger rounded-3 lh-lg mb-2 m-1 py-3 px-4 shadow-lg">
        <span class="icon rectangle display-5 rounded-3 bg-white text-danger  float-end d-flex align-items-center justify-content-center">
          <vue-feather type="toggle-left" size="50px"></vue-feather>
        </span>
        <p class="m-0">
          <span class="h7 lh-1">Gerbang Penempatan</span>
          <br>
          <span class="fs-2 lh-1 fw-bold">CLOSE</span>
        </p>  
      </div>
    </div>
     <!-- HEADMENU -->
    <hr>
    <BreadcumbTitle msg="PT Surya Abadi Raya - Jl. Niaga Raya No. 12 Ruko Central Bussiness District (CBD) Blok C.17 Jababeka II"/>
     <!-- CHART -->
    <div class="row"> 
      <div class="col-lg-6 col-md-12 col-sm-12 mt-2">
        <div class="card col-md-12 h-100 bg-nav-secondary">
          <div class="card-body">
            <LineChart />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 mt-2">
        <div class="card col-md-12 h-100 bg-nav-secondary">
          <div class="card-body">
            <TokenChart />
          </div>
        </div>
      </div>
    </div>
    <!-- CHART -->
</template>

<script>
import LineChart from '@/components/LineChart.vue'
import TokenChart from '@/components/TokenChart.vue'
import BreadcumbTitle from '@/components/BreadcumbTitle.vue'

export default {
  name: 'HomeView',
  components: { LineChart,TokenChart,BreadcumbTitle }
}
</script>

<style>
.col-xl-2{
  min-width: 23%;
}
.h7{
  font-size: 0.8rem;
}
.rectangle{
  min-height: 70px !important;
  min-width: 92px !important;
}
.px-35{
  padding-right: 0.7rem !important;
  padding-left: 1.1rem !important;
}
</style>
