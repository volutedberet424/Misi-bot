const Discord = require('discord.js');
const bot = new Discord.Client



counter = 0;

bot.on('ready', () =>{
    console.log('mostantol szamolok')
    console.log('#####################')
    console.log('#                   #')
    console.log('#Bot by:Volutedberet#')
    console.log('#                   #')
    console.log('#####################')
    client.user.setActivity("Prefix: m!") 
})

bot.on('message', msg=>{
   if( msg.content === "misi meleg"){
       msg.reply('+1')
       console.log('+1')
       counter+=1
   }else
   if( msg.content === "misi buzi"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "misi homokos"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "misi homár"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "misi hombár"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "misi homar"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "misi hombar"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "m!számláló"){
    msg.reply(counter)
    console.log('valaki kerte a szamlalot')
    
}else
if( msg.content === "m!szamlalo"){
    msg.reply(counter)
    console.log('valaki kerte a szamlalot')
    
}else
    if( msg.content === "m! számláló"){
    msg.reply(counter)
    console.log('valaki kerte a szamlalot')
    
}else
if( msg.content === "m! szamlalo"){
    msg.reply(counter)
    console.log('valaki kerte a szamlalot')
    
}else
if( msg.content === "m!készitő"){
    msg.reply('A botot volutedberet készitette verzió: 0.1 ')
    console.log('infok')
    
}else
    if( msg.content === "m! készitő"){
    msg.reply('A botot volutedberet készitette verzió: 0.1 ')
    console.log('infok')
    
}else
if( msg.content === "meleg misi"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "buzi misi"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "hombár misi"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "homár misi"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "homokos misi"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "homi misi"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "misi homi"){
    msg.reply('+1')
    console.log('+1')
    counter+=1
}else
if( msg.content === "m!parancsok"){
    msg.reply('készitő, parancsok, info, számláló, invite, prefix: m!')
    
}else
if( msg.content === "m!info"){
    msg.reply('a bot nem csak ezt a szervert nézi hanem az összeset tehát ha valahol valaki irja hogy misi buzi vagy hasonló akkor azt is számolom')
   
}else
if( msg.content === "m!invite"){
    msg.reply('ezzel az inviteal behívhatod a szerveredre a botomat: https://discord.com/oauth2/authorize?client_id=711358034474958858&scope=bot&permissions=0')
   
}else
if( msg.content === "m! parancsok"){
    msg.reply('készitő, parancsok, info, számláló, invite, prefix: m!')
    
}else
if( msg.content === "m! info"){
    msg.reply('a bot nem csak ezt a szervert nézi hanem az összeset tehát ha valahol valaki irja hogy misi buzi vagy hasonló akkor azt is számolom')
   
}else
if( msg.content === "m! invite"){
    msg.reply('ezzel az inviteal behívhatod a szerveredre a botomat: https://discord.com/oauth2/authorize?client_id=711358034474958858&scope=bot&permissions=0')
   
}


})

bot.login(process.env.token);
