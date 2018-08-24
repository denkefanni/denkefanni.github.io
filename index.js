$(document).ready(function(){
    $('#button').click(function(){
        var emptycount=0
        var valuetype
        var result
        if ($('#cost').val()==''){
            emptycount++
        }
        if ($('#margin').val()==''){
            emptycount++
        }
        if ($('#price').val()==''){
            emptycount++
        }
        if (emptycount!=1){
            alert('Fannika kettőt kell kitölteni!')
        }
        if (emptycount==1){
            if ($('#cost').val()==''){
                valuetype='Cost'
                result=$('#price').val()*(1-$('#margin').val()/100)
                $('#valuetype').text(valuetype)
                $('#result').text(result)
            }
            if ($('#margin').val()==''){
                valuetype='Margin'
                result=(1-$('#cost').val()/($('#price').val()))*100
                $('#valuetype').text(valuetype)
                $('#result').text(result+'%')
            }
            if ($('#price').val()==''){
                valuetype='Price'
                result=$('#cost').val()/(1-$('#margin').val()/100)
                $('#valuetype').text(valuetype)
                $('#result').text(result)            }
        }
    });
});