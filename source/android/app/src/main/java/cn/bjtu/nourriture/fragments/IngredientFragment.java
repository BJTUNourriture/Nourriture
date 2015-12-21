package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.SearchView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;
import java.util.List;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.api.ErrorUtils;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.model.ErrorLogin;
import cn.bjtu.nourriture.model.Ingredients;
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
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
    }

    @Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        MenuItem searchItem = menu.findItem(R.id.action_search);
        searchItem.setVisible(true);

        SearchView searchView = (SearchView) searchItem.getActionView();
        // Todo : Add ingredient filter (copy on recipes)
       // searchView.setOnQueryTextListener(this);
        searchView.setQueryHint(getString(R.string.search_hint_ingredient));

        super.onCreateOptionsMenu(menu, inflater);
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
