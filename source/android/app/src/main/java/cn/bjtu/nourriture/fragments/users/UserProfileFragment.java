package cn.bjtu.nourriture.fragments.users;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.model.User;
import rx.Subscriber;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class UserProfileFragment extends Fragment {

    static final String TAG = "UserProfileFragment";
    String mUsername = null;

    public static UserProfileFragment newInstance() {
        UserProfileFragment fragment = new UserProfileFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        SharedPreferences preferences = this.getActivity().getSharedPreferences("GLOBAL",
                Context.MODE_PRIVATE);
        mUsername = preferences.getString(getString(R.string.username_pref), null);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.user_fragment, container, false);
    }


    @Override
    public void onViewCreated(final View view, Bundle savedInstanceState) {
        NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class);
        service.getUser(mUsername)
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Subscriber<User>() {
                    @Override
                    public final void onCompleted() {
                        // do nothing
                    }

                    @Override
                    public final void onError(Throwable e) {
                        e.printStackTrace();
                        Log.e("User", e.getMessage());
                       /* view.findViewById(R.id.progress).setVisibility(View.GONE);
                        ((TextView) view.findViewById(R.id.user_name)).setText(e.getMessage());*/
                    }

                    @Override
                    public void onNext(User user) {
                      /*  view.findViewById(R.id.progress).setVisibility(View.GONE);*/
/*
                        ((TextView) view.findViewById(R.id.user_id)).setText(user.get_id());
*/
                        ((TextView) view.findViewById(R.id.user_email)).setText(user.getEmail());
                        ((TextView) view.findViewById(R.id.user_name)).setText(user.getUsername());

                    }
                });
    }
}
