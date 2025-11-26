package ms.sp2.test;


import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@PropertySource("classpath:rest.properties")
public class WebConfig extends WebMvcConfigurerAdapter {

   
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
    	 registry.addInterceptor(new LogInterceptor());
    }
    
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
      registry.addResourceHandler("/upload/**").addResourceLocations("file://" + System.getProperty("user.dir") + "/src/main/webapp/resources/rest/upload");
    }

}
