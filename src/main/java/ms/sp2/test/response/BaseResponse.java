package ms.sp2.test.response;

import java.io.Serializable;

/**
 * Created By:- Mahesh Shelke
 *
 */
public class BaseResponse implements Serializable {

	private static final long serialVersionUID = 1L;
	private String code;
	private String description;
	private Boolean data;

	public String getCode() {
		return code;
	}

	public String getDescription() {
		return description;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getData() {
		return data;
	}

	public void setData(Boolean data) {
		this.data = data;
	}
}
