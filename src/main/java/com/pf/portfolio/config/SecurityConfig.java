package com.pf.portfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.httpBasic().disable();
        http.authorizeRequests()
//                -------------------------page-------------------------

                .antMatchers("/**")
                .permitAll()

//                .antMatchers("/admin/**")
//                .hasRole(("ADMIN"))
//
//                .antMatchers("/index", "/account/login", "/account/join")
//                .permitAll() // 전원 접근 가능
//
//                .antMatchers("/mypage", "/time/**", "/seat", "/seat/**","/locker/**", "/pay", "/enter", "/out","/move")
//                .authenticated()
//
//                .antMatchers("/api/**")
//                .permitAll()
//
//                .antMatchers("/static/**", "/image/**", "/download/**")
//                .permitAll()
//
//                .antMatchers("/account/mypage") // 우리가 지정한 요청
//                .authenticated()
//                .anyRequest() //antMatchers 외에 다른 모든 요청들은
//                .permitAll()

//                .anyRequest() // antMatchers 이외의 다른 요청들
//                .denyAll() // 전원 접근 권한 차단

  //              .and()
 //               .formLogin() //폼로그인
 //               .usernameParameter("user_phone")
 //               .passwordParameter("user_pw")
//                .loginPage("/account/login") // 우리가 만든 로그인 페이지
//                .loginProcessingUrl("/account/login")
//                .defaultSuccessUrl("/logout", false)
                .and()
                .logout()
//                .logoutSuccessUrl("/index")
                .invalidateHttpSession(true); // 저장된 세션 삭제
    }
}