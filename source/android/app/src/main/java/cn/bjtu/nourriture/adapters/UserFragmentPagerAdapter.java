package cn.bjtu.nourriture.adapters;

import android.content.Context;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;

import cn.bjtu.nourriture.fragments.UserProfileFragment;
import cn.bjtu.nourriture.fragments.UserSettingsFragment;

/**
 * Author : juliengenoud
 * 30/11/15
 **/

public class UserFragmentPagerAdapter extends FragmentPagerAdapter {

    final int PAGE_COUNT = 2;
    private String tabTitles[] = new String[]{"Profile", "Settings"};
    private Context context;

    public UserFragmentPagerAdapter(FragmentManager fm, Context context) {
        super(fm);
        this.context = context;
    }


    @Override
    public Fragment getItem(int position) {
        switch (position) {
            case 0:
                return UserProfileFragment.newInstance();
            case 1:
                return UserSettingsFragment.newInstance();
            default:
                return UserProfileFragment.newInstance();
        }
    }

    @Override
    public int getCount() {
        return PAGE_COUNT;
    }

    @Override
    public CharSequence getPageTitle(int position) {
        return tabTitles[position];
    }
}
