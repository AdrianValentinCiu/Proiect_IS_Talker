package com.chatApp.message;

import com.chatApp.message.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Message, Date>{
    @Query(nativeQuery = true, value = "EXEC dbo.get_user_msg ?1, ?2")
    public List<Message> findByMsgsData(Long user1, Long user2);

    @Query(nativeQuery = true, value = "EXEC dbo.usr_contacts ?1")
    public List<Integer> getUserMsg(Long user);

    @Query(nativeQuery = true, value = "EXEC dbo.usr_last_msg ?1, ?2")
    public Message getUserLastMsg(Long user1, Long user2);
}
