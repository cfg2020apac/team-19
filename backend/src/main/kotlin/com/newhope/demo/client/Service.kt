package com.newhope.demo.client

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "service")
class Service(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    val clientId: Int,

    val type: String,

    var progress: String,

    val result: String,

    val notes: String?,

    val updated_at: LocalDateTime = LocalDateTime.now()
)