package cn.bjtu.nourriture.fragments;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.design.widget.TextInputLayout;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.UserActivity;
import cn.bjtu.nourriture.api.ErrorUtils;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.model.ErrorLogin;
import cn.bjtu.nourriture.model.Ingredients;
import cn.bjtu.nourriture.model.Recipes;
import cn.bjtu.nourriture.model.Token;
import retrofit.HttpException;
import rx.Observable;
import rx.Subscriber;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class IngredientFragment extends Fragment {

    private List<Ingredients> mIngredients = new ArrayList<>();

    public static IngredientFragment newInstance() {
        IngredientFragment fragment = new IngredientFragment();
        return fragment;
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.ingredient_fragment,container,false);
        Log.d("Debug Ingredients", "Enter in Ingredients");
        NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class);
        Observable<List<Ingredients>> observable = service.getIngredients();
        Log.d("Debug Ingredients", "After request to API");

        //Request to API

        observable
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Subscriber<List <Ingredients>>() {
                    @Override
                    public void onCompleted() {
                        //Do nothing
                    }

                    @Override
                    public void onError(Throwable e) {
                                /*e.printStackTrace();
                                Log.e(TAG, e.getMessage());*/
                        if (e instanceof HttpException) {
                            ErrorLogin error = ErrorUtils.parseError(((HttpException) e).response().errorBody(), ServiceFactory.getRestAdapter());
                        }
                    }

                    @Override
                    public void onNext(List <Ingredients> ingredient) {
                        for (int i = 0; i < ingredient.size(); i++) {
                            mIngredients.add(new Ingredients(ingredient.get(i).getName(), ingredient.get(i).get_id()));
                            Log.d("Nom de l'ingredient", "onNext: " + mIngredients.get(0).getName());
                        }
                    }
                });

        return v;
    }
}
