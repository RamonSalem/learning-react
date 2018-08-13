

var objective = 1000000;
var monthlyApply = 1000;

var gain = 0.08;

var total = 0;
var yearsCount = 0;
for( total ; total <= objective ; total += monthlyApply + (total * gain/12), yearsCount++){
    console.log('Total: '+ (total).toFixed(2));
    if(yearsCount%12 === 0) console.log('Year: '+yearsCount/12);
}

console.log('Years: '+(yearsCount/12).toFixed(2));
