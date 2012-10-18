package com.jhighchart.jhighchart.controller;

import java.util.ArrayList;
import java.util.List;

import javax.faces.bean.ManagedBean;

import com.google.gson.Gson;
import com.jhighchart.jhighchart.model.Serie;

@ManagedBean
public class ChartController {
	 private String chartData;
	 private String categories;
	 private List<String> categoryList = new ArrayList<String>();
	 
	 public ChartController(){
		 
	 }
	 
	 public void loadChartData(){
		 List<Serie> series = new ArrayList<Serie>();
		 
		 List<Object> data1 = new ArrayList<Object>();		 
		 data1.add(new Integer(10));
		 data1.add(new Integer(20));
		 data1.add(new Integer(30));
		 data1.add(new Integer(20));
		 data1.add(new Integer(50));
		 
		 series.add(new Serie("Components Removed", "#4572A7", "column",0, data1));
		 
		 List<Object> data2 = new ArrayList<Object>();		 
		 data2.add(new Double(10));
		 data2.add(new Double(20));
		 data2.add(new Double(30));
		 data2.add(new Double(20));
		 data2.add(new Double(50));
		 
		 series.add(new Serie("MTBUR", "#89A54E", "spline",1, data2));
		 
		 setChartData(new Gson().toJson(series));
		 
		 categoryList.add(new String("Jan"));
		 categoryList.add(new String("Fev"));
		 categoryList.add(new String("Mar"));
		 categoryList.add(new String("Abr"));
		 categoryList.add(new String("Mai"));
		 
		 
		 setCategories(new Gson().toJson(categoryList));
		 
		 System.out.println(categories);
	 }

	/**
	 * @return the chartData
	 */
	public String getChartData() {
		return chartData;
	}

	/**
	 * @param chartData the chartData to set
	 */
	public void setChartData(String chartData) {
		this.chartData = chartData;
	}

	/**
	 * @return the categories
	 */
	public String getCategories() {
		return categories;
	}

	/**
	 * @param categories the categories to set
	 */
	public void setCategories(String categories) {
		this.categories = categories;
	}

	/**
	 * @return the categoryList
	 */
	public List<String> getCategoryList() {
		return categoryList;
	}

	/**
	 * @param categoryList the categoryList to set
	 */
	public void setCategoryList(List<String> categoryList) {
		this.categoryList = categoryList;
	}
	 
	 
}
