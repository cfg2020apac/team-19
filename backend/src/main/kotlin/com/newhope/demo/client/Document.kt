package com.newhope.demo.client

import javax.persistence.*


@Entity
@Table(name = "document")
class Document (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    val clientId: Int,

    val type: String,

    val s3Key: String
)