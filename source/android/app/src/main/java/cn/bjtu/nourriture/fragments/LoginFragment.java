package cn.bjtu.nourriture.fragments;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.UserActivity;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.model.Login;
import cn.bjtu.nourriture.model.Message;
import cn.bjtu.nourriture.model.Token;
import rx.Observable;
import rx.Subscriber;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

/**
 * Author : juliengenoud
 * 30/11/15
 **/
public class LoginFragment extends Fragment {

    static final String TAG = "LoginFragment";

    View inflatedView = null;
    EditText username = null;
    EditText password = null;
    Button submit = null;

    public static LoginFragment newInstance() {
        LoginFragment fragment = new LoginFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        inflatedView = inflater.inflate(R.layout.login_fragment, container, false);

        username = (EditText) inflatedView.findViewById(R.id.input_login_username);
        password = (EditText) inflatedView.findViewById(R.id.input_login_password);
        submit = (Button) inflatedView.findViewById(R.id.button_login);

        return inflatedView;
    }

    @Override
    public void onViewCreated(final View view, Bundle savedInstanceState) {
        //Log.e(TAG, "loginfragment created");

        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Login user = new Login(username.getText().toString(),
                        password.getText().toString());

                NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class);
                Observable<Token> observable = service.loginUser(user);

                observable
                        .subscribeOn(Schedulers.newThread())
                        .observeOn(AndroidSchedulers.mainThread())
                        .subscribe(new Subscriber<Token>() {
                            @Override
                            public void onCompleted() {
                                //Do nothing
                            }

                            @Override
                            public void onError(Throwable e) {
                                e.printStackTrace();
                                Log.e(TAG, e.getMessage());
                            }

                            @Override
                            public void onNext(Token token) {

                                SharedPreferences preferences = getActivity().getSharedPreferences(
                                        "GLOBAL", Context.MODE_PRIVATE);
                                SharedPreferences.Editor editor = preferences.edit();
                                editor.putString(getString(R.string.username_pref),
                                        token.getUserName());
                                editor.putString(getString(R.string.token_pref), token.getKey());
                                editor.putString(getString(R.string.user_id_pref),
                                        token.getUserId());
                                editor.commit();


                                Toast.makeText(getContext(), token.getUserName(), Toast.LENGTH_LONG).show();
                                Intent intent = new Intent(getActivity(), UserActivity.class);
                                startActivity(intent);
                            }
                        });
            }
        });

    }

}
