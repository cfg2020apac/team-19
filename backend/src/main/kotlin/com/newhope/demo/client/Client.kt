package com.newhope.demo.client

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "client")
class Client (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    // basic info
    @Column(name = "first_name")
    val firstName: String,
    @Column(name = "last_name")
    val lastName: String,
    @Column(name = "date_of_birth")
    val dateOfBirth: LocalDateTime,
    val gender: String,
    val address: String,
    val phone: String,
    val email: String,
    val reason: String,

    //further info
    val income: String,
    @Column(name = "housing_status")
    val housingStatus: String,
    @Column(name = "is_smoker")
    val isSmoker: Boolean,
    @Column(name = "is_drinker")
    val isDrinker: Boolean,
    @Column(name = "mental_health")
    val mentalHealth: String,
    @Column(name = "employment_status")
    val employmentStatus: String,
    @Column(name = "education_status")
    val educationStatus: String,
    val race: String,
    val language: String, // another entity
    val willingness: String,
    @Column(name = "martial_status")
    val martialStatus: String,
    val religion: String?,

    @Column(name = "legal_service_needed")
    val legalServiceNeeded: Boolean,
    @Column(name = "job_search_needed")
    val jobSearchNeeded: Boolean,
    @Column(name = "medical_care_needed")
    val medicalCareNeeded: Boolean,
    @Column(name = "housing_help_needed")
    val housingHelpNeeded: Boolean,
    @Column(name = "financial_service_needed")
    val financialServiceNeeded: Boolean,

    val created_at: LocalDateTime = LocalDateTime.now()
)