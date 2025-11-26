package ms.sp2.test.dto;

import org.modelmapper.ModelMapper;

import ms.sp2.test.model.Excel;

public class ExcelMapper {

	public static ExcelDto _toDto(Excel excel) {

			ModelMapper mapper = new ModelMapper();
			ExcelDto dtoObject = mapper.map(excel, ExcelDto.class);
			return dtoObject;
		}

		public static Excel _toJpa(ExcelDto excelDto) {

			ModelMapper mapper = new ModelMapper();
			Excel jpaObject = mapper.map(excelDto, Excel.class);
			return jpaObject;
		}

}
