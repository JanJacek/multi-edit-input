/* imports */
// libraries
import { defineStore } from 'pinia';
import { io, Socket } from 'socket.io-client';
import { SocketIOProvider } from 'y-socket.io';
import * as Y from 'yjs';
// utils
// types
// stores
// components

/* script*/
const serverURL = 'http://localhost:3000';
export const exampleStore = defineStore('counter', {
  state: (): {
    ydoc: Y.Doc;
    socket: Socket;
    provider: SocketIOProvider | null;
    randomUsers: { name: string; color?: string }[];
  } => ({
    ydoc: new Y.Doc(),
    socket: io(serverURL),
    provider: null,
    randomUsers: [
      { name: 'Alice', color: '#515151' },
      { name: 'Bob', color: '#515151' },
      { name: 'Charlie', color: '#515151' },
      { name: 'Dave', color: '#515151' },
      { name: 'Eve', color: '#515151' },
    ],
  }),
  getters: {
    pickUpRandomUser(): { name: string; id: number } {
      // id has to be unique
      const id = Math.floor(Math.random() * 100000);
      return {
        ...this.randomUsers[
          Math.floor(Math.random() * this.randomUsers.length)
        ],
        id,
      };
    },
  },
  actions: {
    runProvider() {
      this.provider = new SocketIOProvider(serverURL, '2023', this.ydoc, {
        autoConnect: true,
      });
      // this.provider.on('status', ({ status }: { status: string }) => {
      //   console.log(status); // Logs "connected" or "disconnected"
      // });
    },
  },
});
