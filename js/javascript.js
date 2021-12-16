


class Array{
    #items=[]
    #newArray=[]


 constructor(items){
  this.items=items
 }

setItems(array){
   this.items=array
}

getItems(){
  return this.items;
}


 pushItems(item){
    return [...this.items,item]
  }
  
 popItems(){
  for(let i=0; i<(this.items.length); i++){
    this.newArray[i]=this.items[i];
  }
   return this.newArray;
}

shiftItems(){
        for(let i=1; i<=(this.items.length)-1; i++){
         this. newArray[i-1]=this.items[i];
        }
       return this.newArray;
}

 unshiftItems(member){
    return [member,...this.items]
}


insertItem(member,index){
  for(let i=0; i<(this.items.length); i++){
      if(index===i){
        this.items[i]=member
      }
       this.newArray[i]=this.items[i]

  }
  return this.newArray
}


 
findItem(item){
  let chooseItem;
  for(let i=0; i<(this.items.length); i++){
        if(item===this.items[i]){
          chooseItem=item
        }
  }
 return chooseItem;

 }



}

let array=new Array([5,6,7])
     array.setItems([4,'hadeel'])
      console.log (array.getItems())
      console.log(array.pushItems([9,9]))
      console.log(array.popItems())
      console.log(array.shiftItems())
      console.log(array.unshiftItems('t'))
      console.log(array.insertItem('t',2))
      console.log(array.findItem('hadeel'))
   
   
   
   