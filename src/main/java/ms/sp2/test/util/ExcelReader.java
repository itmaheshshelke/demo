package ms.sp2.test.util;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFClientAnchor;
import org.apache.poi.xssf.usermodel.XSSFDrawing;
import org.apache.poi.xssf.usermodel.XSSFPicture;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartUtilities;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.DefaultCategoryDataset;

import ms.sp2.test.dto.ChartData;
import ms.sp2.test.dto.ChartResponse;
import ms.sp2.test.model.Excel;

/**
 * Created by Mahesh Shelke On 29-01-2019.
 */

public class ExcelReader {

	public static List<Excel> excelData(String fileUploadPath) {
		// Creating a Workbook from an Excel file (.xls or .xlsx)
		Workbook workbook = null;
		List<Excel> excelList = new ArrayList<>();
		try {
			workbook = WorkbookFactory.create(new File(fileUploadPath));
			// Getting the Sheet at index zero
			Sheet sheet = workbook.getSheetAt(0);

			// Create a DataFormatter to format and get each cell's value as String
			DataFormatter dataFormatter = new DataFormatter();

			for (Row row : sheet) {
				for (Cell cell : row) {
					String cellValue = dataFormatter.formatCellValue(cell);
					System.out.print(cellValue + "\t");
				}
				System.out.println();
				if (row.getRowNum() != 0) {
					Excel excelObject = new Excel();
					excelObject.setFirstName(row.getCell(0).toString());
					excelObject.setLastName(row.getCell(1).toString());
					excelObject.setEmailId(row.getCell(2).toString());
					excelObject.setContactNo(row.getCell(3).toString());
					excelObject.setGender(row.getCell(4).toString());
					excelObject.setCountry(row.getCell(5).toString());
					excelObject.setPassword(row.getCell(6).toString());
					excelObject.setCreatedBy(1);
					excelObject.setCreatedOn(new Date());
					excelObject.setDelFlag('N');
					excelList.add(excelObject);
				}
			}
		} catch (EncryptedDocumentException | InvalidFormatException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return excelList;

	}

	
	public static List<ChartResponse> excelDataForChart(String fileUploadPath) {
		
		Workbook workbook = null;
		ChartResponse chartResponse=new ChartResponse();
		List<ChartResponse> chartResponseListNew=new ArrayList<>();
		try {
			workbook = WorkbookFactory.create(new File(fileUploadPath));
			DataFormatter dataFormatter = new DataFormatter();
			Sheet sheet = workbook.getSheetAt(0);

			chartResponse=new ChartResponse();
				chartResponse.setType("column");
				chartResponse.setName("onsite");
				chartResponse.setShowInLegend(true);
				chartResponse.setLegendText("onsite");
				
				List<ChartData> chartDataList=new ArrayList<>();
			
					for (Row row : sheet) {
		
						if (row.getRowNum() != 0) {
							ChartData chartData = new ChartData();
							if(!row.getCell(0).toString().equals("")) {
							chartData.setLabel(row.getCell(0).toString());
							String onsite =dataFormatter.formatCellValue(row.getCell(1));
							chartData.setY(Double.valueOf(onsite));
							String noOfPeople =dataFormatter.formatCellValue(row.getCell(3));
							chartData.setX(Double.valueOf(noOfPeople));
							chartDataList.add(chartData);
						}
							else {
								break;
							}
						}
					}
					chartResponse.setCharDataList(chartDataList);
					chartResponseListNew.add(chartResponse);
					
					chartResponse=new ChartResponse();
					chartResponse.setType("column");
					chartResponse.setName("offsite");
					chartResponse.setShowInLegend(true);
					chartResponse.setLegendText("offsite");
					
					List<ChartData> chartDataList1=new ArrayList<>();
					
					for (Row row : sheet) {
						if (row.getRowNum() != 0) {
							ChartData chartData=new ChartData();
							if(!row.getCell(0).toString().equals("")) {
							chartData.setLabel(row.getCell(0).toString());
							String offsite =dataFormatter.formatCellValue(row.getCell(2));
							chartData.setY(Double.valueOf(offsite));
							String noOfPeople =dataFormatter.formatCellValue(row.getCell(3));
							chartData.setX(Double.valueOf(noOfPeople));
							chartDataList1.add(chartData);
						}
							else {
								break;
							}
						}
					}
					chartResponse.setCharDataList(chartDataList1);
					chartResponseListNew.add(chartResponse);
			
		} catch (EncryptedDocumentException | InvalidFormatException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return chartResponseListNew;

	}
	
}
