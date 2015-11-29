package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import cn.bjtu.nourriture.R;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class IngredientFragment extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.dummy_fragment,container,false);
        ((TextView)v.findViewById(R.id.dummy)).setText("Ingredients");
        return v;
    }
}
