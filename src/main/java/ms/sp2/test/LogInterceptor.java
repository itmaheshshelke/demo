package ms.sp2.test;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import ms.sp2.test.constants.FlowData;
import ms.sp2.test.constants.WebAppConstants;

/**
 * Created By:- Mahesh Shelke
 *
 */
public class LogInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		Long startTime = System.currentTimeMillis();

		request.setAttribute("startTime", startTime);
		//System.out.println(request.getRequestURI());
		String decodedUrl = request.getRequestURI();
		/*if (request.getRequestURI().equals(WebAppConstants.APP_NAME)) {
			decodedUrl = request.getRequestURI();
		}else {
			decodedUrl = EncryptUrl.decode(request.getRequestURI());
		}*/

		/*System.out.println("Decoded Url" + decodedUrl);
		if (decodedUrl.equals(WebAppConstants.APP_NAME) 
				|| decodedUrl.contains(WebAppConstants.APP_NAME + "")
				|| decodedUrl.contains(WebAppConstants.APP_NAME + "error")) {
			return true;
		}
		FlowData flowData = null;
		if (request.getSession().getAttribute(WebAppConstants.FLOWDATA) != null) {
			flowData = (FlowData) request.getSession().getAttribute(WebAppConstants.FLOWDATA);
		}

		if (null == flowData) {
			response.sendRedirect(WebAppConstants.APP_NAME + "/");
			return false;
		}*/

		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {

	}

	// TODO Auto-generated method stub

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		/*try {
			String encodedUrl = (String) request.getAttribute("url");
			if (encodedUrl.equals(WebAppConstants.APP_NAME)) {
				response.sendRedirect(WebAppConstants.APP_NAME + "/");
			} else {
				encodedUrl = EncryptUrl.encode(request.getRequestURI());
				System.out.println("Encoded Url" + encodedUrl);
				response.sendRedirect(WebAppConstants.APP_NAME + encodedUrl);
			}
		} catch (Exception e) {
			// TODO: handle exception
		}*/
	}
}
