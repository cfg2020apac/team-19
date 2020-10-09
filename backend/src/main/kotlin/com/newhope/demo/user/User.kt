package com.newhope.demo.user

import org.springframework.data.annotation.CreatedDate
import java.time.LocalDateTime
import javax.persistence.*
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size


@Entity
@Table(name = "user")
class User (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @field:NotNull
    @field:Size(max = 90)
    @Column(nullable = false)
    val email: String,

    @field:NotNull
    @field:Size(max = 90)
    @Column(nullable = false)
    var password: String,

    @field:NotNull
    @field:Size(max = 30)
    @Column(nullable = false)
    val name: String,

    @field:CreatedDate
    @Column(nullable = false, name = "created_at")
    val createdAt: LocalDateTime = LocalDateTime.now()
)