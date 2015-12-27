package cn.bjtu.nourriture.adapters;

import android.app.Activity;
import android.graphics.Color;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.fragments.IngredientPageFragment;
import cn.bjtu.nourriture.model.Ingredients;
import rx.Observable;
import rx.Subscriber;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

public class IngredientsAdapter extends RecyclerView.Adapter<IngredientsAdapter.ViewHolder> {

    private final LayoutInflater mLayoutInflater;
    private final Activity mActivity;
    private List<Ingredients> mIngredients = new ArrayList<>();
    private List<Ingredients> mfilteredIngredients = new ArrayList<>();

    private static final String TAG = "Ingredients";

    private OnItemClickListener mOnItemClickListener;

    public interface OnItemClickListener {
        void onClick(View view, int position);
    }

    public IngredientsAdapter(Activity activity) {
        mActivity = activity;
        mLayoutInflater = LayoutInflater.from(activity.getApplicationContext());
        updateIngredients(activity);
    }

    private void updateIngredients(Activity activity) {
        //Insantiate the non-singleton Nourriture Service
        NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class);

        //Get all the Ingredients from the API
        Observable<List<Ingredients>> observable = service.getIngredients();

        observable
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Subscriber<List<Ingredients>>() {
                    @Override
                    public void onCompleted() {
                        //Do nothing
                    }

                    @Override
                    public void onError(Throwable e) {
                        //Log.e(TAG, e.getMessage());
                                /*e.printStackTrace();
                                Log.e(TAG, e.getMessage());*/
                                /*if (e instanceof HttpException) {
                                    ErrorLogin error = ErrorUtils.parseError(((HttpException) e).response().errorBody(), ServiceGenerator.getRetrofit());
                                }*/
                    }

                    @Override
                    public void onNext(List<Ingredients> ingredients) {
                        for (int i = 0; i < ingredients.size(); i++) {
                            Log.d(TAG, ingredients.get(i).getName());
                            mIngredients.add(new Ingredients(ingredients.get(i).getName(), ingredients.get(i).getDescription(), ingredients.get(i).get_id(), new ColorItem("#84ffff", "#ffffff", "#03a9f4")));
                        }
                        notifyDataSetChanged();
                    }
                });
        // get dummy ingredient

        mIngredients.add(new Ingredients("Gras De Canard", "TopKek", "000001", new ColorItem("#84ffff", "#ffffff","#03a9f4")));

    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        return new ViewHolder(mLayoutInflater
                .inflate(R.layout.item_ingredient, parent, false));
    }


    @Override
    public void onBindViewHolder(ViewHolder holder, final int position) {
        Ingredients ingredient = mIngredients.get(position);


        holder.icon.setImageResource(R.drawable.food);
        holder.itemView.setBackgroundColor(Color.parseColor(ingredient.getColor().getBackgroundColor()));
        holder.name.setText(ingredient.getName());
        holder.name.setTextColor(Color.parseColor(ingredient.getColor().getTextColor()));
        holder.name.setBackgroundColor(Color.parseColor(ingredient.getColor().getPrimaryColor()));

//        holder.title.setTextColor(getColor(theme.getTextPrimaryColor()));
//        holder.title.setBackgroundColor(getColor(theme.getPrimaryColor()));
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mOnItemClickListener.onClick(v, position);

                FragmentTransaction ft = ((FragmentActivity) mActivity).getSupportFragmentManager().beginTransaction();
                ft.replace(R.id.frame, IngredientPageFragment.newInstance(mIngredients.get(position)));
                ft.commit();
            }
        });
    }


    @Override
    public long getItemId(int position) {
        return mIngredients.get(position).get_id().hashCode();
    }

    @Override
    public int getItemCount() {
        return mIngredients.size();
    }

    public Ingredients getItem(int position) {
        return mIngredients.get(position);
    }

    public final void notifyItemChanged(String id) {
        notifyItemChanged(getItemPositionById(id));
    }

    private int getItemPositionById(String id) {
        for (int i = 0; i < mIngredients.size(); i++) {
            if (mIngredients.get(i).get_id().equals(id)) {
                return i;
            }

        }
        return -1;
    }

    public void setOnItemClickListener(OnItemClickListener onItemClickListener) {
        mOnItemClickListener = onItemClickListener;
    }


    static class ViewHolder extends RecyclerView.ViewHolder {

        final ImageView icon;
        final TextView name;

        public ViewHolder(View container) {
            super(container);
            icon = (ImageView) container.findViewById(R.id.ingredient_icon);
            name = (TextView) container.findViewById(R.id.ingredient_name);
        }
    }
}
