package cn.bjtu.nourriture.fragments;

import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import cn.bjtu.nourriture.R;

/**
 * Created by sylflo on 12/9/15.
 */
public class RegisterFragment extends Fragment {

    View inflatedView = null;
    EditText username = null;
    EditText email = null;
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

        username = (EditText) inflatedView.findViewById(R.id.input_register_username);
        email = (EditText) inflatedView.findViewById(R.id.input_register_email);
        password = (EditText) inflatedView.findViewById(R.id.input_register_password);
        submit = (Button) inflatedView.findViewById(R.id.button_register);

        return this.inflatedView;
    }

    @Override
    public void onViewCreated(final View view, Bundle savedInstanceState) {
        Log.e(getClass().toString(), "registerragment created");

    }

}
