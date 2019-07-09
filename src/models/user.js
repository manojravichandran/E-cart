var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt');

var userschema=new Schema({
    email:{type:String,require:true},
    password:{type:String,require:true}
});
userschema.method.encryptPassword=function(password){
    return bcrypt.hashSync(password,bcrypt.genSalt(5),null);
};
userschema.methods.ValidPassword=function(password){
    return bcrypt.compareSync(password,this.password);
}



module.exports=mongoose.model('user',userschema);