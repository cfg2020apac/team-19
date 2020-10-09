package com.newhope.demo.client

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "client")
class Client (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @Column(name = "user_id")
    val userId: Int,

    // basic info
    @Column(name = "first_name")
    var firstName: String,
    @Column(name = "last_name")
    var lastName: String,
    @Column(name = "date_of_birth")
    var dateOfBirth: LocalDateTime,
    var gender: String,
    var address: String,
    var phone: String,
    var email: String,
    var reason: String,

    //further info
    var income: String,
    @Column(name = "housing_status")
    var housingStatus: String,
    @Column(name = "is_smoker")
    var isSmoker: Boolean,
    @Column(name = "is_drinker")
    var isDrinker: Boolean,
    @Column(name = "mental_health")
    var mentalHealth: String,
    @Column(name = "employment_status")
    var employmentStatus: String,
    @Column(name = "education_status")
    var educationStatus: String,
    var race: String,
    var language: String, // another entity
    var willingness: String,
    @Column(name = "martial_status")
    var martialStatus: String,
    var religion: String?,

    @Column(name = "legal_service_needed")
    var legalServiceNeeded: Boolean,
    @Column(name = "job_search_needed")
    var jobSearchNeeded: Boolean,
    @Column(name = "medical_care_needed")
    var medicalCareNeeded: Boolean,
    @Column(name = "housing_help_needed")
    var housingHelpNeeded: Boolean,
    @Column(name = "financial_service_needed")
    var financialServiceNeeded: Boolean,

    val created_at: LocalDateTime = LocalDateTime.now()
)