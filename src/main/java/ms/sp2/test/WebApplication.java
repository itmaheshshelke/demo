package ms.sp2.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "ms.sp2.test")
@EnableAutoConfiguration
@EnableJpaAuditing
@EnableScheduling
public class WebApplication extends SpringBootServletInitializer {
	
	/*@Autowired
	private ClinicNotificationLogic clinicNotificationLogic;*/

	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(WebApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(WebApplication.class, args);
		
		/*NotificationDataFiller notificationDataFiller = new NotificationDataFiller();
		notificationDataFiller.init();*/
		
	}
}
