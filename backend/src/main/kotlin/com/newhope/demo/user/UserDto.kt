package com.newhope.demo.user

import lombok.NoArgsConstructor
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@NoArgsConstructor
data class SignUpDto(

    @field:NotBlank
    var email: String, // email account

    @field:NotBlank
    var password: String, // 비밀번호

    @field:NotBlank
    @field:Size(min = 2, max = 10, message = "닉네임은 10자 이내로 해주세요.")
    var name: String // userName

)