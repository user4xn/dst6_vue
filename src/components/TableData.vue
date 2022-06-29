<template>
    <div class="row">
        <div class="col-md-12 table-responsive">
            <table class="table bg-nav-secondary table-sm rounded-3 text-nav-secondary" id="example">
                <thead class="bg-nav-active">
                <tr>
                    <th class="ps-3" v-for="th in tableHeader" :key="th">{{th.text}}</th>
                </tr>
                </thead>
                <tbody class="text-white text-capitalize align-middle">
                <tr v-for="(td, index) in this.entries" :key="td.id">
                    <td class="ps-3" v-for="thd in this.keys">{{ td[thd] }}</td>
                    <td>
                        <router-link :to="{name: '', params: { id: td.id }}" class="btn btn-sm btn-primary me-2 my-1 ms-0 pt-2"><vue-feather type="more-horizontal" size="20px"></vue-feather></router-link>
                        <button @click.prevent="PostDelete(td.id, index)" class="btn btn-sm btn-danger me-2 my-1 ms-0 pt-2"><vue-feather type="trash-2" size="20px"></vue-feather></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-between">
            <div class="col-lg-2 col-md-12 fw-bold">
                <span class="bg-nav-active-clear p-2 rounded">
                    Page {{this.pageData.currentPage}} of {{this.pageData.pageCount}}
                </span>
            </div>
            <div class="col-lg-3 col-md-12 text-end">
                <ul class="pagination fw-bold justify-content-end m-0">
                    <li class="page-item"><a class="page-link" @click="setLink(this.fetchLink+'?page=1')">First</a></li>
                    <li class="page-item"><a class="page-link" @click="setLink(this.pageData.previous)">Previous</a></li>
                    <li class="page-item"><a class="page-link" v-if="this.pageData.currentPage > 2" @click="setLink(this.fetchLink+'?page='+(this.pageData.currentPage-2))">{{this.pageData.currentPage-2}}</a></li>
                    <li class="page-item"><a class="page-link" v-if="this.pageData.currentPage > 1" @click="setLink(this.fetchLink+'?page='+(this.pageData.currentPage-1))">{{this.pageData.currentPage-1}}</a></li>
                    <li class="page-item active"><a class="page-link">{{this.pageData.currentPage}}</a></li>
                    <li class="page-item"><a class="page-link" v-if="this.pageData.currentPage < (this.pageData.total/this.pageData.perPage)" @click="setLink(this.fetchLink+'?page='+(this.pageData.currentPage+1))">{{this.pageData.currentPage+1}}</a></li>
                    <li class="page-item"><a class="page-link" v-if="this.pageData.currentPage < (this.pageData.total/this.pageData.perPage)-1" @click="setLink(this.fetchLink+'?page='+(this.pageData.currentPage+2))">{{this.pageData.currentPage+2}}</a></li>
                    <li class="page-item"><a class="page-link" @click="setLink(this.pageData.next)">Next</a></li>
                    <li class="page-item"><a class="page-link" @click="setLink(this.fetchLink+'?page='+this.pageData.pageCount)">Last</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            entries: [],
            keys: [],
            pageData: [],
            baseLink: '',
        }
    },
    props:{
        columns: Array,
        fetchLink: String,
    },
    computed:{
        tableHeader() {
            return this.columns || []
        },
    },
    created() {
        this.setBase();
        this.getData();
    },
    methods: {
        getData(){
            axios.get(this.baseLink).then(response => {
                this.entries = response.data.data;
                this.keys = Object.keys(response.data.data[0]);
                this.pageData = response.data.page_data;
            });
        },
        setBase() {
            this.baseLink = this.fetchLink;
        },
        setLink(newLink) {
            this.baseLink = newLink;
            this.getData(); 
            console.log(newLink);
        },
        PostDelete(id, index)
        {
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:8080/api/siswa/${id}`)
                    .then(response => {
                        this.entries.splice(index, 1);
                        console.log(response);
                    }).catch(error => {
                        console.log(error.response);
                        this.$swal(
                            'Error!',
                            'Your file has not been deleted.',
                            'error'
                        )
                    });
                }
            });
        }
    }
}
</script>
<style>
.page-link{
    background: var(--bg-secondary);
    color: #fff;
    border: var(--bg-dark);
    cursor: pointer;
}
.page-item.active .page-link {
    z-index: 3;
    color: var(--bg-secondary);
    background-color: var(--bg-active);
    border-color: var(--bg-active);
}
.bg-nav-active-clear{
    background: var(--bg-active);
}
.page-link:hover{
    background: var(--bg-active);
    color: var(--bg-secondary);
}
.disabled{
    background: var(--bg-secondary) !important;
}
</style>