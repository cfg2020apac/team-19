package com.newhope.demo.application

import org.springframework.data.annotation.CreatedDate
import java.time.LocalDateTime
import javax.persistence.*
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size

//@Entity
//@Table(name = "application")
class Application (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @field:NotNull
    @field:Size(max = 20)
    @Column(nullable = false)
    val name: String,

    val contact: String,

    val applicationType: ApplicationType,

    val transitionShelter: String,


    @field:CreatedDate
    @Column(nullable = false, name = "created_at")
    val createdAt: LocalDateTime = LocalDateTime.now()
)