




class Array1{
    private  items:Array<any>;
   
   constructor(members:Array<any>){
       this.items=members
   }
   setItems(members:Array<any>):void{
       this.items=members;
   
   }
   getItems():Array<any>{
       return this.items;
   }
   
     pushItem(item:any):Array<any>{
       return [...this.items,item]
     }
   
      unshiftItem(item:any):Array<any>{
       return [item,...this.items]
   }
   
       popItem():Array<any>{
           let newArray:Array<any>=[]
           for(let i:number=0; i<(this.items.length)-2; i++){
             newArray[i]=this.items[i];
           }
          return newArray;
   }
   
   shiftItem():Array<any>{
     let newArray:Array<any>=[]
           for(let i:number=1; i<(this.items.length)-1; i++){
             newArray[i-1]=this.items[i];
           }
          return newArray;
   }
   
     insertItem(member:any,index:number):Array<any>{
         let originArray:Array<any>=this.getItems()
   
         let newArray:Array<any>=[]
   
           for(let i:number=0; i<(originArray.length)-1; i++){
               if(index===i){
                originArray[i]=member
               }
                  newArray[i]=originArray[i]
   
           }
          return newArray
   }
   
   
   }
   
   
   let array1=new Array1(['apple','panana']);
         console.log(array1.getItems()) 
         console.log(array1.pushItem('poteto'))
         console.log(array1.shiftItem())
         console.log(array1.unshiftItem('salt'))
         console.log(array1.insertItem('egg',2))
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
                       
   
   
   
   
   
   
   
   
   
   