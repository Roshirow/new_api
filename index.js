var getStuff = 'https://randomfox.ca/floof/';

var setStuff = {};

var doStuff = function(data){
  
 showStuff (data);
  
};

$.getJSON( getStuff, setStuff, doStuff);

var showStuff = function(data) {console.log(data[0].url);
                                
                                $('img').attr( 'src' , data.url  );
                                
       }