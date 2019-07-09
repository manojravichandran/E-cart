var Product=require('../models/product');
var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });
var products=[new Product({
imagePath:'https://images7.alphacoders.com/675/thumb-350-675780.jpg',
title:'teenwolf',
desc:'good',
price:20
    
}),
new Product({
    imagePath:'https://images4.alphacoders.com/242/thumb-350-242556.png',
    title:"got",
    desc:"very good",
    price:23
        
    }),
    new Product({
        imagePath:'https://images.alphacoders.com/107/thumb-350-107013.jpg',
        title:"vampire",
        desc:"good",
        price:20
            
        }),
];
var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){

        done++;
        if(done === products.length){
            exit();
        }
    });

}
function exit(){
mongoose.disconnect();
}