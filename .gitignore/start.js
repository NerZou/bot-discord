const discord = require('discord.js'); 
const client = new discord.Client(); //Création d'un nouveau client discord

client.login("ODMzNjQzMTM1MzEzNzcyNTQ0.YH1Uqw.lfsB2IBHpdY13xot_Bn6QLCAPDI")

var prefixe = ("!");

client.on("message", (message) => {

    if(message.content === "bonjour"){
        message.channel.send("salutation a toi!")
    }

    if(message.content === prefixe + "help"){
        message.channel.send("Veux-tu de l'aide?")
    }});
