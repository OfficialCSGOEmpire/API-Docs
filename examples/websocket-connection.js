//Replace "YOUR API KEY HERE" with your API key
const csgoempire_api_key = "YOUR API KEY HERE";
const io = require('socket.io-client');
const axios = require('axios');

//set the authorization header for all axios requests to the CSGOEmpire API Key
axios.defaults.headers.common['Authorization'] = 'Bearer ' + csgoempire_api_key;

//function for connecting to the web socket
function connect_to_websocket() {
    console.log("Connecting to websocket...");

    //get the user data from the socket endpoint
    axios.get("https://csgoempire.com/api/v2/metadata/socket").then(function (userData) {

        //bind the data to userData
        userData = userData.data;

        //initalise socket connection
        socket = io(
            `wss://trade.csgoempire.com/trade`,
            {
                transports: ["websocket"],
                path: "/s/",
                secure: true,
                rejectUnauthorized: false,
                reconnect: true,
                extraHeaders: { 'User-agent': `${userData.user.id} API Bot` } //this lets the server know that this is a bot
            }
        );

        //used for error logging
        const engine = socket.io.engine;
        
        socket.on('connect', async () => {
            //on connection
            console.log(`Connected to websocket`);
            
            //emit the data we got earlier to the socket to identify this client as the user
            this.socket.emit('identify', {
                uid: userData.user.id,
                model: userData.user,
                authorizationToken: userData.socket_token,
                signature: userData.socket_signature
            });
            
            //listen for the following event to be emitted by the socket after we've identified the user
            socket.on('timesync', (data) => console.log(`Timesync: ` + JSON.stringify(data)));
            socket.on('new_item', (data) => console.log(`new_item: ` + JSON.stringify(data)));
            socket.on('updated_item', (data) => console.log(`updated_item: ` + JSON.stringify(data)));
            socket.on('auction_update', (data) => console.log(`auction_update: ` + JSON.stringify(data)));
            socket.on('deleted_item', (data) => console.log(`deleted_item: ` + JSON.stringify(data)));
            socket.on('trade_status', (data) => console.log(`trade_status: ` + JSON.stringify(data)));
            socket.on("disconnect", (reason) => { console.log("Socket disconnected: " + reason); });
        });

        //listen for the following event to be emitted by the socket in error cases
        engine.on("close", (reason) => {console.log("Socket closed: " + reason);});
        socket.on('error', (data) => console.log(`WS Error:`+data));
        socket.on('connect_error', (data) => console.log(`Connect Error:`+data));
    }).catch(function (error) {
        //if there was an error getting the user data
        console.log(`Axios Error:` + error);
    });
};

connect_to_websocket();
