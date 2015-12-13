package cn.bjtu.nourriture.fragments;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v4.app.Fragment;
import android.os.Bundle;

import cn.bjtu.nourriture.AnonymousActivity;
import cn.bjtu.nourriture.R;

/**
 * Created by sylflo on 12/13/15.
 */
public class LogoutFragment extends Fragment {

    public static LogoutFragment newInstance() {
        LogoutFragment fragment = new LogoutFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        SharedPreferences preferences = getActivity().getSharedPreferences(
                "GLOBAL", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = preferences.edit();
        editor.remove(getString(R.string.username_pref));
        editor.remove(getString(R.string.token_pref));
        editor.remove(getString(R.string.user_id_pref));
        editor.apply();

        Intent intent = new Intent(getActivity(), AnonymousActivity.class);
        startActivity(intent);
    }
}
