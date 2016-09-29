var app = angular.module('app');

app.filter('dateFilterWithSeconds', function ($filter) { //'MMM d yyyy'
  return function (seconds, format) {
    if(seconds==null) return "";
    var miliseconds = seconds * 1000;
    format = format ? format : 'yyyy-MM-dd';
    return $filter('date')(miliseconds, format);
  };
});

app.filter('dateFilterWithString', function ($filter) { //'EEE, MMM d'
  return function (strDate, format) {
    format = format ? format : 'yyyy-MM-dd';
    return $filter('date')(strDate, format);
  };
});

app.filter('timeFilterWithMinutes', function ($filter) {
  return function (minutes) {
    var miliseconds = new Date('2016-01-01').getTime() + minutes*60000;
    return $filter('date')(miliseconds, 'h:m a');
  };
});

app.filter('timeFilterWithSeconds', function ($filter) {
  return function (seconds) {
    var miliseconds = seconds*1000;
    return $filter('date')(miliseconds, 'h:m a');
  };
});

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

app.filter('last4', function() {
  return function(input) {
    if(!input || input.length<=4) return input;
    return input.substr(input.length - 4);
  };
});
