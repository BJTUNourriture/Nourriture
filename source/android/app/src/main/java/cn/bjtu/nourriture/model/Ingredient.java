package cn.bjtu.nourriture.model;

import android.os.Parcel;
import android.os.Parcelable;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Created by Tagzz on 20/12/2015.
 */
public class Ingredient implements Parcelable {
    private String _id;
    private String name;
    private String description;

    public void setColorItem(ColorItem colorItem) {
        this.colorItem = colorItem;
    }

    private ColorItem colorItem;
    private int fat;
    private int carbohydrates;
    private int proteins;

    public Ingredient(String Name, String Description, String _id, ColorItem colorItem) {
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

    public int getFat() {
        return fat;
    }

    public int getCarbohydrates() {
        return carbohydrates;
    }

    public int getProteins() {
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
        dest.writeInt(this.fat);
        dest.writeInt(this.carbohydrates);
        dest.writeInt(this.proteins);
    }

    private Ingredient(Parcel in) {
        this._id = in.readString();
        this.name = in.readString();
        this.description = in.readString();
//        this.colorItem = in.readParcelable(ColorItem.class.getClassLoader());
        this.fat = in.readInt();
        this.carbohydrates =  in.readInt();
        this.proteins =  in.readInt();
    }

    public static final Parcelable.Creator<Ingredient> CREATOR = new Parcelable.Creator<Ingredient>() {
        public Ingredient createFromParcel(Parcel source) {
            return new Ingredient(source);
        }

        public Ingredient[] newArray(int size) {
            return new Ingredient[size];
        }
    };
}
