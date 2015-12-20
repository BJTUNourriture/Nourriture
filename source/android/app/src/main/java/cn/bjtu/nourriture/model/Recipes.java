package cn.bjtu.nourriture.model;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class Recipes  {

    private final ColorItem colorItem;
    private String _id;
    private String title;

    public Recipes(String title, String _id, ColorItem colorItem) {
        this._id = _id;
        this.title = title;
        this.colorItem = colorItem;
    }

    public String get_id() {
        return _id;
    }

    public String getName() {
        return title;
    }

    public ColorItem getColor() {
        return colorItem;
    }
}