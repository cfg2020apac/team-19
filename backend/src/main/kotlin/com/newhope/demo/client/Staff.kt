package com.newhope.demo.client

import javax.persistence.*

@Entity
@Table(name = "staff")
class Staff (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    val clientId: Int,

    val name: String,

    val type: String
)