package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.adapters.IngredientsAdapter;
import cn.bjtu.nourriture.widget.OffsetDecoration;

/**
 * Author : Tagzz
 * 26/11/15
 **/
public class IngredientFragment extends IngredientAbstractFragment  {

    public static IngredientFragment newInstance() {
        return new IngredientFragment();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.ingredient_fragment,container,false);
        return v;
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        setUpIngredientsGrid((RecyclerView) view.findViewById(R.id.ingredient_recycler));
        super.onViewCreated(view, savedInstanceState);
    }

    private void setUpIngredientsGrid(RecyclerView categoriesView) {
        final int spacing = getActivity().getApplicationContext().getResources()
                .getDimensionPixelSize(R.dimen.spacing_nano);
        categoriesView.addItemDecoration(new OffsetDecoration(spacing));
        mAdapter = new IngredientsAdapter(getActivity());
        mAdapter.setOnItemClickListener(
                new IngredientsAdapter.OnItemClickListener() {
                    @Override
                    public void onClick(View v, int position) {
//                        Activity activity = getActivity();
//                        startQuizActivityWithTransition(activity,
//                                v.findViewById(R.id.category_title),
//                                mAdapter.getItem(position));
                    }
                });
        categoriesView.setAdapter(mAdapter);

        if (mAdapter.getItemCount() > 0 && getView() != null) {
            getView().findViewById(R.id.empty_view).setVisibility(View.GONE);
        }
    }
}
