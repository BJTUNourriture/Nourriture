package cn.bjtu.nourriture.fragments;

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
public class UserFragement extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.user_fragment, container, false);
    }

    @Override
    public void onViewCreated(final View view, Bundle savedInstanceState) {

        NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class, NourritureService.SERVICE_ENDPOINT);
        service.getUser("Julien")
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
                    }

                    @Override
                    public void onNext(User user) {
                        ((TextView)view.findViewById(R.id.user_id)).setText(user.get_id());
                        ((TextView)view.findViewById(R.id.user_email)).setText(user.getEmail());
                        ((TextView)view.findViewById(R.id.user_name)).setText(user.getUsername());

                    }
                });

    }


}
