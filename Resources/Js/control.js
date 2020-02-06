// number max that calculater can calculate  after that right "overflow only can calculate until 32 bits"

 function insert(num){
      if((document.form.textview.value+num)>2147483647 || (document.form.textview.value+num)<-2147483647){
                document.form.textview.value = "Overflow! Max is 32bits."
                
            }
     else{
           if((num=="+" || num=="-"|| num=="*"|| num=="."|| num=="%"|| num=="/")){
              
               document.form.textview.value = document.form.textview.value+num
            }
         else{
              try {
                        eval(document.form.textview.value+num)
                        } catch (e) {
                            if (e instanceof SyntaxError) {
                                exp = "Impossible to calculate!"
                                document.form.textview.value = exp
                            }else {
        throw( e );
    }
                             
                            
                            
                        }
            
         if((eval(document.form.textview.value+num))>2147483647 || (eval(document.form.textview.value+num))<-2147483647){
                document.form.textview.value = "Overflow! Max is 32bits."
               }
             else{
                 document.form.textview.value = document.form.textview.value+num
             }
                 }
               
     }
 }
            function equal(){
                var exp = document.form.textview.value
              
                if(exp){
                    try {
                        eval(exp)
                        } catch (e) {
                            
                            if (e instanceof SyntaxError) {
                                
                                exp = "Impossible to calculate!"
                                document.form.textview.value = exp
                            }
                             else {
        throw( e );
    }
                            
                            
                        }
            
                
                  }  
            }
            function clean(){
                document.form.textview.value = ""

            }
            function back(){
                var exp = document.form.textview.value
                document.form.textview.value = exp.substring(0,exp.length-1)
            }