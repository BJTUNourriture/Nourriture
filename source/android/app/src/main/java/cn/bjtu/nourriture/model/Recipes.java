package cn.bjtu.nourriture.model;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class Recipes  {

    private final ColorItem colorItem;
    private String _id;
    private String name;

    public Recipes(String name, String _id, ColorItem colorItem) {
        this._id = _id;
        this.name = name;
        this.colorItem = colorItem;
    }

    public String get_id() {
        return _id;
    }

    public String getName() {
        return name;
    }

    public ColorItem getColor() {
        return colorItem;
    }
}