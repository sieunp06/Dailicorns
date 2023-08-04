package com.sieunp06.dailicorns.Model;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;                // 유저 아이디

    @Setter
    @Column(nullable = false)
    private String password;        // 유저 패스워드

    @Setter
    @Column(nullable = false)
    private String userName;        // 유저 닉네임

    @Setter
    @Column(nullable = false)
    private String email;           // 이메일

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return id == user.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
