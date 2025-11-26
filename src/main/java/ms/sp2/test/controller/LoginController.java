/**
 * 
 */
package ms.sp2.test.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import ms.sp2.test.constants.FlowData;
import ms.sp2.test.constants.WebAppConstants;
import ms.sp2.test.dto.ExcelDto;

/**
 * Created By:- Mahesh Shelke
 * Created On :- Dec 7, 2018 :  3:46:01 PM
 * File Name:- LoginController.java
 *
 */
@RestController
@RequestMapping("/")
public class LoginController extends BaseController{

	
	
	@RequestMapping("/")
	public ModelAndView login1(HttpServletRequest request, HttpServletResponse response) {
		ModelAndView model=new ModelAndView("user-login");
		super.handleRequestInternal(request, response);
		FlowData flowData = null;
		if (request.getSession().getAttribute(WebAppConstants.FLOWDATA) != null) {
			flowData = (FlowData) request.getSession().getAttribute(WebAppConstants.FLOWDATA);
		}
		try {
			model.addObject("message","Hello user welcome...");
		} catch (Exception e) {
			// TODO: handle exception
		}
		return model;
		
	}
	
	@RequestMapping("/dashboard")
	public ModelAndView login2(HttpServletRequest request, HttpServletResponse response) {
		ModelAndView model=new ModelAndView("dashbord");
		super.handleRequestInternal(request, response);
		FlowData flowData = null;
		if (request.getSession().getAttribute(WebAppConstants.FLOWDATA) != null) {
			flowData = (FlowData) request.getSession().getAttribute(WebAppConstants.FLOWDATA);
		}
		try {
			model.addObject("message","Hello user welcome...");
			model.addObject("employeeDto",new ExcelDto());
		} catch (Exception e) {
			// TODO: handle exception
		}
		return model;
		
	}
	@RequestMapping("/log-off")
	public ModelAndView logOff(HttpServletRequest request, HttpServletResponse response) {
		ModelAndView model=new ModelAndView("log-off");
		super.handleRequestInternal(request, response);
		FlowData flowData = null;
		if (request.getSession().getAttribute(WebAppConstants.FLOWDATA) != null) {
			flowData = (FlowData) request.getSession().getAttribute(WebAppConstants.FLOWDATA);
		}
		try {
			model.addObject("message","Hello user welcome...");
		} catch (Exception e) {
			// TODO: handle exception
		}
		return model;
		
	}
	@RequestMapping(value="/register-new-user",method=RequestMethod.POST)
	public ModelAndView registerNewUser(HttpServletRequest request, HttpServletResponse response,
			@ModelAttribute("employeeDto") ExcelDto excelDto) {
			MultipartFile file=excelDto.getFile();
		if (null != file && !file.isEmpty()) {
			try {
				// String filePath = getServletContext().getRealPath("/");
				byte[] bytes = file.getBytes();
				String filename = file.getOriginalFilename();
				String extension = filename.split(Pattern.quote("."))[1];
				excelDto.setData(bytes);
				excelDto.setExtension(extension);
				String fileUploadPath="C:\\";
				File file1 = new File(fileUploadPath + File.separator + "images");
				if (!file1 .exists()) {
					if (file1.mkdirs()) {
						System.out.print("Directory is created!");
					} else {
						System.out.print("Failed to create directory!");
					}
				}
				String filePath = file1 + File.separator +"myFIle"+ "."+excelDto.getExtension();
				File serverFile = new File(filePath);
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(excelDto.getData());
				stream.flush();
				stream.close();
				System.out.print("File saved successfully on this loacation!\t"+filePath);
			} catch (Exception e) {
				
			}
		}else {
			System.out.print("File is not uploded somthing is wrong");
		}
		ModelAndView model=new ModelAndView("login");
		return model;
		
	}
	
	@RequestMapping("/new-user")
	public ModelAndView register(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String user,@RequestParam String pass) {
		ModelAndView model=new ModelAndView("new-user");
		return model;
		
	}
	@RequestMapping("/forgot-password")
	public ModelAndView forgotPassword(HttpServletRequest request, HttpServletResponse response) {
		ModelAndView model=new ModelAndView("forgot-password");
		return model;
		
	}
	@RequestMapping("/reset-password")
	public ModelAndView resetPassword(HttpServletRequest request, HttpServletResponse response) {
		ModelAndView model=new ModelAndView("reset-password");
		return model;
		
	}
	
}
