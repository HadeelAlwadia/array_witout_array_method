


type T=string |number | Array <string> |object |undefined |boolean|null


class Array2{
  private  items:Array<T>=[]; 
  private  newItems:Array<T>=[];


 constructor(items:Array<T>){
  this.items=items
 }

setItems(array:Array<T>):void{  // function for setItems

   this.items=array
}

getItems():Array<T>{ // function for getItems
  return this.items;
}


 pushItems(item:T):Array<T>{ // function for pushItems
    return [...this.items,item]
  }
  
 popItems():Array<T>{   //function for  popItems
  for(let i:number=0; i<(this.items.length); i++){
    this.newItems[i]=this.items[i];
  }
   return this.newItems;
}

shiftItems():Array<T>{ //function for shiftItems
        for(let i:number=1; i<=(this.items.length)-1; i++){
         this. newItems[i-1]=this.items[i];
        }
       return this.newItems;
}

 unshiftItems(item:T):Array<T>{ //function for unshiftItems
    return [item,...this.items]
}


insertItem(item:T,index:number):Array<T>{ //function for insertItem
  for(let i:number=0; i<(this.items.length); i++){
      if(index===i){
        this.items[i]=item
      }
       this.newItems[i]=this.items[i]

  }
  return this.newItems
}


 
findItem(item:T):T{  //function for findItem
  let chooseItem:T;
  for(let i:number=0; i<(this.items.length); i++){
        if(item===this.items[i]){
          chooseItem=item;
        }
  }
 return chooseItem;

 }



}

let array2=new Array2([5,6,7])
     array2.setItems([4,'hadeel'])
      console.log (array2.getItems())
      console.log(array2.pushItems([9,9]))
      console.log(array2.popItems())
      console.log(array2.shiftItems())
      console.log(array2.unshiftItems('t'))
      console.log(array2.insertItem('t',2))
      console.log(array2.findItem('hadeel'))
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    
   
                       
   
   
   
   
   
   
   
   
   
   