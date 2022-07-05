<template>
    <SidebarHeader/>
    <div class="container-fluid p-4 col-md-11 col-sm-12 px-4 text-start">
        <BreadcumbTitle mid="Master Data"/>
        <div class="row"> 
            <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
                <TableData :columns="columns" :fetchLink="fetchLink"/>
            </div>
        </div>
    </div>
</template>
<script>
import BreadcumbTitle from '@/components/BreadcumbTitle.vue'
import TableData from '@/components/TableData.vue'
import SidebarHeader from '@/components/SidebarHeader.vue'

export default {
    components: { BreadcumbTitle, TableData, SidebarHeader},
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
            fetchLink: 'http://localhost:8080/students',
        }
    },
}
</script>