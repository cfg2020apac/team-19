package com.newhope.demo.client

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface StaffRepository: JpaRepository<Staff, Int> {
    fun findAllByClientId(clientID: Int): List<Staff>
}