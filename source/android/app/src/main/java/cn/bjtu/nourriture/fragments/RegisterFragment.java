package cn.bjtu.nourriture.fragments;

import android.support.design.widget.TextInputLayout;
import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.api.NourritureService;
import cn.bjtu.nourriture.api.ServiceFactory;
import cn.bjtu.nourriture.model.Message;
import cn.bjtu.nourriture.model.Register;
import cn.bjtu.nourriture.model.User;
import retrofit.HttpException;
import rx.Observable;
import rx.Subscriber;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

/**
 * Created by sylflo on 12/9/15.
 */
public class RegisterFragment extends Fragment {

    private static final String TAG = "RegisterFragment";

    View inflatedView = null;

    TextInputLayout inputLayoutEmail = null;

    EditText username = null;
    EditText email = null;
    EditText confirm_email = null;

    EditText password = null;
    Button submit = null;

    public static RegisterFragment newInstance() {
        RegisterFragment fragment = new RegisterFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        this.inflatedView = inflater.inflate(R.layout.register_fragment, container, false);

        inputLayoutEmail = (TextInputLayout) inflatedView.findViewById(R.id.input_layout_register_email);

        username = (EditText) inflatedView.findViewById(R.id.input_register_username);
        email = (EditText) inflatedView.findViewById(R.id.input_register_email);
        confirm_email = (EditText) inflatedView.findViewById(R.id.input_confirm_register_email);
        password = (EditText) inflatedView.findViewById(R.id.input_register_password);
        submit = (Button) inflatedView.findViewById(R.id.button_register);

        return this.inflatedView;
    }

    @Override
    public void onViewCreated(final View view, Bundle savedInstanceState) {
        Log.e(getClass().toString(), "registerragment created");

        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (!validateEmail())
                    return ;

                Register registerUser = new Register(username.getText().toString(),
                        password.getText().toString(), email.getText().toString());

                //Log.d(TAG, username.getText().toString());
                NourritureService service = ServiceFactory.createRetrofitService(NourritureService.class);
                Observable<Message> observable = service.registerUser(registerUser);

                observable
                        .subscribeOn(Schedulers.newThread())
                        .observeOn(AndroidSchedulers.mainThread())
                        .subscribe(new Subscriber<Message>() {
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
                            public void onNext(Message message) {
                                Toast.makeText(getContext(), message.getMessage(), Toast.LENGTH_LONG).show();
                            }
                        });
            }
        });


    }

    private boolean validateEmail() {
        String email_test = email.getText().toString().trim();

        if (email_test.isEmpty())
        {
            inputLayoutEmail.setError(getString(R.string.err_email_pattern));
            requestFocus(email);
            return (false);
        }
        return (true);
    }

    private void requestFocus(View view) {
        if (view.requestFocus()) {
            getActivity().getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_VISIBLE);
        }
    }

}
