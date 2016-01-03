package cn.bjtu.nourriture.adapters;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.model.Groups;
import cn.bjtu.nourriture.pages.GroupPageActivity;
import rx.Observable;
import rx.Subscriber;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

public class GroupsAdapter extends RecyclerView.Adapter<GroupsAdapter.ViewHolder> {

    private final LayoutInflater mLayoutInflater;
    private final Activity mActivity;
    private List<Groups> mGroups = new ArrayList<>();
    private List<Groups> mfilteredGroups = new ArrayList<>();

    private static final String TAG = "Groups";

    private OnItemClickListener mOnItemClickListener;

    public interface OnItemClickListener {
        void onClick(View view, int position);
    }

    public GroupsAdapter(Activity activity) {
        mActivity = activity;
        mLayoutInflater = LayoutInflater.from(activity.getApplicationContext());
        updateGroups(activity);
    }

    private void updateGroups(Activity activity) {
        //Insantiate the non-singleton Nourriture Service
        NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class);

        //Get all the groups from the API
        Observable<List<Groups>> observable = service.getGroups();

        observable
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Subscriber<List<Groups>>() {
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
                    public void onNext(List<Groups> group) {
                        for (int i = 0; i < group.size(); i++) {
                            Log.d(TAG, group.get(i).getName());
                            mGroups.add(new Groups(group.get(i).getName(), group.get(i).getDescription(), group.get(i).get_id(), new ColorItem("#84ffff", "#ffffff", "#03a9f4")));
                        }
                        notifyDataSetChanged();
                    }
                });
        // get dummy groups

        mGroups.add(new Groups("Mangeur de gras", "Le gras c'est la vie !!!", "000001", new ColorItem("#84ffff", "#ffffff","#03a9f4")));
        mGroups.add(new Groups("Mangeur de legumes", "Les légumes vous rende utile à la société", "000002", new ColorItem("#b9f6ca", "#000000","#1de9b6")));
        mGroups.add(new Groups("Mangeur de viande", "Au sommet de la chaine alimentaire", "000003", new ColorItem("#b388ff", "#ffffff","#7e57c2")));
        mGroups.add(new Groups("Mangeur de tofu", "Mange du tofu, tu mourras vieux et depressif", "000004", new ColorItem("#ff8a80", "#ffffff","#ff5252")));
        mGroups.add(new Groups("Vegan", "Les mangeur de viande iront en enfer","000004", new ColorItem("#ff8a80", "#ffffff","#ff5252")));
        mGroups.add(new Groups("Le cannibalisme", "Le cannibalisme c'est la vie, la vie c'est le cannibalisme",  "000004", new ColorItem("#ff8a80", "#ffffff","#ff5252")));
        
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        return new ViewHolder(mLayoutInflater
                .inflate(R.layout.item_group, parent, false));
    }


    @Override
    public void onBindViewHolder(ViewHolder holder, final int position) {
        Groups group = mGroups.get(position);
//        setCategoryIcon(group, holder.icon);
//        holder.itemView.setBackgroundColor(getColor(theme.getWindowBackgroundColor()));


        holder.icon.setImageResource(R.drawable.food);
        holder.itemView.setBackgroundColor(Color.parseColor(group.getColor().getBackgroundColor()));
        holder.name.setText(group.getName());
        holder.name.setTextColor(Color.parseColor(group.getColor().getTextColor()));
        holder.name.setBackgroundColor(Color.parseColor(group.getColor().getPrimaryColor()));

//        holder.title.setTextColor(getColor(theme.getTextPrimaryColor()));
//        holder.title.setBackgroundColor(getColor(theme.getPrimaryColor()));
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mOnItemClickListener.onClick(v, position);
//
//                FragmentTransaction ft = ((FragmentActivity) mActivity).getSupportFragmentManager().beginTransaction();
//                ft.replace(R.id.frame, GroupPageActivity.newInstance(mGroups.get(position)));
//                ft.commit();

                Intent intent = new Intent(mActivity, GroupPageActivity.class);
                intent.putExtra(GroupPageActivity.NAME, mGroups.get(position));
                mActivity.startActivity(intent);
            }
        });
    }


    @Override
    public long getItemId(int position) {
        return mGroups.get(position).get_id().hashCode();
    }

    @Override
    public int getItemCount() {
        return mGroups.size();
    }

    public Groups getItem(int position) {
        return mGroups.get(position);
    }

    public final void notifyItemChanged(String id) {
        notifyItemChanged(getItemPositionById(id));
    }

    private int getItemPositionById(String id) {
        for (int i = 0; i < mGroups.size(); i++) {
            if (mGroups.get(i).get_id().equals(id)) {
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
            icon = (ImageView) container.findViewById(R.id.group_icon);
            name = (TextView) container.findViewById(R.id.group_name);
        }
    }
}
