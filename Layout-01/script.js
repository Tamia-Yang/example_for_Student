var 자료 = {
  data : [1,2,3,4,5],

  }

  자료.전부더하기 = function(){
    let resu = [...자료.data];

    addresult = 0;
    for(i = 0; i< resu.length; i++){
      addresult = i + addresult;
      console.log(addresult)
    }
  }
  자료.전부더하기();

