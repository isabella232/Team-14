package com.paypalhack.backend.configuration

import com.braintreegateway.BraintreeGateway
import com.braintreegateway.Environment
import org.springframework.beans.factory.config.ConfigurableBeanFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Scope
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer



@Configuration
open class BraintreeModule {
    @Bean
    @Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
    open fun createGateway(props: BraintreeProperties) =
            BraintreeGateway(
                    Environment.SANDBOX,
                    props.merchantId,
                    props.publicKey,
                    props.privateKey
            )

    @Bean
    open fun cors(): WebMvcConfigurer {
        return object : WebMvcConfigurer {
            override fun addCorsMappings(registry: CorsRegistry?) {
                registry!!.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
            }
        }
    }
}