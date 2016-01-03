package cn.bjtu.nourriture.model;

import android.os.Parcel;
import android.os.Parcelable;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class Recipes implements Parcelable {

    private ColorItem colorItem;
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

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
       // dest.writeParcelable(this.colorItem, flags);
        dest.writeString(this._id);
        dest.writeString(this.title);
    }

    private Recipes(Parcel in) {
//        this.colorItem = in.readParcelable(ColorItem.class.getClassLoader());
        this._id = in.readString();
        this.title = in.readString();
    }

    public static final Parcelable.Creator<Recipes> CREATOR = new Parcelable.Creator<Recipes>() {
        public Recipes createFromParcel(Parcel source) {
            return new Recipes(source);
        }

        public Recipes[] newArray(int size) {
            return new Recipes[size];
        }
    };
}