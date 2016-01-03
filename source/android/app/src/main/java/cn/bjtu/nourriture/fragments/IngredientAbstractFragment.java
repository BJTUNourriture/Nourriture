package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.SearchView;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.adapters.IngredientsAdapter;

/**
 * Author : Tagzz
 * 26/12/15
 **/
public class IngredientAbstractFragment extends Fragment {

    protected IngredientsAdapter mAdapter;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
    }
}