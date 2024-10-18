
import {Server} from 'socket.io'

let io
export const socketConnection = async(httpServer)=>{
  try {
    io = new Server(httpServer, {
             path:'/socket.io/chat',
             cors: {
               origin:"https://drivee.online",
             },
           });
    io.on('connection',(socket)=>{
      // console.log('socker server connected',socket);
    socket.on('driver-chat-connect',(tripId)=>{
      socket.join(tripId)
      console.log(' driver connecected room',tripId);


    })
    socket.on('user-chat-connect',(tripId)=>{
      socket.join(tripId)
      console.log(' user connected room',tripId)
    })
    })       
    
  } catch (error) {
    console.error(error);
    
  }
}

export const sendMessage = (event,data,roomId)=>{
  console.log('roomId',roomId);
  console.log(event ,data);
io.to(roomId).emit(event,data)
return
}