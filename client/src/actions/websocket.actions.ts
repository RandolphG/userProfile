import config from "../api/config";
let socket: WebSocket;
const sockets: WebSocket[] = [];

export function openLiveConnection(symbols: string[]) {
  if (!socket && symbols.length > 0) {
    console.log("openLiveConnection", symbols);
    socket = new WebSocket(config.wss);

    socket.onopen = () => {
      symbols.map((s) =>
        socket.send(JSON.stringify({ type: "subscribe", symbol: s }))
      );
      sockets.push(socket);
    };

    socket.onmessage = (event) =>
      console.log("Message from server ", event.data);

    socket.onclose = () => console.log("SOCKET CLOSED ", socket.OPEN);
  }
}

// Unsubscribe
export function closeLiveConnection(symbols: string[]) {
  sockets.forEach((s: WebSocket) => {
    if (socket && socket.readyState === socket.OPEN) {
      symbols.map((s) =>
        socket.send(JSON.stringify({ type: "unsubscribe", symbol: s }))
      );
      s.close();
    }
  });
}

/*const waitForOpenSocket = (socket: WebSocket) => {
  return new Promise((resolve) => {
    if (socket.readyState !== socket.OPEN) {
      socket.onopen = () => {
        resolve(true);
      };
    } else {
      resolve(false);
    }
  });
};

async function sendMessage(socket: WebSocket, msg: string) {
  await waitForOpenSocket(socket);
  socket.send(msg);
}*/
