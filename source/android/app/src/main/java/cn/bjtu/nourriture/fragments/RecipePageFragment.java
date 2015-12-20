package cn.bjtu.nourriture.fragments;

import android.support.v4.app.Fragment;
import android.util.Log;

/**
 * Created by storm on 12/20/15.
 */
public class RecipePageFragment extends Fragment {

    private static final String TAG = "RecipePageFragment";

    public static RecipePageFragment newInstance(String title) {
        RecipePageFragment fragment = new RecipePageFragment();
        Log.d(TAG, title);
        return fragment;
    }
}
