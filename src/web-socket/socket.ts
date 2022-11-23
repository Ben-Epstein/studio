interface WebSocketServerProps {
  url: string;
  pingResponse: any;
  heartbeatResponse: any;
  runningNode: any;
  failedNodes: any;
  failureReason: any;
}
export class WebSocketServer {
  private server: WebSocket;
  private pingResponse: any;
  private heartbeatResponse: any;
  private runningNode: any;
  private failedNodes: any;
  private failureReason: any;
  constructor({
    url,
    pingResponse,
    heartbeatResponse,
    runningNode,
    failedNodes,
    failureReason,
  }: WebSocketServerProps) {
    this.pingResponse = pingResponse;
    this.heartbeatResponse = heartbeatResponse;
    this.runningNode = runningNode;
    this.failedNodes = failedNodes;
    this.failureReason = failureReason;
    this.server = new WebSocket(url);
    this.init();
  }
  init() {
    console.log(" socket readystate: ", this.server.readyState);
    this.server.onmessage = (ev) => {
      let data = JSON.parse(ev.data);
      // console.log("data received: ", data.type === "heartbeat_response");
      switch (data.type) {
        case "heartbeat_response":
          if (this.heartbeatResponse) {
            if (this.failureReason) {
              this.failureReason(data.failureReason);
            }
            if (this.failedNodes) {
              this.failedNodes(data.failed);
            }
            if (this.pingResponse) {
              this.pingResponse(data.msg);
            }
            if (this.runningNode) {
              this.runningNode(data.running);
            }
            this.heartbeatResponse(data);
          }
          break;
        case "ping_response":
          if (this.failureReason) {
            this.failureReason(data.failureReason);
          }
          if (this.failedNodes) {
            this.failedNodes(data.failed);
          }
          if (this.pingResponse) {
            this.pingResponse(data.msg);
          }
          if (this.runningNode) {
            this.runningNode(data.running);
          }
          break;
        case "connection_established":
          this.server.send(
            JSON.stringify({
              type: "ping",
            })
          );
          break;

        default:
          console.log(" default data type: ", data);
          break;
      }
    };
  }
  disconnect() {
    this.server.close(0);
  }
  emit(data: string) {
    this.server.send(
      JSON.stringify({
        type: data,
      })
    );
  }
  isConnected() {
    return this.server.readyState;
  }
}
