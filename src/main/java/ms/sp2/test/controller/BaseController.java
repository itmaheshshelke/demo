package ms.sp2.test.controller;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import ms.sp2.test.constants.FlowData;
import ms.sp2.test.constants.WebAppConstants;


/**
 * The Class BaseController.
 */

@RestController
public class BaseController extends AbstractController {

	/** The logger. */
	Logger logger = LoggerFactory.getLogger(BaseController.class);

	@Override
	protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession();

		if (session.getAttribute(WebAppConstants.FLOWDATA) != null) {
			FlowData flowData = (FlowData) session.getAttribute(WebAppConstants.FLOWDATA);
			session.setAttribute(WebAppConstants.FLOWDATA, flowData);
		} else {
			FlowData flowData = new FlowData();
			try {
				session.setMaxInactiveInterval(60 * Integer.parseInt(WebAppConstants.SESSION_TIMEOUT_TIME));
				session.setAttribute(WebAppConstants.FLOWDATA, flowData);
			} catch (Exception e) {
				logger.error("Got error while setting count ", e);
			}

		}
		return null;
	}
	
	

	public ModelAndView loginPage(FlowData flowData, HttpServletRequest request) {
		Map<String, Object> resDtoObjects = new HashMap<String, Object>();
		logger.info("started loginPage method ");
		ModelAndView modelRoot = null;
		try {
			String viewName = "";
			viewName = (String) resDtoObjects.get(WebAppConstants.VIEW_NAME);
			modelRoot = new ModelAndView(viewName);
			modelRoot.addAllObjects(resDtoObjects);
			request.getSession().setAttribute(WebAppConstants.FLOWDATA, null);
			return modelRoot;
		} catch (Exception ex) {
			logger.error("Exception in loginPage()", ex);
			modelRoot = new ModelAndView((String) resDtoObjects.get(WebAppConstants.VIEW_NAME));

			return modelRoot;
		}
	}

	
	public ModelAndView getCommonSessionData(FlowData flowData , ModelAndView mv){
	/*	mv.addObject("userName", flowData.getSessionData(WebAppConstants.FIRSTNAME));
		mv.addObject("roleId", flowData.getSessionData(WebAppConstants.ROLEID));
		mv.addObject("user", flowData.getSessionData(WebAppConstants.USER));
		mv.addObject("employeeId", flowData.getSessionData(WebAppConstants.employeeId));*/
		return mv;
	}
	
	
	
	/**
	 * @return generated token
	 */
	public static String nextToken() {
		long seed = System.currentTimeMillis();
		Random r = new Random();
		r.setSeed(seed);
		String token = Long.toString(seed) + Long.toString(Math.abs(r.nextLong()));
		// logger.debug(BaseController.class.getName() + ".nextToken :" +
		// token);
		return token;
	}

}