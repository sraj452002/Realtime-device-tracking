
const socket = io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        const {latitude,longitude} = position.coords;
        socket.emit("send location data", {latitude,longitude});
    },(error)=>{
        console.log(error);
    },{
        enableHighAccuracy:true,
        maximumAge:0,
        timeout:5000
    }
    )
}

const map = L.map("map").setView([0, 0], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


const markers ={}

socket.on("receive location data",(data)=>{
    const {latitude,longitude,id} = data;
    map.setView([latitude,longitude],16);
    if(markers[id]){
        markers[id].setLatLng([latitude,longitude]);
    }else{
        markers[id] = L.marker([latitude,longitude]).addTo(map);
    }
})

socket.on("user disconnected", () => {

    if (markers[id]) {
        map.remoneLayer(markers[id]);
        delete markers[id];
    }
    
})