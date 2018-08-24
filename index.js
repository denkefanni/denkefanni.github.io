$(document).ready(function () {
    $('#button').click(function () {
        var emptycount = 0
        var valuetype
        var result
        if ($('#cost').val() == '') {
            emptycount++
        }
        if ($('#margin').val() == '') {
            emptycount++
        }
        if ($('#price').val() == '') {
            emptycount++
        }
        if (emptycount != 1) {
            alert('Fannika kettőt kell kitölteni!')
        }
        if (emptycount == 1) {
            if ($('#cost').val() == '') {
                var result
                if ($('#inputGroupSelect01').val() == 'Percentage') {
                    valuetype = 'Cost'
                    result = $('#price').val() * (1 - $('#margin').val() / 100)
                    $('#valuetype').text(valuetype)
                    $('#result').text(result)
                }
                if ($('#inputGroupSelect01').val() == 'Number') {
                    valuetype = 'Cost'
                    var x = Number($('#price').val())
                    var y = Number($('#margin').val())
                    result = x-y
                    $('#valuetype').text(valuetype)
                    $('#result').text(result)
                }
            }
            if ($('#margin').val() == '') {
                var result
                valuetype = 'Margin'
                result = (1 - $('#cost').val() / ($('#price').val())) * 100
                $('#valuetype').text(valuetype)
                $('#result').text(result + '%')
            }
            if ($('#price').val() == '') {
                var result
                if ($('#inputGroupSelect01').val() == 'Percentage') {
                    valuetype = 'Price'
                    result = $('#cost').val() / (1 - $('#margin').val() / 100)
                    $('#valuetype').text(valuetype)
                    $('#result').text(result)
                }
                if ($('#inputGroupSelect01').val() == 'Number') {
                    valuetype = 'Price'
                    var x = Number($('#cost').val())
                    var y = Number($('#margin').val())
                    result = x+y
                    $('#valuetype').text(valuetype)
                    $('#result').text(result)
                }
            }
        }
    });
});