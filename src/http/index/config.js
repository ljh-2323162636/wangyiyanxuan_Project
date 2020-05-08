export default {
  name:"index",
  // baseUrl:"http://localhost:4000",
  api:{
      getindexData:{
        url:"/getindexData",
        method:"get",
        corsUrl:"/3001"
      },
      getindexCateModuleData:{
        url:"/getindexCateModuleData",
        method:"get",
        corsUrl:"/3001"
      },
      getCateListData:{
        url:"/getCateListData",
        method:"get",
        corsUrl:"/3001"
      },
      getcateNavData:{
        url:'/getcateNavData',
        method:"get",
        corsUrl:"/3001"
      }
  }
  
}
