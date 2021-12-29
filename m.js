const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

let {api_id,api_hash,session,groupID} = require("./config");





session = new StringSession(session);

const client = new TelegramClient(session,api_id, api_hash, {});

(async function run() {
  await client.connect();

  let m = await input.text("Type your massage : ");


  groupID.map((id)=>{

    client.invoke(
      new Api.messages.SendMessage({
        peer: id,
        message: m
      })
    );

  })


  console.log("Message sent successfully");

  let isAgain = await input.text("If want to send massage again? Please type <yes> <y> <Y> <YES> : ");

  if(isAgain == "yes" || isAgain == "YES" || isAgain == "y" || isAgain == "Y"){
    run();

  }
  else{
      process.exit(1);
  }


})();

