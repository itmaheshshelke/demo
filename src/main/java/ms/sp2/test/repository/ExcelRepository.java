/**
 * created by : Mahesh Shelke
   created on : 29-Jan-2019
 */
package ms.sp2.test.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ms.sp2.test.model.Excel;

/**
 * created By : Mahesh Shelke
 *
 * created On : 29-Jan-2019
 */
public interface ExcelRepository extends JpaRepository<Excel, Integer>{

	@Query("SELECT e FROM Excel e WHERE  e.delFlag='N'")
	public List<Excel> getAll();

	@Query("SELECT e FROM Excel e WHERE  e.delFlag='N' and e.employeeId=:employeeId")
	public Excel getUserDataById(@Param("employeeId")Integer employeeId);



}
