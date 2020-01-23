package model;

import java.util.Date;

public class VMActivity {

	private Date turnedOnDate;
	private Date turnedOffDate;
	
	VMActivity(){
		
	}

	public VMActivity(Date turnedOnDate, Date turnedOffDate) {
		super();
		this.turnedOnDate = turnedOnDate;
		this.turnedOffDate = turnedOffDate;
	}

	public Date getTurnedOnDate() {
		return turnedOnDate;
	}

	public void setTurnedOnDate(Date turnedOnDate) {
		this.turnedOnDate = turnedOnDate;
	}

	public Date getTurnedOffDate() {
		return turnedOffDate;
	}

	public void setTurnedOffDate(Date turnedOffDate) {
		this.turnedOffDate = turnedOffDate;
	}
	
	
	
	
}
