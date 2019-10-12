package com.paypalhack.backend.controller

import com.braintreegateway.*
import org.springframework.web.bind.annotation.*
import java.math.BigDecimal
import com.braintreegateway.TransactionRequest



data class CreateDonorRequest(
        var firstName: String,
        var lastName: String,
        var email: String
)

data class ResultResponse(
        val status: String,
        val errors: List<ValidationError>? = null
)

data class CreateDonorResponse(
        val status: String,
        val id: String? = null,
        val errors: List<ValidationError>? = null
)

data class DonationTransaction(
        var amount: String
)

@RestController
@RequestMapping("/payments")
class PaymentController(private val gateway: BraintreeGateway) {

    @GetMapping(value = ["/token"])
    fun token(): String {
        val request = ClientTokenRequest().customerId("569330759")
        return gateway.clientToken().generate(request)
    }

    @PostMapping(value = ["/donate/{nonce}"])
    fun processDonation(
            @PathVariable("nonce") nonce: String,
            @RequestBody tx: DonationTransaction): ResultResponse
    {
        val request = TransactionRequest()
                .amount(BigDecimal(tx.amount))
                .paymentMethodNonce(nonce)
                .options()
                .submitForSettlement(true)
                .done()

        val result = gateway.transaction().sale(request)
        return if (result.isSuccess) {
            ResultResponse(status = "ok")
        } else {
            ResultResponse(
                    status = "error",
                    errors = result.errors.allValidationErrors)
        }
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