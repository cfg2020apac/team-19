package com.newhope.demo.client

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController("/clients")
class ClientController(
    private val clientService: ClientService
) {

    @GetMapping
    fun getAllClients(): ResponseEntity<List<ClientWithDetail>> {
        return ResponseEntity.ok(clientService.getAllClients())
    }

    @PostMapping
    fun createClient(@RequestBody createClientRequest: CreateClientRequest): ResponseEntity<ClientWithDetail> {
        return ResponseEntity.ok(clientService.createClient(createClientRequest))
    }
}