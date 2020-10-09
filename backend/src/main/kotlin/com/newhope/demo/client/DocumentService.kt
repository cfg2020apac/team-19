package com.newhope.demo.client

import org.springframework.stereotype.Service

@Service
class DocumentService(
    private val documentRepository: DocumentRepository
) {
    fun getDocumentsByClientId(clientId: Int): List<Document> {
        return documentRepository.findAllByClientId(clientId)
    }
}