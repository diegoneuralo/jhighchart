package com.jhighchart.jhighchart.model;

import java.util.List;

/**
 *
 * @author Babji Prashanth, Chetty
 */
public class SeriesJvm {
    private String name;
    private List<Long> data;

    public SeriesJvm() {}

    public SeriesJvm(String name, List<Long> data) {
        this.name = name;
        this.data = data;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Long> getData() {
		return data;
	}

	public void setData(List<Long> data) {
		this.data = data;
	}
}
