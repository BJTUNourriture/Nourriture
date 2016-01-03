package cn.bjtu.nourriture.adapters;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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
}