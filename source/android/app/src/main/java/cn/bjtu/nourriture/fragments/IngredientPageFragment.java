package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.model.Ingredients;

/**
 * Created by Tagzz
 * on 26/12/15.
 */
public class IngredientPageFragment extends Fragment {

    private static final String TAG = "IngredientPageFragment";
    private static String mTitle = null;

    View inflatedView = null;
    Toolbar toolbar = null;

    public static IngredientPageFragment newInstance(Ingredients ingredients) {
        IngredientPageFragment fragment = new IngredientPageFragment();

        mTitle = ingredients.getName();
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        inflatedView = inflater.inflate(R.layout.ingredients_fragment, container, false);
        toolbar = (Toolbar) inflatedView.findViewById(R.id.ingredients_page_toolbar);
        toolbar.setTitle(mTitle);
        return inflatedView;
    }
}
