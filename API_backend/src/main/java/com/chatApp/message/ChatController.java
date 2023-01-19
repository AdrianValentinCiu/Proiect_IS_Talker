package com.chatApp.message;

import com.chatApp.message.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@CrossOrigin
public class ChatController {
    @Autowired
    private ChatRepository chatRepository ;
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message receiveMessage(@Payload Message message){
        System.out.println("chatroom " + message);
        return message;
    }

    @MessageMapping("/private-message")
    public Message recMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverId() + "","/private",message);
        System.out.println("private " + message.toString());
        chatRepository.save(message);
        return message;
    }

    @GetMapping(path = "/api/v1/msg/{user_id1}/{user_id2}") //{user1}/{user2}")
    @ResponseBody
    public List<Message> allMsgBtwTwoUsers(@PathVariable Long user_id1, @PathVariable Long user_id2) {
        return chatRepository.findByMsgsData(user_id1, user_id2);
    }

    @GetMapping(path = "/api/v1/lastmsg/{user_id1}/{user_id2}") //{user1}/{user2}")
    @ResponseBody
    public Message lastMsgBtwTwoUsers(@PathVariable Long user_id1, @PathVariable Long user_id2) {
        return chatRepository.getUserLastMsg(user_id1, user_id2);
    }

    @GetMapping(path = "/api/v1/user/frd/{user_id}")
    @ResponseBody
    public List<Integer> userContact(@PathVariable Long user_id){
        return chatRepository.getUserMsg(user_id);
    }
}
