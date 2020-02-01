// number max that calculater can calculate 2,147,483,647 after that right "overflow only can calculate until 32 bits"

 function insert(num){
                document.form.textview.value = document.form.textview.value+num
            }
            function equal(){
                var exp = document.form.textview.value
                if(exp){
                    document.form.textview.value = eval(exp)
                }
            }
            function clean(){
                document.form.textview.value = ""

            }
            function back(){
                var exp = document.form.textview.value
                document.form.textview.value = exp.substring(0,exp.length-1)
            }