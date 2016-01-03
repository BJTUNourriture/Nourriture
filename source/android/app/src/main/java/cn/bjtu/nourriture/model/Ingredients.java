package cn.bjtu.nourriture.model;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Created by Tagzz on 20/12/2015.
 */
public class Ingredients {
    private String _id;
    private String name;
    private String description;
    private final ColorItem colorItem;
    private Integer fat;
    private Integer carbohydrates;
    private Integer proteins;

    public Ingredients(String Name, String Description, String _id, ColorItem colorItem) {
        this._id = _id;
        this.name = Name;
        this.description = Description;
        this.colorItem = colorItem;
    }

    public String get_id() {
        return _id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Integer getFat() {
        return fat;
    }

    public Integer getCarbohydrates() {
        return carbohydrates;
    }

    public Integer getProteins() {
        return proteins;
    }

    public ColorItem getColor() {
        return colorItem;
    }
}
