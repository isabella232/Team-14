package com.paypalhack.backend.configuration

import com.braintreegateway.BraintreeGateway
import com.braintreegateway.Environment
import org.springframework.beans.factory.config.ConfigurableBeanFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Scope

@Configuration
open class BraintreeModule {
    @Bean
    @Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
    open fun createGateway(props: BraintreeProperties) =
            BraintreeGateway(
                    Environment.SANDBOX,
                    props.marchantId,
                    props.publicKey,
                    props.privateKey
            )
}