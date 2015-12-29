package cn.bjtu.nourriture.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.SearchView;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.adapters.GroupsAdapter;

/**
 * Author : Benjamin
 * 26/12/15
 **/
public class GroupAbstractFragment extends Fragment {

    protected GroupsAdapter mAdapter;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
    }
}
