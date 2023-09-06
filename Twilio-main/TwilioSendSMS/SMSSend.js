//Windows CMD
//set TWILIO_AUTH_TOKEN=<Auth token value>
//set TWILIO_ACCOUNT_SID=<Account sid>

//Unix 
//$ TWILIO_AUTH_TOKEN=<Auth token value>
//$ TWILIO_ACCOUNT_SID=<Account sid>

callInitSendSMS();

async function callInitSendSMS() {
	
	const accountSid = "AC18d83870cf33587f4f5663feeb833891" //process.env.TWILIO_ACCOUNT_SID;
	const authToken = "60773bfc9c914709306641824cad041f" //process.env.TWILIO_AUTH_TOKEN;
	
	const client = require('twilio')(accountSid, authToken);
	
	
	return new Promise((resolve,reject)=>{
		client.messages
		  .create({
			 body: "Hello There",
			 from: "+19285694850", //Your Broadcast number
			 to: "+919905301131", //User Phone number
			 statusCallback:"https://bcb2-202-176-0-82.ngrok.io/status" //ngrok url if you like to capture delivery status. Refer SMSCaptureStatus.js
		   })
		   
		  .then((message) => {
			  console.log(message.sid);
			  resolve( message.sid)
		  });
	});
	
	
}