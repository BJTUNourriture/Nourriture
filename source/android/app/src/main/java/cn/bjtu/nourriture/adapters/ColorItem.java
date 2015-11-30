package cn.bjtu.nourriture.adapters;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class ColorItem {
    private final String mBackground;
    private final String mText;
    private final String mPrimary;

    public ColorItem(String background, String text, String primary) {
        mBackground = background;
        mText = text;
        mPrimary = primary;
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
}