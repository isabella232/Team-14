package com.paypalhack.backend.configuration

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.PropertySource


@Configuration
@PropertySource("classpath:braintree.properties")
@ConfigurationProperties(prefix = "braintree")
open class BraintreeProperties {

    var merchantId: String? = null
    var publicKey: String? = null
    var privateKey: String? = null
}