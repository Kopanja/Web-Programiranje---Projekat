package model;

public class OrgEditDTO {

	private String oldName;
	private Organisation org;
	
	public OrgEditDTO() {
		
	}
	public OrgEditDTO(String oldName, Organisation org) {
		super();
		this.oldName = oldName;
		this.org = org;
	}
	public String getOldName() {
		return oldName;
	}
	public void setOldName(String oldName) {
		this.oldName = oldName;
	}
	public Organisation getOrg() {
		return org;
	}
	public void setOrg(Organisation org) {
		this.org = org;
	}
	
	public boolean isNameChanged() {
		return !(this.oldName.equals(this.org.getName()));
	}
	
	
}
