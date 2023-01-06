function Hitung(dat1,dat2,dat3,dat4,dat5,dat6){
    var total,totalrat;
    total = dat1+dat2+dat3+dat4+dat5+dat6;
  
    totalrat = total / 6;
    return totalrat;
}

          function InputData(Bilangan){
            var data;
              data = parseFloat(document.getElementById(Bilangan).value);
            return data;
          }
        
          function Output(data){
              document.getElementById("rata_rata").innerHTML = data;
          }
        
          function Ratarata(){
            //Deklarasi Variable
            var dat1,dat2,dat3,dat4,dat5,dat6,ratarata;
            //Input
            dat1  = InputData("alpro");
            dat2  = InputData("bd");
            dat3  = InputData("ppn");
            dat4  = InputData("pti");
            dat5  = InputData("mtk");
            dat6  = InputData("bing");
            //Proses
            ratarata = Hitung(dat1,dat2,dat3,dat4,dat5,dat6);
            //OutPut
            Output(ratarata);
          }
        