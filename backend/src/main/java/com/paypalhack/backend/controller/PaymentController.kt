package com.paypalhack.backend.controller

import com.braintreegateway.BraintreeGateway
import com.braintreegateway.ClientTokenRequest
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController("/payments")
class PaymentController(private val gateway: BraintreeGateway) {

    @GetMapping(value = ["/token"])
    fun token(): String {
        val request = ClientTokenRequest().customerId("TODO")
        return gateway.clientToken().generate(request)
    }

}