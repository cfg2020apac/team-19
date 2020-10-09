package com.newhope.demo.client

import javassist.NotFoundException
import org.springframework.stereotype.Service

@Service
class ServiceService(
    private val serviceRepository: ServiceRepository
) {
    fun createDefaultService(clientId: Int, type: String): com.newhope.demo.client.Service {
        return serviceRepository.save(
            com.newhope.demo.client.Service(
                clientId = clientId,
                type = type,
                progress = "not allocated yet",
                result = "",
                notes = ""
            )
        )
    }

    fun getAllServicesByClientId(clientId: Int): List<com.newhope.demo.client.Service> {
        return serviceRepository.findAllByClientId(clientId)
    }

    fun updateServiceStatus(serviceId: Int, clientId: Int, content: String): com.newhope.demo.client.Service {
        val service =
            serviceRepository.findByIdAndClientId(serviceId, clientId) ?: throw NotFoundException("service not found")
        return serviceRepository.save(service.apply { progress = content })
    }
}