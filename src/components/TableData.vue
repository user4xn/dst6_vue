<template>
    <div class="d-flex justify-content-end align-items-center">
            <div class="ps-0 p-2 flex-grow-1" v-if="isLoading">{{loadingText}} entries. Please wait...</div>
            <div class="ps-0 p-2 flex-grow-1" v-else="isLoading">
                Page {{currentPage}} of {{totalPages}}
            </div>
            <div class="p-2"> <input type="text" name="search" placeholder="Search..." class="form-control form-control-sm search-box p-2" v-model="keyword"> </div>
            <div class="p-2">Flex item</div>
            <div class="p-2">Flex item</div>
            <div class="p-2">Per Page :</div>
            <div class="p-2 pe-0">
                <select class="form-control-sm rounded" v-model='perPage'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
    </div> 
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 mb-1" >
           
        </div>
        <div class="col-md-12 table-responsive">
            <table class="table bg-nav-secondary table-sm table-hover rounded-3 text-nav-secondary">
                <thead class="bg-nav-active">
                <tr>
                    <th class="ps-3" v-for="th in tableHeader" :key="th">{{th.text}}</th>
                </tr>
                </thead>
                <tbody class="text-white text-capitalize align-middle">
                <tr v-for="(td, index) in entriesToDisplay" :key="td.id">
                    <td class="ps-3" v-for="thd in this.keys">{{ td[thd] }}</td>
                    <td>
                        <router-link :to="{name: '', params: { id: td.id }}" class="btn btn-sm btn-primary me-2 my-1 ms-0 pt-2"><vue-feather type="more-horizontal" size="20px"></vue-feather></router-link>
                        <button @click.prevent="PostDelete(td.id, index)" class="btn btn-sm btn-danger me-2 my-1 ms-0 pt-2"><vue-feather type="trash-2" size="20px"></vue-feather></button>
                    </td>
                </tr>
                <tr v-if="isNull">
                    <td class="text-center" :colspan="this.tableHeader.length">No Records</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row" v-if="!isLoading">
        <div class="col-md-12">
            <ul class="pagination fw-bold justify-content-center m-0">
                <li class="page-item"><a class="page-link" @click.stop.prevent="renderList(1)">First</a></li>
                <li class="page-item"><a class="page-link" v-show="showPrev" @click.stop.prevent="renderList(currentPage-1)">Previous</a></li>
                <li class="page-item"><a class="page-link" v-if="currentPage > 2" @click.stop.prevent="renderList(currentPage-2)">{{currentPage-2}}</a></li>
                <li class="page-item"><a class="page-link" v-if="currentPage > 1" @click.stop.prevent="renderList(currentPage-1)">{{currentPage-1}}</a></li>
                <li class="page-item active"><a class="page-link">{{currentPage}}</a></li>
                <li class="page-item"><a class="page-link" v-if="currentPage < (totalPages)" @click.stop.prevent="renderList(currentPage+1)">{{currentPage+1}}</a></li>
                <li class="page-item"><a class="page-link" v-if="currentPage < (totalPages)-1" @click.stop.prevent="renderList(currentPage+2)">{{currentPage+2}}</a></li>
                <li class="page-item"><a class="page-link" v-show="showNext" @click.stop.prevent="renderList(currentPage+1)">Next</a></li>
                <li class="page-item"><a class="page-link" @click.stop.prevent="renderList(totalPages)">Last</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            keys: [],
            pageData: [],
            baseLink: "",
            isLoading: true,
            isNull: false,
            loadingText: 'Loading',
            allEntries: [],
            filterEntries: [],
            entriesToDisplay: [],
            perPage: 10,
            pageToOpen: 1,
            currentPage: 1,
            cachedPage: 1,
            keyword: ''
        }
    },
    
    
    props:{
        columns: Array,
        fetchLink: String,
    },
    
    
    created() {
        this.setBase();
        this.getData();
    },
    
    
    computed:{
        tableHeader() {
            return this.columns || []
        },

        entriesFilteredList() {
            return this.allEntries.filter((entries) => {
                return this.keyword.toLowerCase().split(' ').every(v => entries.nama.toLowerCase().includes(v));
            });
        },

        totalPages(){
            //calculate the total number of pages based on the number of items to show per page and the total items we got from server
            return this.entriesFilteredList.length && (this.entriesFilteredList.length > this.perPage) ? Math.ceil(this.entriesFilteredList.length/this.perPage) : 1;
        },

        start(){
            return (this.pageToOpen - 1) * this.perPage;
        },

        stop(){
            //stop at the end of the array if array length OR the items left are less than the number of items to show per page
            //do the calculation if otherwise
            if((this.entriesFilteredList.length - this.start) >= this.perPage){
                return (this.pageToOpen * this.perPage) - 1;
            }

            else{
                return this.entriesFilteredList.length - 1;
            }
        },
			
        showNext(){
            return this.currentPage < this.totalPages;
        },

        showPrev(){
            return this.currentPage > 1;
        }
    },
    
    
    methods: {
        getData(dataOffset=1){
            this.isLoading = true; //indicate that we're loading/fetching data
            let _this = this;

            axios.get(this.baseLink).then(response => {
                _this.allEntries = response.data.data;
                _this.keys = Object.keys(response.data.data[0]);
                _this.isLoading = false; //no longer fetching

                //then render list on DOM
                _this.renderList(dataOffset); //re-renderlist on DOM
            });
        },

        renderList(pageNumber=1){
            //clear currently displayed list
            this.entriesToDisplay = [];

            //set entries to display
            if(this.entriesFilteredList.length){
                let _this = this;
                _this.isNull = false;

                return new Promise(function(res, rej){
                    //set the page to open to the pageNumber in the parameter in order to allow start and stop to update accordingly
                    _this.pageToOpen = pageNumber;

                    //add the necessary data to `entriesToDisplay` array
                    for(let i = _this.start; i <= _this.stop; i++){
                        _this.entriesToDisplay.push(_this.entriesFilteredList[i]);
                    }

                    res();
                }).then(function(){
                    //Now update the current page to the page we just loaded
                    _this.currentPage = _this.pageToOpen;
                }).catch(function(){
                    console.log('render err');
                });                  
            }else{
                this.isNull = true; // show null field
            }
            // add else to add no record
        },

        setBase() {
            this.baseLink = this.fetchLink;
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
                    this.cachedPage = this.currentPage;
                    axios.delete(this.baseLink+`/${id}`)
                    .then(response => {
                        this.loadingText = 'Updating';
                        this.getData(this.cachedPage);
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
    },


    watch: {
        //re-render list based on the value of `perPage` which indicates how many to show per page
        perPage: function(){
            this.renderList();
        },

        keyword: function(){
            this.renderList();
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
.search-box{
    background: none;
    color: var(--bg-active) !important;
    border: none;
    border-bottom: 1px solid var(--bg-active) !important;
}
input:focus{
    border: 1px solid var(--bg-active) !important;
    background: none !important;
    box-shadow: none !important;
}
.table-hover > tbody > tr:hover > * {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: #ffffff;
}
</style>