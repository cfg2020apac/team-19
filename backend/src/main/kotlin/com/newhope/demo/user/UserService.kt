package com.newhope.demo.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional


@Transactional
@Service
class UserService(
    private val userRepository: UserRepository
) : UserDetailsService {

    @Autowired
    private lateinit var passwordEncoder: PasswordEncoder

    fun signUp(signUpDTO: SignUpDto): User {
        return userRepository.save(
            User(
                email = signUpDTO.email,
                password = passwordEncoder.encode(signUpDTO.password),
                name = signUpDTO.name
            )
        )
    }

    override fun loadUserByUsername(username: String): UserDetails {
        return UserDetails(userRepository.findByEmail(username) ?: throw UsernameNotFoundException(username))
    }
}