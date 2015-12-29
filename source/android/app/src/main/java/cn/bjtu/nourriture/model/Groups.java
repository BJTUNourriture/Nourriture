package cn.bjtu.nourriture.model;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Author : Benjamin
 * 26/12/15
 **/
public class Groups  {

    private final ColorItem colorItem;
    private String _id;
    private String name;
    private String description;

    public Groups(String name, String description, String _id, ColorItem colorItem) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.colorItem = colorItem;
    }

    public String get_id() {
        return _id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() { return description; }

    public ColorItem getColor() {
        return colorItem;
    }
}