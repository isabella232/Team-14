package com.paypalhack.backend.controller

import com.braintreegateway.*
import org.springframework.web.bind.annotation.*

data class CreateDonorRequest(
        var firstName: String,
        var lastName: String,
        var email: String
)

data class CreateDonorResponse(
        val status: String,
        val id: String? = null,
        val errors: List<ValidationError>? = null
)

@RestController
@RequestMapping("/payments")
class PaymentController(private val gateway: BraintreeGateway) {

    @GetMapping(value = ["/token"])
    fun token(): String {
        val request = ClientTokenRequest().customerId("TODO")
        return gateway.clientToken().generate(request)
    }

    @PostMapping(value = ["/donor"])
    fun createDonor(@RequestBody donor: CreateDonorRequest): CreateDonorResponse {
        val request = CustomerRequest()
                .firstName(donor.firstName)
                .lastName(donor.firstName)
                .email(donor.email)

        val result = gateway.customer().create(request)
        return if (result.isSuccess) {
            CreateDonorResponse(
                    status = "ok",
                    id = result.target.id
            )
        } else {
            CreateDonorResponse(
                    status = "error",
                    errors = result.errors.allValidationErrors
            )
        }
    }
}