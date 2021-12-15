
class Array{
   #Items;
 
 constructor(Items){
     this.#Items=Items
 }
 setItems(Items){
     this.#Items=Items;
 
 }
 getItems(){
     return this.#Items;
 }
 
   pushItem(Item){
     return [...this.#Items,Item]
   }
 
    unshiftItem(Item){
     return [Item,...this.#Items]
 }
 
     popItem(){
         let newArray=[]
         for(let i=0; i<(this.#Items.length)-2; i++){
           newArray[i]=this.Items[i];
         }
        return newArray
 }
 
 shiftItem(){
   let newArray=[]
         for(let i=1; i<(this.#Items.length)-1; i++){
           newArray[i-1]=this.Items[i];
         }
        return newArray;
 }
 
   insertItem(Item,index){
       let originArray=this.getItems()
 
       let newArray=[]
 
         for(let i=0; i<(originArray.length)-1; i++){
             if(index===i){
              originArray[i]=Item
             }
                newArray[i]=originArray[i]
 
         }
        return newArray
 }
 
 
 }
 
 
 let array=new Array(['apple','panana']);
       console.log(array1.getItems()) 
       console.log(array1.pushItem('poteto'))
       console.log(array1.shiftItem())
       console.log(array1.unshiftItem('salt'))
       console.log(array1.insertItem('egg',2))
 
 
 