package cn.bjtu.nourriture.model;

import android.os.Parcel;
import android.os.Parcelable;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class Recipe implements Parcelable {

    private ColorItem colorItem;
    private String _id;
    private String title;
    private String description;
    private int time_preparation;
    private int average_price;

    public Recipe(String title, String _id, ColorItem colorItem) {
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

    public void setColorItem(ColorItem colorItem) {
        this.colorItem = colorItem;
    }

    public String getDescription() {
        return description;
    }

    public int getTime() {
        return time_preparation;
    }

    public int getPrice() {
        return average_price;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeParcelable(this.colorItem, flags);
        dest.writeString(this._id);
        dest.writeString(this.title);
        dest.writeString(this.description);
        dest.writeInt(this.average_price);
        dest.writeInt(this.time_preparation);

    }

    private Recipe(Parcel in) {
        this.colorItem = in.readParcelable(ColorItem.class.getClassLoader());
        this._id = in.readString();
        this.title = in.readString();
        this.description = in.readString();
        this.average_price = in.readInt();
        this.time_preparation = in.readInt();

    }

    public static final Parcelable.Creator<Recipe> CREATOR = new Parcelable.Creator<Recipe>() {
        public Recipe createFromParcel(Parcel source) {
            return new Recipe(source);
        }

        public Recipe[] newArray(int size) {
            return new Recipe[size];
        }
    };


}