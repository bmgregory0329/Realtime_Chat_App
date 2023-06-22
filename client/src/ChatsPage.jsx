import { PrettyChatWindow } from "react-chat-engine-pretty";
import config from "../config/config.json";

const CHAT_ENGINE_PROJECT_ID = config.env.CHAT_ENGINE_PROJECT_ID;

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
