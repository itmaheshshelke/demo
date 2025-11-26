/**
 * created by : Mahesh Shelke
   created on : 29-Jan-2019
 */
package ms.sp2.test.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import ms.sp2.test.dto.ChartData;
import ms.sp2.test.dto.ChartResponse;
import ms.sp2.test.dto.ExcelDto;
import ms.sp2.test.model.Excel;
import ms.sp2.test.repository.ExcelRepository;
import ms.sp2.test.util.ExcelReader;

/**
 * created By : Mahesh Shelke
 *
 * created On : 29-Jan-2019
 */
@RestController
@RequestMapping("/excel-api")
public class ExcelController {

	@Value("${portal.url}")
	private String portalUrl;

	@Value("${doc.path}")
	private String path;

	@Autowired
	private ExcelRepository excelRepository;

	
	public static List<ChartResponse> chartResponseList=new ArrayList<>();
	
	@RequestMapping("/show-excel-upload-page")
	public ModelAndView openExcelUploadPage(HttpServletRequest request, HttpServletResponse response,
			Model modelRedirect) {
		ModelAndView model = new ModelAndView("show-excel");
		try {
			List<Excel> excelList = excelRepository.getAll();
			
			model.addObject("excelList", excelList);

		} catch (Exception e) {
			// TODO: handle exception
		}
		model.addObject("successMessage", modelRedirect.asMap().get("msg"));
		return model;

	}

	@RequestMapping(value = "/upload-excel", method = RequestMethod.POST)
	public ModelAndView uploadExcel(HttpServletRequest request, HttpServletResponse response,
			@ModelAttribute ExcelDto excelDto, RedirectAttributes attribute) {
	
		MultipartFile file = excelDto.getFile();

		if (null != file && !file.isEmpty()) {
			try {
				// String filePath = getServletContext().getRealPath("/");
				byte[] bytes = file.getBytes();
				String filename = file.getOriginalFilename();
				String extension = filename.split(Pattern.quote("."))[1];
				excelDto.setData(bytes);
				excelDto.setExtension(extension);

				String fileUploadPath = path;//

				if (null != excelDto.getData()) {
					File file1 = new File(fileUploadPath + File.separator + File.separator + "user_data");
					if (!file1.exists()) {
						if (file1.mkdirs()) {
							System.out.print("Directory is created!");
						} else {
							System.out.print("Failed to create directory!");
						}
					}

					String filePath = file1 + File.separator + file1.getName() + "." + excelDto.getExtension();
					File serverFile = new File(filePath);
					BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
					stream.write(excelDto.getData());
					stream.flush();
					stream.close();

					List<Excel> userList = ExcelReader.excelData(filePath);
					if (userList != null && !userList.isEmpty()) {
						excelRepository.saveAll(userList);
					}
				}

			} catch (Exception e) {
			}
		}

		attribute.addFlashAttribute("msg", "Excel uploaded successfully.");
		return new ModelAndView("redirect:" + "/excel-api/show-excel-upload-page");

	}

	
	
	 @RequestMapping(value = "/delete-selected-user", method = RequestMethod.POST)
		public ModelAndView deleteSelectedUsers(HttpServletRequest request,
				HttpServletResponse response, RedirectAttributes attribute) {
			ModelAndView model=new ModelAndView("show-excel");
			String userIds[]=request.getParameterValues("deleteUser");
			String action=request.getParameter("action");
			//if action call for delete selected user then this block execute
			if(action.equals("delete")) {
			try {
				if(userIds!=null) {
					for (String userId : userIds) {
						Excel excel = excelRepository.getUserDataById(Integer.parseInt(userId));
						excel.setUpdatedBy(1);
						excel.setUpdatedOn(new Date());
						excel.setDelFlag('Y');
						excelRepository.save(excel);
						excelRepository.flush();
					}
				
				}
			} catch (Exception e) {
			}
			model.addObject("successMessage", "Record deleted successfully");
			List<Excel> excelList = excelRepository.getAll();
			model.addObject("excelList", excelList);
			}else {
				//if action call for edit selected user then this block execute
				List<Excel> excelUserList=new ArrayList<>();
				List<Integer> employeIds=new ArrayList<>();
				try {
					for (String id : userIds) {
						employeIds.add(Integer.parseInt(id));
					}
					excelUserList = excelRepository.findAllById(employeIds);

				} catch (Exception e) {
				}
				model.addObject("excelList", excelUserList);
				model.setViewName("edit-multi-user-record");
			}
			
			return model;
			
		}
	
	
	 
	 
	 @RequestMapping(value = "/update-selected-user", method = RequestMethod.POST)
		public ModelAndView updateAllUserData( RedirectAttributes attribute,
				HttpServletRequest request, HttpServletResponse response) {
			ModelAndView model=new ModelAndView("show-excel");
			String userIds[]=request.getParameterValues("employeeIds");
			String firstName[]=request.getParameterValues("firstName");
			String lastName[]=request.getParameterValues("lastName");
			String emailId[]=request.getParameterValues("emailId");
			String contactNo[]=request.getParameterValues("contactNo");
			String gender[]=request.getParameterValues("gender");
			String password[]=request.getParameterValues("password");
			List<Integer> employeIds=new ArrayList<>();
			try {
				for (String id : userIds) {
					employeIds.add(Integer.parseInt(id));
				}
				for(int i=0;i<employeIds.size();i++) {
					Excel excel = excelRepository.getUserDataById(employeIds.get(i));
					
					excel.setFirstName(firstName[i]);
					excel.setLastName(lastName[i]);
					excel.setContactNo(contactNo[i]);
					excel.setEmailId(emailId[i]);
					excel.setGender(gender[i]);
					excel.setPassword(password[i]);
					excel.setUpdatedBy(1);
					excel.setUpdatedOn(new Date());
					excel.setDelFlag('N');
					excelRepository.save(excel);
					excelRepository.flush();
				}

			} catch (Exception e) {
			}
			model.addObject("successMessage", "All Record updated successfully");
			List<Excel> excelList = excelRepository.getAll();
			model.addObject("excelList", excelList);
			return model;
		}
	 
	 
	 
	
	@RequestMapping(value = "/edit-user-record", method = RequestMethod.GET)
	public ModelAndView getRoleById(@RequestParam Integer employeeId) {
		ModelAndView model = new ModelAndView();
		Excel excel = new Excel();
		try {
			excel = excelRepository.getUserDataById(employeeId);

		} catch (Exception e) {
		}
		model.addObject("excel", excel);
		model.setViewName("edit-user-record");
		return model;
	}

	
	
	
	
	
	
