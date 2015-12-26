package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.model.Groups;

/**
 * Created by Benjamin
 * on 26/12/15.
 */
public class GroupPageFragment extends Fragment {

    private static final String TAG = "GroupPageFragment";
    private static String mTitle = null;

    View inflatedView = null;
    Toolbar toolbar = null;

    public static GroupPageFragment newInstance(Groups group) {
        GroupPageFragment fragment = new GroupPageFragment();

        mTitle = group.getName();
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        inflatedView = inflater.inflate(R.layout.group_fragment, container, false);
        toolbar = (Toolbar) inflatedView.findViewById(R.id.group_page_toolbar);
        toolbar.setTitle(mTitle);
        return inflatedView;
    }
}
