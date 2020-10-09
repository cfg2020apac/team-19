package com.newhope.demo.client

import org.springframework.stereotype.Service

@Service
class StaffService (
    private val staffRepository: StaffRepository
) {
    fun findAllStaffByClientId(clientId: Int): List<Staff> {
        return staffRepository.findAllByClientId(clientId)
    }
}