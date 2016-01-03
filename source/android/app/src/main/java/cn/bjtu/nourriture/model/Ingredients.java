package cn.bjtu.nourriture.model;

import android.os.Parcel;
import android.os.Parcelable;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Created by Tagzz on 20/12/2015.
 */
public class Ingredients implements Parcelable {
    private String _id;
    private String name;
    private String description;
    private ColorItem colorItem;
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

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(this._id);
        dest.writeString(this.name);
        dest.writeString(this.description);
       // dest.writeParcelable(this.colorItem, flags);
        dest.writeValue(this.fat);
        dest.writeValue(this.carbohydrates);
        dest.writeValue(this.proteins);
    }

    private Ingredients(Parcel in) {
        this._id = in.readString();
        this.name = in.readString();
        this.description = in.readString();
//        this.colorItem = in.readParcelable(ColorItem.class.getClassLoader());
        this.fat = (Integer) in.readValue(Integer.class.getClassLoader());
        this.carbohydrates = (Integer) in.readValue(Integer.class.getClassLoader());
        this.proteins = (Integer) in.readValue(Integer.class.getClassLoader());
    }

    public static final Parcelable.Creator<Ingredients> CREATOR = new Parcelable.Creator<Ingredients>() {
        public Ingredients createFromParcel(Parcel source) {
            return new Ingredients(source);
        }

        public Ingredients[] newArray(int size) {
            return new Ingredients[size];
        }
    };
}
