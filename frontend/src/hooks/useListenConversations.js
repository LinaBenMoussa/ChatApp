import { useSocketContext } from "../context/SocketContext";
import { useEffect } from "react"

const useListenConversations = () => {
    const { socket } = useSocketContext();

    useEffect(() => {
        console.log("new user connecte")

        socket?.on("new User", () => {
            console.log("new user connecte")
        });
        return () => socket?.off("new User");
}, [socket]);
}

export default useListenConversations