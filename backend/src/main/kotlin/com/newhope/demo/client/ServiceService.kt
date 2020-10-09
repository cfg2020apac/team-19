package com.newhope.demo.client

import org.springframework.stereotype.Service

@Service
class ServiceService (
    private val serviceRepository: ServiceRepository
) {
    fun createDefaultService(clientId: Int, type: String) {
        serviceRepository.save(com.newhope.demo.client.Service(
            clientId = clientId,
            type = type,
            progress = "not allocated yet",
            result = "",
            notes = ""
        ))
    }

    fun getAllServicesByClientId(clientId: Int): List<com.newhope.demo.client.Service> {
        return serviceRepository.findAllByClientId(clientId)
    }
}