$(document).ready(function(){
    var parseApplicationId = 'YyLJnkVPee4VPzxCdfjQ4GvATnwQ8Z76V4YNp34i';
    var parseJavaScriptKey = 'Gs4hCVy02JR3fO33EvrRhqY7f7V0IW449SLjYqSV';

    Parse.initialize(parseApplicationId, parseJavaScriptKey);
    var Test = Parse.Object.extend('Text');
    var test = new Test();

    $('.btn-save').click(function(){
        try {
            var data = JSON.parse($('textarea').val())
        } catch(e) {
            alert('Invalid JSON')
        }
        if(!data) return false;
        test.save(data, {
        success: function(object) {
            console.log('Parse.com object is saved: ', object);
            $('.log').html(JSON.stringify(object, null, 2));
            // Alternatively you could use alert('Parse.com object is saved')
        },
        error: function(object) {
            console.log('Error! Parse.com object is not saved: ', object);
        }
    });
    });
});