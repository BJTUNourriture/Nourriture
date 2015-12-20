package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.design.widget.TextInputLayout;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.model.Ingredients;
import cn.bjtu.nourriture.model.Token;
import rx.Observable;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class IngredientFragment extends Fragment {

    public static IngredientFragment newInstance() {
        IngredientFragment fragment = new IngredientFragment();
        return fragment;
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.dummy_fragment,container,false);
        ((TextView)v.findViewById(R.id.dummy)).setText("Ingredients");
        Log.d("Debug Ingredients", "Enter in Ingredients");
        NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class);
        Observable<Ingredients> observable = service.getIngredients();
        Log.d("Debug Ingredients", "After request to API");

        return v;
    }
}
