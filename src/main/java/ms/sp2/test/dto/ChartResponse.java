package ms.sp2.test.dto;

import java.io.Serializable;
import java.util.List;

public class ChartResponse implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String type;
	private String name;
	private String legendText;
	private Boolean  showInLegend;
	
	private List<ChartData> charDataList;
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLegendText() {
		return legendText;
	}
	public void setLegendText(String legendText) {
		this.legendText = legendText;
	}
	public Boolean getShowInLegend() {
		return showInLegend;
	}
	public void setShowInLegend(Boolean showInLegend) {
		this.showInLegend = showInLegend;
	}
	public List<ChartData> getCharDataList() {
		return charDataList;
	}
	public void setCharDataList(List<ChartData> charDataList) {
		this.charDataList = charDataList;
	}
	
	
	

}
