package com.newhope.demo.client

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ServiceRepository: JpaRepository<Service, Int> {
    fun findAllByClientId(clientId: Int): List<Service>
    fun findByIdAndClientId(id:Int, clientId: Int): Service?
}