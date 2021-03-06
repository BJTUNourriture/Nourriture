package cn.bjtu.nourriture;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import cn.bjtu.nourriture.fragments.LoginFragment;
import cn.bjtu.nourriture.fragments.RegisterFragment;

/**
 * Created by sylflo on 12/9/15.
 */
public class AnonymousActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    static final String TAG = "AnonymousActivity";
    //Defining Variables
    private Toolbar toolbar;
    private NavigationView navigationView;
    private DrawerLayout drawerLayout;

    LoginFragment mLoginFragment = new LoginFragment();

    private void checkUserConnected() {

        SharedPreferences preferences = getSharedPreferences("GLOBAL", Context.MODE_PRIVATE);
        if (preferences.getString(getString(R.string.token_pref), null) != null) {
            Intent intent = new Intent(this, UserActivity.class);
            startActivity(intent);
        }

    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.anonymous_layout);


        // Initializing Toolbar and setting it as the actionbar
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        //Initializing NavigationView
        navigationView = (NavigationView) findViewById(R.id.anonymous_navigation_view);

        //Setting Navigation View Item Selected Listener to handle the item click of the navigation menu
        navigationView.setNavigationItemSelectedListener(this);

        // Initializing Drawer Layout and ActionBarToggle
        drawerLayout = (DrawerLayout) findViewById(R.id.drawer);
        ActionBarDrawerToggle actionBarDrawerToggle = new ActionBarDrawerToggle(this, drawerLayout, toolbar, R.string.openDrawer, R.string.closeDrawer) {

            @Override
            public void onDrawerClosed(View drawerView) {
                // Code here will be triggered once the drawer closes as we dont want anything to happen so we leave this blank
                super.onDrawerClosed(drawerView);
            }

            @Override
            public void onDrawerOpened(View drawerView) {
                // Code here will be triggered once the drawer open as we dont want anything to happen so we leave this blank

                super.onDrawerOpened(drawerView);
            }
        };

        drawerLayout.setDrawerListener(actionBarDrawerToggle);

        //calling sync state is necessary or else your hamburger icon wont show up
        actionBarDrawerToggle.syncState();


        // SET USER SELECTED
        navigationView.getMenu().getItem(0).setChecked(true);
        android.support.v4.app.FragmentTransaction trans1 = getSupportFragmentManager().beginTransaction();
        trans1.replace(R.id.frame, LoginFragment.newInstance());
        trans1.commit();

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
//        if (id == R.id.action_settings) {
//            return true;
//        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onNavigationItemSelected(MenuItem menuItem) {
        drawerLayout.closeDrawers();

        //Check to see which item was being clicked and perform appropriate action
        switch (menuItem.getItemId()) {


            //Replacing the main content with ContentFragment Which is our Inbox View;
            case R.id.login:
                toolbar.setTitle(getString(R.string.login));
                android.support.v4.app.FragmentTransaction trans1 = getSupportFragmentManager().beginTransaction();
                trans1.replace(R.id.frame, LoginFragment.newInstance());
                trans1.commit();
                break;
            case R.id.register:
                toolbar.setTitle(getString(R.string.register));
                android.support.v4.app.FragmentTransaction trans2 = getSupportFragmentManager().beginTransaction();
                trans2.replace(R.id.frame, RegisterFragment.newInstance());
                trans2.commit();
                break;

        }
        return true;
    }

    @Override
    protected void onStart() {
        super.onStart();
        checkUserConnected();
    }
}
