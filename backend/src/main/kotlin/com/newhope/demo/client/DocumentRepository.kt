package com.newhope.demo.client

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DocumentRepository: JpaRepository<Document, Int> {
    fun findAllByClientId(clientId: Int): List<Document>
}