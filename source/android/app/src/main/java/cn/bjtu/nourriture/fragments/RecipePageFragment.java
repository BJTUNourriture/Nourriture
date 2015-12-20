package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.model.Recipes;

/**
 * Created by storm on 12/20/15.
 */
public class RecipePageFragment extends Fragment {

    private static final String TAG = "RecipePageFragment";
    private static String mTitle = null;

    View inflatedView = null;
    Toolbar toolbar = null;

    public static RecipePageFragment newInstance(Recipes recipe) {
        RecipePageFragment fragment = new RecipePageFragment();

        mTitle = recipe.getName();
        Log.d("ALLAH", mTitle);
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        inflatedView = inflater.inflate(R.layout.recipe_fragment, container, false);
        toolbar = (Toolbar) inflatedView.findViewById(R.id.recipe_page_toolbar);
        toolbar.setTitle(mTitle);
        return inflatedView;
    }
}
