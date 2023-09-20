package kr.or.oheasy.vo;
import lombok.Data;

@Data
public class HrBodyDataDtlVO {
    private String cdEmp;
    private Integer lenBody;
    private Integer wgtBody;
    private Integer nclBloodMin;
    private Integer nclBloodMax;
    private Integer lenBust;
    private String dcCaseHistory;
    private String fgBloodType;
    private String fgEye;
    private Float leftEyesight;
    private Float rightEyesight;
    private Integer apilityHearing;
    private String fgObstacle;
    private String fgVerteans;
    private Integer lvObstacle;
    private String lvVerterans;
    private String relationVerterans;
}