	@RequestMapping(value = "/update-user-data", method = RequestMethod.POST)
	public ModelAndView saveRole(@ModelAttribute("excel") Excel excel, RedirectAttributes attribute,
			HttpServletRequest request, HttpServletResponse response) {
		ModelAndView model=new ModelAndView("show-excel");
		try {
			excel.setUpdatedBy(1);
			excel.setUpdatedOn(new Date());
			excel.setDelFlag('N');
			excelRepository.save(excel);
			excelRepository.flush();
			
			
		} catch (Exception e) {
		}
		model.addObject("successMessage", "Record updated successfully");
		List<Excel> excelList = excelRepository.getAll();
		model.addObject("excelList", excelList);
		return model;
	}

	@RequestMapping(value = "/delete-user-data/{employeeId}", method = RequestMethod.GET)
	public ModelAndView deleteRole(@PathVariable("employeeId") Integer employeeId, HttpServletRequest request,
			HttpServletResponse response, RedirectAttributes attribute) {
		ModelAndView model=new ModelAndView("show-excel");
		try {
			Excel excel = excelRepository.getUserDataById(employeeId);
			excel.setUpdatedBy(1);
			excel.setUpdatedOn(new Date());
			excel.setDelFlag('Y');
			excelRepository.save(excel);
			excelRepository.flush();
		} catch (Exception e) {
		}
		model.addObject("successMessage", "Record deleted successfully");
		List<Excel> excelList = excelRepository.getAll();
		model.addObject("excelList", excelList);
		return model;
	}
	
	@RequestMapping("/show-excel-upload-chart-page")
	public ModelAndView openExcelUploadChartPage(HttpServletRequest request, HttpServletResponse response,
			Model modelRedirect) {
		ModelAndView model = new ModelAndView("show-excel-chart");
		model.addObject("chartUrl", modelRedirect.asMap().get("chartUrl"));
		model.addObject("successMessage", modelRedirect.asMap().get("msg"));
		return model;

	}
	
	
	
	@RequestMapping(value = "/upload-excel-file", method = RequestMethod.POST)
	public ModelAndView uploadExcelForBarcchart(HttpServletRequest request, HttpServletResponse response,
			@ModelAttribute ExcelDto excelDto, RedirectAttributes attribute) {
		ModelAndView model =new ModelAndView("show-excel-chart");
		MultipartFile file = excelDto.getFile();

		if (null != file && !file.isEmpty()) {
			try {
				// String filePath = getServletContext().getRealPath("/");
				byte[] bytes = file.getBytes();
				String filename = file.getOriginalFilename();
				String extension = filename.split(Pattern.quote("."))[1];
				excelDto.setData(bytes);
				excelDto.setExtension(extension);

				String fileUploadPath = path;//

				if (null != excelDto.getData()) {
					File file1 = new File(fileUploadPath + File.separator + File.separator + "user_data");
					if (!file1.exists()) {
						if (file1.mkdirs()) {
							System.out.print("Directory is created!");
						} else {
							System.out.print("Failed to create directory!");
						}
					}

					String filePath = file1 + File.separator + file1.getName() + "." + excelDto.getExtension();
					File serverFile = new File(filePath);
					BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
					stream.write(excelDto.getData());
					stream.flush();
					stream.close();
					chartResponseList=new ArrayList<>();
					chartResponseList=	ExcelReader.excelDataForChart(filePath);
				
				}

			} catch (Exception e) {
			}
			
		}
		attribute.addFlashAttribute("msg", "Excel uploaded successfully.");
		return new ModelAndView("redirect:" + "/excel-api/show-excel-upload-chart-page");
	}
	
	@RequestMapping(value = "/get-chart-data", method = RequestMethod.GET)
	@ResponseBody
	public List<ChartResponse> prepareData(){
		List<ChartResponse> chartResponseListNew=chartResponseList;
		try {
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return chartResponseListNew;
		
	}
}
