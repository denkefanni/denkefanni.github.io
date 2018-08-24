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
                    marginText = 'Margin in Number'
                    result = $('#price').val() * (1 - $('#margin').val() / 100)
                    marginpercent = $('#price').val() * $('#margin').val() / 100
                    $('#valuetype').text(valuetype)
                    $('#result').text(result)
                    $('#marginText').text(marginText)
                    $('#marginpercent').text(marginpercent)
                }
                if ($('#inputGroupSelect01').val() == 'Number') {
                    valuetype = 'Cost'
                    marginText = 'Margin in %'
                    var x = Number($('#price').val())
                    var y = Number($('#margin').val())
                    result = x - y
                    marginpercent = y / x * 100
                    $('#valuetype').text(valuetype)
                    $('#result').text(result)
                    $('#marginText').text(marginText)
                    $('#marginpercent').text(marginpercent)
                }
            }
            if ($('#margin').val() == '') {
                var result
                valuetype = 'Margin in %'
                marginText = 'Margin in Number'
                result = (1 - $('#cost').val() / ($('#price').val())) * 100
                marginpercent = $('#price').val() * result / 100
                $('#valuetype').text(valuetype)
                $('#result').text(result + '%')
                $('#marginText').text(marginText)
                $('#marginpercent').text(marginpercent)
            }
            if ($('#price').val() == '') {
                var result
                if ($('#inputGroupSelect01').val() == 'Percentage') {
                    valuetype = 'Price'
                    marginText = 'Margin in Number'
                    result = $('#cost').val() / (1 - $('#margin').val() / 100)
                    marginpercent = result * $('#margin').val() / 100
                    $('#valuetype').text(valuetype)
                    $('#result').text(result)
                    $('#marginText').text(marginText)
                    $('#marginpercent').text(marginpercent)
                }
                if ($('#inputGroupSelect01').val() == 'Number') {
                    valuetype = 'Price'
                    marginText = 'Margin in %'
                    var x = Number($('#cost').val())
                    var y = Number($('#margin').val())
                    result = x + y
                    marginpercent = y / result * 100
                    $('#valuetype').text(valuetype)
                    $('#result').text(result)
                    $('#marginText').text(marginText)
                    $('#marginpercent').text(marginpercent)
                }
            }
        }
    });
});