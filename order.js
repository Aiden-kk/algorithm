var arrayList=[1,10,9,5,7,8,3,2,4,6];
// 冒泡排序
function bubbleOrder(list){
     if(list.length<2){
         return list;
     }
     for(var i=0;i<list.length-1;i++){
         for(var j=0;j<list.length-i-1;j++){

             if(list[j]>list[j+1]){
                 var temp=list[j];
                 list[j]=list[j+1];
                 list[j+1]=temp;

             }
         }

     }
    return list;
}


//快速排序
function quickOrder(list,start,end) {
    if (start < end) {
        var i = start;
        var j = end;
        var base = list[i];
        while (i < j) {
            while (i < j && list[j] > base) {
                j--;
            }
            list[i] = list[j];
            while (i < j && list[i] < base) {
                i++;
            }
            list[j] = list[i];
        }
        list[i] = base;

        quickOrder(list, start, i - 1);
        quickOrder(list, j + 1, end);

    }
}




console.log(arrayList);
quickOrder(arrayList,0,arrayList.length-1);
console.log(arrayList);