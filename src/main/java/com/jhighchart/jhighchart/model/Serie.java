package com.jhighchart.jhighchart.model;

import java.io.Serializable;
import java.util.List;

public class Serie implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String name; //Example: Rainfall
	private String color; //Example: #4572A7
	private String type; //Example: column
	private int yAxis; //Example: 1
	private List<Object> data; //Example: [10, 54 , 54]
	
	public Serie(String name, String color, String type, int yAxis, List<Object> data) {
		this.name = name;
		this.color = color;
		this.type = type;
		this.yAxis = yAxis;
		this.data = data;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the color
	 */
	public String getColor() {
		return color;
	}

	/**
	 * @param color the color to set
	 */
	public void setColor(String color) {
		this.color = color;
	}

	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}

	/**
	 * @return the yAxis
	 */
	public int getyAxis() {
		return yAxis;
	}

	/**
	 * @param yAxis the yAxis to set
	 */
	public void setyAxis(int yAxis) {
		this.yAxis = yAxis;
	}

	/**
	 * @return the data
	 */
	public List<Object> getData() {
		return data;
	}

	/**
	 * @param data the data to set
	 */
	public void setData(List<Object> data) {
		this.data = data;
	}
	
	
	
	


}
