package kr.or.oheasy.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldNameConstants;

@Data
@AllArgsConstructor
@FieldNameConstants
@NoArgsConstructor
public class SdTaxAmountVO {
	private long amtAllowance;				//기본급
	private long nationalPension;			//국민연금
	private long healthInsurance;			//건강보험
	private long employmentInsurance;		//고용보험
	private long longtermNursingInsurance;	//장기요양보험료
	private long incomeTax;					//소득세
	private long localIncomeTax;			//지방소득세
	
	public SdTaxAmountVO(long nationalPension, long healthInsurance, long employmentInsurance,
			long longtermNursingInsurance, long incomeTax, long localIncomeTax) {
		super();
		this.nationalPension = nationalPension;
		this.healthInsurance = healthInsurance;
		this.employmentInsurance = employmentInsurance;
		this.longtermNursingInsurance = longtermNursingInsurance;
		this.incomeTax = incomeTax;
		this.localIncomeTax = localIncomeTax;
	}
	
	
}
