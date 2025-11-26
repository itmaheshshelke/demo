/**
 * 
 */
package ms.sp2.test.constants;

import java.io.Serializable;
import java.util.HashMap;

/**
 * Created By:- Mahesh Shelke
 * Created On :- Dec 6, 2018 :  3:57:15 PM
 * File Name:- FlowData.java
 *
 */
public class FlowData implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public HashMap<String, String> sessionData=new HashMap<>();
	
	public HashMap<String, Object> sessionDataObject=new HashMap<>();
	
	public void clearAllSessionData() {
		sessionData.clear();
	}
	
	public void removeSessionData(String id) {
		sessionData.remove(id);
	}
	
	public void clearAllSessionDataObject() {
		sessionDataObject.clear();
	}
	
	public void clearSessionDataObject(String id) {
		sessionDataObject.remove(id);
	}

	
	public String getSessionData(String id) {
		return sessionData.get(id);
	}

	public void setSessionData(String id, String value) {
		sessionData.put(id, value);
	}
	
	/**
	 * @return the sessionDataObject
	 */

	public Object getSessionDataObject(String id) {
		return sessionDataObject.get(id);
	}

	public void setSessionDataObject(String id, Object value) {
		sessionDataObject.put(id, value);
	}
	
}
