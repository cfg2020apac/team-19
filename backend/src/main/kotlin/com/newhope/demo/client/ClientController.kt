package com.newhope.demo.client

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/clients")
class ClientController(
    private val clientService: ClientService,
    private val serviceService: ServiceService
) {

    @GetMapping
    fun getAllClients(): ResponseEntity<List<ClientWithDetail>> {
        return ResponseEntity.ok(clientService.getAllClients())
    }

    @GetMapping("/{userId}")
    fun getAllClientsByUserId(@PathVariable userId: Int): ResponseEntity<List<ClientWithDetail>> {
        return ResponseEntity.ok(clientService.getAllClientsByUserId(userId))
    }

    @PostMapping
    fun createClient(
        @RequestBody createClientRequest: CreateClientRequest,
        @RequestBody userId: Int
    ): ResponseEntity<ClientWithDetail> {
        return ResponseEntity.ok(clientService.createClient(userId, createClientRequest))
    }

    @PutMapping
    fun updateClient(
        @RequestBody createClientRequest: CreateClientRequest,
        @RequestBody clientID: Int
    ): ResponseEntity<ClientWithDetail> {
        return ResponseEntity.ok(clientService.updateClient(clientID, createClientRequest))
    }

    @PostMapping("/service")
    fun createService(request: ServiceCreateRequest): ResponseEntity<Service> {
        return ResponseEntity.ok(serviceService.createDefaultService(request.clientId, request.type))
    }

    @PutMapping("/service")
    fun updateServiceStatus(request: ServiceUpdateRequest): ResponseEntity<Service> {
        return ResponseEntity.ok(serviceService.updateServiceStatus(request.serviceId, request.clientId, request.content))
    }
}