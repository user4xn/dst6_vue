<template>
    <BreadcumbTitle mid="Master Data"/>
    <div class="row"> 
        <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
            <TableData :columns="columns" :fetchLink="fetchLink"/>
        </div>
    </div>
</template>
<script>
import BreadcumbTitle from '@/components/BreadcumbTitle.vue'
import TableData from '@/components/TableData.vue'

export default {
    components: { BreadcumbTitle, TableData},
    data() {
        return {
            columns: [
                {name: 'id', text:'ID'},
                {name: 'nama', text:'Name'},
                {name: 'jenis_kelamin', text:'Gender'},
                {name: 'pt', text:'Industry'},
                {name: 'status_penempatan', text:'Placement Status'},
                {name: 'created_at', text:'Timestamp'},
                {name: 'action', text:'Action'},
            ],
            fetchLink: 'https://api.suryaabadiraya.co.id/api/siswa',
        }
    },
}
</script>