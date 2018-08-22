export function generateProductKey() {
    
    function getRandomInt( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
   }


    var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        chars = 5,
        segments = 4,
        keyString = "";
        
    for( var i = 0; i < segments; i++ ) {
        var segment = "";
        
        for( var j = 0; j < chars; j++ ) {
            var k = getRandomInt( 0, 35 );
            segment += tokens[ k ];
        }
        
        keyString += segment;
        
        if( i < ( segments - 1 ) ) {
            keyString += "-";
        }
    }
    
    return keyString;

} 



export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};