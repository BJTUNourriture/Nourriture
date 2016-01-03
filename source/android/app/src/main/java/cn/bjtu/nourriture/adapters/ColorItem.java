package cn.bjtu.nourriture.adapters;

import android.os.Parcel;
import android.os.Parcelable;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class ColorItem implements Parcelable {
    private final String mBackground;
    private final String mText;
    private final String mPrimary;




    public ColorItem(String background, String text, String primary) {
        mBackground = background;
        mText = text;
        mPrimary = primary;
    }


    public ColorItem() {
        List<ColorItem> colors = new ArrayList<>();
        // Blue
        colors.add(new ColorItem("#84ffff", "#ffffff","#03a9f4"));
        // Green
        colors.add(new ColorItem("#b9f6ca", "#000000","#1de9b6"));
        // Purple
        colors.add(new ColorItem("#b388ff", "#ffffff","#7e57c2"));
        // Red
        colors.add(new ColorItem("#ff8a80", "#ffffff","#ff5252"));
        // Yellow
        colors.add(new ColorItem("#ffff8d", "#000000","#ffeb3b"));


        int randomcolor = new Random().nextInt(colors.size());

        mBackground = colors.get(randomcolor).getBackgroundColor();
        mText = colors.get(randomcolor).getTextColor();
        mPrimary = colors.get(randomcolor).getPrimaryColor();
    }


    public String getBackgroundColor() {
        return mBackground;
    }

    public String getTextColor() {
        return mText;
    }

    public String getPrimaryColor() {
        return mPrimary;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(this.mBackground);
        dest.writeString(this.mText);
        dest.writeString(this.mPrimary);
    }

    private ColorItem(Parcel in) {
        this.mBackground = in.readString();
        this.mText = in.readString();
        this.mPrimary = in.readString();
    }

    public static final Parcelable.Creator<ColorItem> CREATOR = new Parcelable.Creator<ColorItem>() {
        public ColorItem createFromParcel(Parcel source) {
            return new ColorItem(source);
        }

        public ColorItem[] newArray(int size) {
            return new ColorItem[size];
        }
    };
}