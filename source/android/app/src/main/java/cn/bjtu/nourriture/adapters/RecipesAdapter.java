package cn.bjtu.nourriture.adapters;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.UserActivity;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.model.Recipes;
import cn.bjtu.nourriture.model.Token;
import retrofit.HttpException;
import rx.Observable;
import rx.Subscriber;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

public class RecipesAdapter extends RecyclerView.Adapter<RecipesAdapter.ViewHolder> {

    private final LayoutInflater mLayoutInflater;
    private final Activity mActivity;
    private List<Recipes> mRecipes = new ArrayList<>();
    private static final String TAG = "Recipes";

    private OnItemClickListener mOnItemClickListener;

    public interface OnItemClickListener {
        void onClick(View view, int position);
    }

    public RecipesAdapter(Activity activity) {
        mActivity = activity;
        mLayoutInflater = LayoutInflater.from(activity.getApplicationContext());
        updateRecipes(activity);
    }

    private void updateRecipes(Activity activity) {
        //Insantiate the non-singleton Nourriture Service
        NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class);

        //Get all the recipes from the API
        Observable<List <Recipes>> observable = service.getRecipes();

        observable
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Subscriber<List <Recipes>>() {
                    @Override
                    public void onCompleted() {
                        //Do nothing
                    }

                    @Override
                    public void onError(Throwable e) {
                                Log.e(TAG, e.getMessage());
                                /*e.printStackTrace();
                                Log.e(TAG, e.getMessage());*/
                                /*if (e instanceof HttpException) {
                                    ErrorLogin error = ErrorUtils.parseError(((HttpException) e).response().errorBody(), ServiceGenerator.getRetrofit());
                                }*/
                    }

                    @Override
                    public void onNext(List <Recipes> recipe) {
                        for (int i = 0; i < recipe.size(); i++) {
                            Log.d(TAG, recipe.get(i).getName());
                            mRecipes.add(new Recipes(recipe.get(i).getName(), recipe.get(i).get_id(), new ColorItem("#84ffff", "#ffffff", "#03a9f4")));
                            notifyItemChanged(recipe.get(i).get_id());
                        }
                    }
                });
        // get dummy recipes
        /*
        mRecipes.add(new Recipes("MACARONIS", "000001", new ColorItem("#84ffff", "#ffffff","#03a9f4")));
        mRecipes.add(new Recipes("CHOUX FLEURS", "000002", new ColorItem("#b9f6ca", "#000000","#1de9b6")));
        mRecipes.add(new Recipes("RAVIOLIS", "000003", new ColorItem("#b388ff", "#ffffff","#7e57c2")));
        mRecipes.add(new Recipes("TRIPES FARCIES AUX ECHALOTTES", "000004", new ColorItem("#ff8a80", "#ffffff","#ff5252")));*/

    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        return new ViewHolder(mLayoutInflater
                .inflate(R.layout.item_recipe, parent, false));
    }


    
    @Override
    public void onBindViewHolder(ViewHolder holder, final int position) {
        Recipes recipe = mRecipes.get(position);
//        setCategoryIcon(recipe, holder.icon);
//        holder.itemView.setBackgroundColor(getColor(theme.getWindowBackgroundColor()));


        holder.icon.setImageResource(R.drawable.food);
        holder.itemView.setBackgroundColor(Color.parseColor(recipe.getColor().getBackgroundColor()));
        holder.title.setText(recipe.getName());
        holder.title.setTextColor(Color.parseColor(recipe.getColor().getTextColor()));
        holder.title.setBackgroundColor(Color.parseColor(recipe.getColor().getPrimaryColor()));

//        holder.title.setTextColor(getColor(theme.getTextPrimaryColor()));
//        holder.title.setBackgroundColor(getColor(theme.getPrimaryColor()));
                holder.itemView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        mOnItemClickListener.onClick(v, position);
                    }
                });
    }

    @Override
    public long getItemId(int position) {
        return mRecipes.get(position).get_id().hashCode();
    }

    @Override
    public int getItemCount() {
        return mRecipes.size();
    }

    public Recipes getItem(int position) {
        return mRecipes.get(position);
    }

    public final void notifyItemChanged(String id) {
        notifyItemChanged(getItemPositionById(id));
    }

    private int getItemPositionById(String id) {
        for (int i = 0; i < mRecipes.size(); i++) {
            if (mRecipes.get(i).get_id().equals(id)) {
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
        final TextView title;

        public ViewHolder(View container) {
            super(container);
            icon = (ImageView) container.findViewById(R.id.recipe_icon);
            title = (TextView) container.findViewById(R.id.recipe_title);
        }
    }
}
