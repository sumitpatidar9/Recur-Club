import { Server as SocketIO } from 'socket.io';
import fs from 'fs';
import path from 'path';

export const initializeVideoServer = (server) => {
    console.log('initializeVideoServer called');  

    const io = new SocketIO(server, {
        cors: {
            origin: 'http://localhost:3000', 
            methods: ['GET', 'POST'],
        },
    });

    
    io.of('/video').on('connection', (socket) => {
        console.log('Client connected to video stream');
  
        socket.on('video-stream', (data) => {
            console.log('Received video stream frame');
            const base64Data = data.replace(/^data:image\/webp;base64,/, '');
            const filename = `frame_${Date.now()}.webp`;
            const filepath = path.join('video_frames', filename);


            fs.writeFile(filepath, base64Data, 'base64', (err) => {
                if (err) {
                    console.error('Error saving video frame:', err);
                } else {
                    console.log(`Saved frame to ${filepath}`);
                }
            });
        });


        socket.on('disconnect', () => {
            console.log('Client disconnected from video stream');
        });
    });
};
