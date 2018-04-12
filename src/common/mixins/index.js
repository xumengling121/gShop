export const ratingsMixin={
  //所有vue
  data(){
    return {
      selectType:0,
      onlyContent:false
    }

  },
  computed:{
    filterRatings(){
      const {selectType,onlyContent}=this
      const ratings=this.shopRatings||this.food.ratings
      if(!ratings){
        return []
      }
      return ratings.filter(rating =>{
        const {rateType,text}=rating
        //selectType:0 1 2
        //rating.rateType 0/1
        //onlyContent:true/false
        return (selectType===2||selectType==rateType)&&(!onlyContent||text.length>0)
      })
    }
  },
  methods:{
    setSelectType(selectType){
      this.selectType=selectType
    },
    toggleOnlyContent(){
      this.onlyContent=!this.onlyContent
    },
  }


}
