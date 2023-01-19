package com.chatApp.message.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Entity
public class Message {
    @Id
    private LocalDateTime date = LocalDateTime.now();
    private int senderId;
    private int receiverId;
    private String message;
    @Enumerated(EnumType.STRING)
    private Status status;
}
