<template>
     <div aria-label="breadcrumb">
      <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#" class="text-white">Home</a></li>
          <li class="breadcrumb-item" v-if="mid"><a href="#" class="text-white">{{mid}}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $route.name }}</li>
      </ol>
    </div>
    <h5 class="float-end d-none d-md-block d-lg-block lh-lg" v-if="msg"><span class="blockquote-footer">{{msg}}</span></h5>
    <h1 class="mb-4">{{ $route.name }}</h1>
</template>
<script lang='ts'>
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
    mid: String,
  }
})
export default class BreadcumbTitle extends Vue {
  msg!: string
}
</script>