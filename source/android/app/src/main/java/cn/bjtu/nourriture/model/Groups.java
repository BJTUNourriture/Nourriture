package cn.bjtu.nourriture.model;

import android.os.Parcel;
import android.os.Parcelable;

import cn.bjtu.nourriture.adapters.ColorItem;

/**
 * Author : Benjamin
 * 26/12/15
 **/
public class Groups implements Parcelable {

    private ColorItem colorItem;
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


    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
//        dest.writeParcelable(this.colorItem, flags);
        dest.writeString(this._id);
        dest.writeString(this.name);
        dest.writeString(this.description);
    }

    private Groups(Parcel in) {
//        this.colorItem = in.readParcelable(ColorItem.class.getClassLoader());
        this._id = in.readString();
        this.name = in.readString();
        this.description = in.readString();
    }

    public static final Parcelable.Creator<Groups> CREATOR = new Parcelable.Creator<Groups>() {
        public Groups createFromParcel(Parcel source) {
            return new Groups(source);
        }

        public Groups[] newArray(int size) {
            return new Groups[size];
        }
    };
}