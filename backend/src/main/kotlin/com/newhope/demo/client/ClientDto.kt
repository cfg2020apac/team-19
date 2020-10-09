package com.newhope.demo.client

import java.time.LocalDateTime
import javax.persistence.Column

data class CreateClientRequest(
    val firstName: String,
    val lastName: String,
    val dateOfBirth: LocalDateTime,
    val gender: String,
    val address: String,
    val phone: String,
    val email: String,
    val reason: String,

    //further info
    val income: String,
    val housingStatus: String,
    val isSmoker: Boolean,
    val isDrinker: Boolean,
    val mentalHealth: String,
    val employmentStatus: String,
    val educationStatus: String,
    val race: String,
    val language: String,
    val willingness: String,
    val martialStatus: String,
    val religion: String?,

    val legalServiceNeeded: Boolean,
    val jobSearchNeeded: Boolean,
    val medicalCareNeeded: Boolean,
    val housingHelpNeeded: Boolean,
    val financialServiceNeeded: Boolean
)

data class ClientWithDetail(
    val client: Client,
    val documents: List<Document>,
    val services: List<Service>,
    val staffs: List<Staff>
)