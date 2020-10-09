package com.newhope.demo.client

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ClientRepository: JpaRepository<Client, Int> {
    fun findAllByUserId(userId: Int): List<Client>
}