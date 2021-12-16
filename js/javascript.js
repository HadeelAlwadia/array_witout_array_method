


class Array{
    items=[]
    newItems=[]


 constructor(items){
  this.items=items
 }

setItems(items){
   this.items=items
}

getItems(){
  return this.items;
}


 pushItems(item){
    return [...this.items,item]
  }
  
 popItems(){
  for(let i=0; i<(this.items.length); i++){
    this.newItems[i]=this.items[i];
  }
   return this.newItems;
}

shiftItems(){
        for(let i=1; i<=(this.items.length)-1; i++){
         this. newItems[i-1]=this.items[i];
        }
       return this.newItems;
}

 unshiftItems(item){
    return [item,...this.items]
}


insertItem(item,index){
  for(let i=0; i<(this.items.length); i++){
      if(index===i){
        this.items[i]=item
      }
       this.newItems[i]=this.items[i]

  }
  return this.newItems
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
   
   
   
   