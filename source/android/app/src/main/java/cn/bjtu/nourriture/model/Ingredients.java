package cn.bjtu.nourriture.model;

/**
 * Created by Tagzz on 20/12/2015.
 */
public class Ingredients {
    private String _id;
    private String name;
    private String description;
    private Integer fat;
    private Integer carbohydrates;
    private Integer proteins;


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
}
