package com.newhope.demo.user

import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@RestController
@RequestMapping
class UserController(
    private val userService: UserService
) {
    @PostMapping("/signup")
    fun signUp(@RequestBody signUpDto: SignUpDto): ResponseEntity<User> {
        return ResponseEntity.ok(userService.signUp(signUpDto))
    }

    @GetMapping("/logout")
    fun logoutPage(request: HttpServletRequest, response: HttpServletResponse): ResponseEntity<Nothing> {
        SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().authentication)
        return ResponseEntity.ok().build()
    }
}