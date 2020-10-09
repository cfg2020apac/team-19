package com.newhope.demo.client

import org.springframework.stereotype.Service

@Service
class ClientService(
    private val clientRepository: ClientRepository,
    private val serviceService: ServiceService,
    private val documentService: DocumentService,
    private val staffService: StaffService
) {
    fun createClient(createClientRequest: CreateClientRequest): ClientWithDetail {
        val client = clientRepository.save(
            Client(
                firstName = createClientRequest.firstName,
                lastName = createClientRequest.lastName,
                dateOfBirth = createClientRequest.dateOfBirth,
                gender = createClientRequest.gender,
                address = createClientRequest.address,
                phone = createClientRequest.phone,
                email = createClientRequest.email,
                reason = createClientRequest.reason,
                income = createClientRequest.income,
                housingStatus = createClientRequest.housingStatus,
                isDrinker = createClientRequest.isDrinker,
                isSmoker = createClientRequest.isSmoker,
                mentalHealth = createClientRequest.mentalHealth,
                employmentStatus = createClientRequest.employmentStatus,
                educationStatus = createClientRequest.educationStatus,
                race = createClientRequest.race,
                language = createClientRequest.language,
                willingness = createClientRequest.willingness,
                martialStatus = createClientRequest.martialStatus,
                religion = createClientRequest.religion,

                financialServiceNeeded = createClientRequest.financialServiceNeeded,
                housingHelpNeeded = createClientRequest.housingHelpNeeded,
                jobSearchNeeded = createClientRequest.jobSearchNeeded,
                legalServiceNeeded = createClientRequest.legalServiceNeeded,
                medicalCareNeeded = createClientRequest.medicalCareNeeded
            )
        )

        if (createClientRequest.financialServiceNeeded) {
            serviceService.createDefaultService(clientId = client.id, type = "financial service")
        }
        if (createClientRequest.housingHelpNeeded) {
            serviceService.createDefaultService(clientId = client.id, type = "housing help")
        }
        if (createClientRequest.jobSearchNeeded) {
            serviceService.createDefaultService(clientId = client.id, type = "job search")
        }
        if (createClientRequest.legalServiceNeeded) {
            serviceService.createDefaultService(clientId = client.id, type = "legal service")
        }
        if (createClientRequest.medicalCareNeeded) {
            serviceService.createDefaultService(clientId = client.id, type = "medical care")
        }

        return ClientWithDetail(
            client = client,
            documents = documentService.getDocumentsByClientId(client.id),
            services = serviceService.getAllServicesByClientId(client.id),
            staffs = staffService.findAllStaffByClientId(clientId = client.id)
        )
    }

    fun getAllClients(): List<ClientWithDetail> {
        val clients = clientRepository.findAll()
        return clients.map {
            ClientWithDetail(
                client = it,
                documents = documentService.getDocumentsByClientId(it.id),
                services = serviceService.getAllServicesByClientId(it.id),
                staffs = staffService.findAllStaffByClientId(clientId = it.id)
            )
        }
    }
}